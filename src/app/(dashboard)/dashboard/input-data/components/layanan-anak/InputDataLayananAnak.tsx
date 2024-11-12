"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LayananAnakFormValues>({
    resolver: zodResolver(layananAnakSchema),
  })

  const onSubmit = async (data: LayananAnakFormValues) => {
    const result = await saveDataLayananAnak(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan anak berhasil disimpan",
      })
      reset() // Clear the form
      router.push("/success") // Redirect or show success message if needed
    } else {
      toast({
        title: "Gagal menyimpan data",
        description: result.error || "Terjadi kesalahan saat menyimpan data",
        variant: "destructive",
      })
    }
  }

  return (
    <main className="flex min-h-screen flex-col justify-start p-6">
      <h1 className="mb-6 text-2xl font-bold">Tambah Data Layanan Anak</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Warga ID Field */}
        <div>
          <Label htmlFor="wargaId">Warga ID</Label>
          <Input id="wargaId" {...register("wargaId")} />
          {errors.wargaId && (
            <p className="text-sm text-red-500">{errors.wargaId.message}</p>
          )}
        </div>

        {/* Jenis Kelamin Field */}
        <div>
          <Label htmlFor="jenisKelamin">Jenis Kelamin</Label>
          <select id="jenisKelamin" {...register("jenisKelamin")}>
            <option value="LAKI_LAKI">Laki-Laki</option>
            <option value="PEREMPUAN">Perempuan</option>
          </select>
          {errors.jenisKelamin && (
            <p className="text-sm text-red-500">
              {errors.jenisKelamin.message}
            </p>
          )}
        </div>

        {/* Nama Orang Tua Field */}
        <div>
          <Label htmlFor="namaOrangTua">Nama Orang Tua</Label>
          <Input id="namaOrangTua" {...register("namaOrangTua")} />
          {errors.namaOrangTua && (
            <p className="text-sm text-red-500">
              {errors.namaOrangTua.message}
            </p>
          )}
        </div>

        {/* Boolean Fields */}
        <div className="flex flex-col gap-2">
          <Label>Status Gizi Kurang</Label>
          <input type="checkbox" {...register("statusGiziKurang")} />

          <Label>Status Gizi Buruk</Label>
          <input type="checkbox" {...register("statusGiziBuruk")} />

          <Label>Stunting</Label>
          <input type="checkbox" {...register("stunting")} />

          <Label>Imunisasi HbO</Label>
          <input type="checkbox" {...register("imunisasiHbO")} />

          <Label>Imunisasi Bcg Polio1</Label>
          <input type="checkbox" {...register("imunisasiBcgPolio1")} />

          <Label>Status Kelengkapan</Label>
          <input type="checkbox" {...register("statusKelengkapan")} />
        </div>

        {/* Submit Button */}
        <Button type="submit">Simpan Data</Button>
      </form>
    </main>
  )
}
