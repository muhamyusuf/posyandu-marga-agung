"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

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
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { saveDataLayananRemajaPutri } from "./action"

const layananRemajaPutriSchema = z.object({
  wargaId: z.string().min(1, { message: "Warga ID wajib diisi" }),
  ttd: z.boolean(),
  anemia: z.boolean(),
  hasilAnemia: z.boolean(),
})

type LayananRemajaPutriFormValues = z.infer<typeof layananRemajaPutriSchema>

export default function InputDataLayananRemajaPutri({
  defaultValues,
}: {
  defaultValues?: LayananRemajaPutriFormValues
}) {
  const form = useForm<LayananRemajaPutriFormValues>({
    resolver: zodResolver(layananRemajaPutriSchema),
    defaultValues: defaultValues || {
      wargaId: "",
      ttd: false,
      anemia: false,
      hasilAnemia: false,
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
    if (query.trim().length === 0) {
      // If the query is empty, show the top 10 options again
      return
    }

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

  const onSubmit = async (data: LayananRemajaPutriFormValues) => {
    const result = await saveDataLayananRemajaPutri(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan remaja putri berhasil disimpan",
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

        {/* TTD Checkbox */}
        <div className="mt-5 space-y-2">
          <FormField
            control={form.control}
            name="ttd"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="ttd"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor="ttd">TTD (Tablet Tambah Darah)</Label>
                  </div>
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />

          {/* Anemia Checkbox */}
          <FormField
            control={form.control}
            name="anemia"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="anemia"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor="anemia">Anemia</Label>
                  </div>
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />

          {/* Hasil Anemia Checkbox */}
          <FormField
            control={form.control}
            name="hasilAnemia"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="hasilAnemia"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor="hasilAnemia">Hasil Anemia</Label>
                  </div>
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
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
