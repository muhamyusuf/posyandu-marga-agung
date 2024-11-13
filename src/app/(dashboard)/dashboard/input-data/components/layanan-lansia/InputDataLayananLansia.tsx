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

import { saveDataLayananLansia } from "./action"

// Define the validation schema with Zod
const layananLansiaSchema = z.object({
  wargaId: z.string().min(1, { message: "Warga ID wajib diisi" }),
  gds: z.number().min(0, { message: "GDS wajib diisi dan harus lebih dari 0" }),
  beratBadan: z
    .number()
    .min(1, { message: "Berat Badan wajib diisi dan harus lebih dari 0" }),
  tinggiBadan: z
    .number()
    .min(1, { message: "Tinggi Badan wajib diisi dan harus lebih dari 0" }),
  lingkarPinggang: z
    .number()
    .min(1, { message: "Lingkar Pinggang wajib diisi dan harus lebih dari 0" }),
  tekananDarah: z.string().min(1, { message: "Tekanan Darah wajib diisi" }),
})

type LayananLansiaFormValues = z.infer<typeof layananLansiaSchema>

export default function InputDataLayananLansia() {
  const router = useRouter()
  const form = useForm<LayananLansiaFormValues>({
    resolver: zodResolver(layananLansiaSchema),
    defaultValues: {
      wargaId: "",
      gds: undefined,
      beratBadan: undefined,
      tinggiBadan: undefined,
      lingkarPinggang: undefined,
      tekananDarah: "",
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

  const onSubmit = async (data: LayananLansiaFormValues) => {
    const result = await saveDataLayananLansia(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan lansia berhasil disimpan",
      })
      form.reset() // Clear the form
      // Redirect or show success message if needed
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

        {/* GDS Field */}
        <FormField
          control={form.control}
          name="gds"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="gds">GDS</Label>
              <FormControl>
                <Input
                  id="gds"
                  type="number"
                  placeholder="Masukkan GDS"
                  {...field}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Berat Badan Field */}
        <FormField
          control={form.control}
          name="beratBadan"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="beratBadan">Berat Badan</Label>
              <FormControl>
                <Input
                  id="beratBadan"
                  type="number"
                  placeholder="Masukkan Berat Badan"
                  {...field}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Tinggi Badan Field */}
        <FormField
          control={form.control}
          name="tinggiBadan"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="tinggiBadan">Tinggi Badan</Label>
              <FormControl>
                <Input
                  id="tinggiBadan"
                  type="number"
                  placeholder="Masukkan Tinggi Badan"
                  {...field}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Lingkar Pinggang Field */}
        <FormField
          control={form.control}
          name="lingkarPinggang"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="lingkarPinggang">Lingkar Pinggang</Label>
              <FormControl>
                <Input
                  id="lingkarPinggang"
                  type="number"
                  placeholder="Masukkan Lingkar Pinggang"
                  {...field}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Tekanan Darah Field */}
        <FormField
          control={form.control}
          name="tekananDarah"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="tekananDarah">Tekanan Darah</Label>
              <FormControl>
                <Input
                  id="tekananDarah"
                  placeholder="Masukkan Tekanan Darah"
                  {...field}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

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
