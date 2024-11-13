"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
  imunisasiHbO: z.boolean(),
  imunisasiBcgPolio1: z.boolean(),
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
      imunisasiHbO: false,
      imunisasiBcgPolio1: false,
      statusKelengkapan: false,
    },
  })

  const onSubmit = async (data: LayananAnakFormValues) => {
    const result = await saveDataLayananAnak(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan anak berhasil disimpan",
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
        {/* Warga ID Field */}
        <FormField
          control={form.control}
          name="wargaId"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="wargaId">Warga ID</Label>
              <FormControl>
                <Input
                  id="wargaId"
                  placeholder="Masukkan Warga ID"
                  {...field}
                />
              </FormControl>
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
            { name: "imunisasiHbO", label: "Imunisasi HbO" },
            { name: "imunisasiBcgPolio1", label: "Imunisasi Bcg Polio1" },
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
