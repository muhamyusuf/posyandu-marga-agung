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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { saveDataLayananAnak } from "./action"

// Define the validation schema with Zod
const layananAnakSchema = z.object({
  wargaId: z.string().min(1, { message: "Warga ID wajib diisi" }),
  jenisKelamin: z.enum(["LAKI_LAKI", "PEREMPUAN"], {
    required_error: "Jenis Kelamin wajib dipilih",
  }),
  namaOrangTua: z.string().min(1, { message: "Nama Orang Tua wajib diisi" }),
  statusGiziKurang: z.boolean(),
  statusGiziBuruk: z.boolean(),
  stunting: z.boolean(),
  pemantauanTumbuhKembangSetiapBulan: z.boolean(),
  ikutBKBPAUDSetiapBulan: z.boolean(),
  mendapatkanTambahanGizi: z.boolean(),
  imunisasiHbO: z.boolean(),
  imunisasiBcgPolio1: z.boolean(),
  DPTHBHlb1Polio2: z.boolean(),
  DPTHBHlb2Polio3: z.boolean(),
  campak: z.boolean(),
  statusKelengkapan: z.boolean(),
})

type LayananAnakFormValues = z.infer<typeof layananAnakSchema>

export default function InputDataLayananAnak() {
  const router = useRouter()
  const form = useForm<LayananAnakFormValues>({
    resolver: zodResolver(layananAnakSchema),
    defaultValues: {
      wargaId: "",
      jenisKelamin: undefined,
      namaOrangTua: "",
      statusGiziKurang: false,
      statusGiziBuruk: false,
      stunting: false,
      pemantauanTumbuhKembangSetiapBulan: false,
      ikutBKBPAUDSetiapBulan: false,
      mendapatkanTambahanGizi: false,
      imunisasiHbO: false,
      imunisasiBcgPolio1: false,
      DPTHBHlb1Polio2: false,
      DPTHBHlb2Polio3: false,
      campak: false,
      statusKelengkapan: false,
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

  const onSubmit = async (data: LayananAnakFormValues) => {
    const result = await saveDataLayananAnak(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan anak berhasil disimpan",
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
                              field.onChange(warga.id) // Set the form field value
                              setSelectedWarga(warga.name) // Set the display name
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

        {/* Jenis Kelamin Field */}
        <FormField
          control={form.control}
          name="jenisKelamin"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="jenisKelamin">Jenis Kelamin</Label>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Jenis Kelamin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="LAKI_LAKI">Laki-Laki</SelectItem>
                    <SelectItem value="PEREMPUAN">Perempuan</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Nama Orang Tua Field */}
        <FormField
          control={form.control}
          name="namaOrangTua"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="namaOrangTua">Nama Orang Tua</Label>
              <FormControl>
                <Input
                  id="namaOrangTua"
                  placeholder="Masukkan Nama Orang Tua"
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
            { name: "statusGiziKurang", label: "Status Gizi Kurang" },
            { name: "statusGiziBuruk", label: "Status Gizi Buruk" },
            { name: "stunting", label: "Stunting" },
            {
              name: "pemantauanTumbuhKembangSetiapBulan",
              label: "Pemantauan Tumbuh Kembang Setiap Bulan",
            },
            {
              name: "ikutBKBPAUDSetiapBulan",
              label: "Ikut BKB/PAUD Setiap Bulan",
            },
            {
              name: "mendapatkanTambahanGizi",
              label: "Mendapatkan Tambahan Gizi",
            },
            { name: "imunisasiHbO", label: "Imunisasi HbO" },
            { name: "imunisasiBcgPolio1", label: "Imunisasi Bcg Polio1" },
            { name: "DPTHBHlb1Polio2", label: "DPT-HB-Hlb1 & Polio2" },
            { name: "DPTHBHlb2Polio3", label: "DPT-HB-Hlb1 & Polio2" },
            { name: "campak", label: "Campak" },
            { name: "statusKelengkapan", label: "Status Kelengkapan" },
          ].map(({ name, label }) => (
            <FormField
              key={name}
              control={form.control}
              name={name as keyof LayananAnakFormValues}
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

        {/* Submit Button */}
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
