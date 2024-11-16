"use client"

import * as React from "react"

import { Check, ChevronsUpDown } from "lucide-react"
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { saveDataLayananIbuHamil } from "./action"
import { toast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

// Define the validation schema with Zod
const layananIbuHamilSchema = z.object({
  wargaId: z.string().min(1, { message: "Warga ID wajib diisi" }),
  hariPertamaHaid: z.string().refine((value) => !isNaN(Date.parse(value)), {
    message: "Hari Pertama Haid tidak valid",
  }),
  tanggalPerkiraanLahir: z
    .string()
    .refine((value) => !isNaN(Date.parse(value)), {
      message: "Tanggal Perkiraan Lahir tidak valid",
    }),
  umurKehamilan: z
    .number()
    .min(1, { message: "Umur Kehamilan wajib diisi dan harus lebih dari 0" }),
  periksaKehamilan: z
    .string()
    .min(1, { message: "Periksa Kehamilan wajib diisi" }),
  statusGiziKEK: z.boolean(),
  statusGiziRisti: z.boolean(),
  statusPeriksaLengkap: z.boolean(),
  minumTtd: z.boolean(),
  kpPascaBersalin: z.boolean(),
  tambahanGizi: z.boolean(),
})

type LayananIbuHamilFormValues = z.infer<typeof layananIbuHamilSchema>

export default function InputDataLayananIbuHamil() {
  const form = useForm<LayananIbuHamilFormValues>({
    resolver: zodResolver(layananIbuHamilSchema),
    defaultValues: {
      wargaId: "",
      hariPertamaHaid: "",
      tanggalPerkiraanLahir: "",
      umurKehamilan: undefined,
      periksaKehamilan: "",
      statusGiziKEK: false,
      statusGiziRisti: false,
      statusPeriksaLengkap: false,
      minumTtd: false,
      kpPascaBersalin: false,
      tambahanGizi: false,
    },
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

  const onSubmit = async (data: LayananIbuHamilFormValues) => {
    const result = await saveDataLayananIbuHamil(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan ibu hamil berhasil disimpan",
      })
      form.reset() // Clear the form
    } else {
      toast({
        title: "Gagal menyimpan data",
        description: result.error || "Terjadi kesalahan saat menyimpan data",
        variant: "destructive",
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 flex flex-col rounded-md"
      >
        {/* Warga ID Field with ComboBox */}
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

        {/* Hari Pertama Haid Field */}
        <FormField
          control={form.control}
          name="hariPertamaHaid"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="hariPertamaHaid">Hari Terakhir Haid</Label>
              <FormControl>
                <Input id="hariPertamaHaid" type="date" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Tanggal Perkiraan Lahir Field */}
        <FormField
          control={form.control}
          name="tanggalPerkiraanLahir"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="tanggalPerkiraanLahir">
                Tanggal Perkiraan Lahir
              </Label>
              <FormControl>
                <Input id="tanggalPerkiraanLahir" type="date" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Umur Kehamilan Field */}
        <FormField
          control={form.control}
          name="umurKehamilan"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="umurKehamilan">
                Umur Kehamilan (dalam minggu)
              </Label>
              <FormControl>
                <Input
                  id="umurKehamilan"
                  type="number"
                  {...field}
                  onChange={(event) => field.onChange(+event.target.value)}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Periksa Kehamilan Field */}
        <FormField
          control={form.control}
          name="periksaKehamilan"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="periksaKehamilan">Periksa Kehamilan</Label>
              <FormControl>
                <Input
                  id="periksaKehamilan"
                  placeholder="Masukkan Periksa Kehamilan"
                  {...field}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Boolean Fields with Checkboxes */}
        <div className="mt-5 space-y-2">
          {[
            { name: "statusGiziKEK", label: "Status Gizi KEK" },
            { name: "statusGiziRisti", label: "Status Gizi Risti" },
            { name: "statusPeriksaLengkap", label: "Status Periksa Lengkap" },
            { name: "minumTtd", label: "Minum TTD" },
            { name: "kpPascaBersalin", label: "KP Pasca Bersalin" },
            { name: "tambahanGizi", label: "Tambahan Gizi" },
          ].map(({ name, label }) => (
            <FormField
              key={name}
              control={form.control}
              name={name as keyof LayananIbuHamilFormValues}
              render={({ field, fieldState }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        id={name}
                        checked={field.value as boolean}
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
