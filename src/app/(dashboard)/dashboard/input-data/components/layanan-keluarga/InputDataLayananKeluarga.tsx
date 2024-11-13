"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { saveDataLayananKeluarga } from "./action"

// Define the validation schema with Zod
const layananKeluargaSchema = z.object({
  wargaId: z.string().min(1, { message: "Warga ID wajib diisi" }),
  namaKepalaKeluarga: z
    .string()
    .min(1, { message: "Nama Kepala Keluarga wajib diisi" }),
  dusun: z.string().min(1, { message: "Dusun wajib diisi" }),
  namaIbuHamil: z.string().min(1, { message: "Nama Ibu Hamil wajib diisi" }),
  anak_0_59_bulan: z.preprocess(
    (value) => parseInt(value as string, 10),
    z.number().min(0, { message: "Anak 0-59 bulan wajib diisi" })
  ),
  kategoriKeluargaRentan: z.boolean(),
  kartuKeluarga: z.boolean(),
  jambanSehat: z.boolean(),
  sumberAirBersih: z.boolean(),
  jaminanSosial: z.boolean(),
  jaminanKesehatan: z.boolean(),
  aksesSanitasi: z.boolean(),
  pendampinganKeluarga: z.boolean(),
  ketahananPangan: z.boolean(),
})

type LayananKeluargaFormValues = z.infer<typeof layananKeluargaSchema>

export default function InputDataLayananKeluarga() {
  const router = useRouter()
  const form = useForm<LayananKeluargaFormValues>({
    resolver: zodResolver(layananKeluargaSchema),
  })

  const [open, setOpen] = React.useState(false)
  const [wargaOptions, setWargaOptions] = React.useState<
    { id: string; name: string }[]
  >([])
  const [selectedWarga, setSelectedWarga] = React.useState("")

  // Fetch the top 10 warga on component mount
  React.useEffect(() => {
    const fetchTop10Warga = async () => {
      try {
        const response = await fetch("/api/warga/top-ten")
        const data = await response.json()
        setWargaOptions(
          data.map((warga: { id: string; nama: string }) => ({
            id: warga.id,
            name: warga.nama,
          }))
        )
      } catch (error) {
        console.error("Error fetching top 10 warga:", error)
      }
    }
    fetchTop10Warga()
  }, [])

  // Fetch warga options based on user search input
  const handleWargaSearch = async (query: string) => {
    if (query.trim().length === 0) return

    try {
      const response = await fetch(
        `/api/warga/search?q=${encodeURIComponent(query)}`
      )
      const results = await response.json()
      setWargaOptions(
        results.map((warga: { id: string; nama: string }) => ({
          id: warga.id,
          name: warga.nama,
        }))
      )
    } catch (error) {
      console.error("Error fetching warga options:", error)
      setWargaOptions([])
    }
  }

  const onSubmit = async (data: LayananKeluargaFormValues) => {
    const result = await saveDataLayananKeluarga(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan keluarga berhasil disimpan",
      })
      form.reset()
    } else {
      toast({
        title: "Gagal menyimpan data",
        description: result.error || "Terjadi kesalahan saat menyimpan data",
        variant: "destructive",
      })
    }
  }

  const booleanFields: {
    name: keyof LayananKeluargaFormValues
    label: string
  }[] = [
    { name: "kategoriKeluargaRentan", label: "Kategori Keluarga Rentan" },
    { name: "kartuKeluarga", label: "Kartu Keluarga" },
    { name: "jambanSehat", label: "Jamban Sehat" },
    { name: "sumberAirBersih", label: "Sumber Air Bersih" },
    { name: "jaminanSosial", label: "Jaminan Sosial" },
    { name: "jaminanKesehatan", label: "Jaminan Kesehatan" },
    { name: "aksesSanitasi", label: "Akses Sanitasi" },
    { name: "pendampinganKeluarga", label: "Pendampingan Keluarga" },
    { name: "ketahananPangan", label: "Ketahanan Pangan" },
  ]

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 flex flex-col rounded-md"
      >
        {/* Warga ID Field with Combobox */}
        <FormField
          control={form.control}
          name="wargaId"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="wargaId">Pilih Warga</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                  >
                    {selectedWarga || "Cari warga..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Cari warga..."
                      onValueChange={(query) => handleWargaSearch(query)}
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>Warga tidak ditemukan.</CommandEmpty>
                      <CommandGroup>
                        {wargaOptions.map((warga) => (
                          <CommandItem
                            key={warga.id}
                            value={warga.id}
                            onSelect={() => {
                              field.onChange(warga.id)
                              setSelectedWarga(warga.name)
                              setOpen(false)
                            }}
                          >
                            {warga.name}
                            <Check
                              className={cn(
                                "ml-auto",
                                field.value === warga.id
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="namaKepalaKeluarga"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="namaKepalaKeluarga">Nama Kepala Keluarga</Label>
              <FormControl>
                <Input
                  id="namaKepalaKeluarga"
                  placeholder="Masukkan Nama Kepala Keluarga"
                  {...field}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Dusun Field */}
        <FormField
          control={form.control}
          name="dusun"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="dusun">Dusun</Label>
              <FormControl>
                <Input id="dusun" placeholder="Masukkan Dusun" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Nama Ibu Hamil Field */}
        <FormField
          control={form.control}
          name="namaIbuHamil"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="namaIbuHamil">Nama Ibu Hamil</Label>
              <FormControl>
                <Input
                  id="namaIbuHamil"
                  placeholder="Masukkan Nama Ibu Hamil"
                  {...field}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Anak 0-59 Bulan Field */}
        <FormField
          control={form.control}
          name="anak_0_59_bulan"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="anak_0_59_bulan">Anak 0-59 Bulan</Label>
              <FormControl>
                <Input
                  id="anak_0_59_bulan"
                  type="number"
                  min="0"
                  max="59"
                  placeholder="Jumlah Anak 0-59 Bulan"
                  {...field}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Boolean Fields with Checkboxes */}
        <div className="mt-5 space-y-2">
          {booleanFields.map(({ name, label }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field, fieldState }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        id={name}
                        checked={Boolean(field.value)}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <Label htmlFor={name}>{label}</Label>
                  </div>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
          ))}
        </div>
        {/* Other form fields like Nama Kepala Keluarga, Dusun, Nama Ibu Hamil, etc. */}

        <Button
          type="submit"
          className="mt-5"
          disabled={!form.formState.isValid || form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Menyimpan..." : "Simpan Data"}
        </Button>
      </form>
    </Form>
  )
}
