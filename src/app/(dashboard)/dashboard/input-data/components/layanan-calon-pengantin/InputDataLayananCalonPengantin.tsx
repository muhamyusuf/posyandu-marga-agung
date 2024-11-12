"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { saveDataLayananCalonPengantin } from "./action"

// Define the validation schema with Zod
const layananCalonPengantinSchema = z.object({
  wargaId: z.string().min(1, { message: "Warga ID wajib diisi" }),
  tanggalPernikahan: z.string().refine((value) => !isNaN(Date.parse(value)), {
    message: "Tanggal Pernikahan tidak valid",
  }),
  periksaKesehatan: z.boolean(),
  bimbinganPerkawinan: z.boolean(),
})

type LayananCalonPengantinFormValues = z.infer<
  typeof layananCalonPengantinSchema
>

export default function InputDataLayananCalonPengantin() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LayananCalonPengantinFormValues>({
    resolver: zodResolver(layananCalonPengantinSchema),
  })

  const onSubmit = async (data: LayananCalonPengantinFormValues) => {
    const result = await saveDataLayananCalonPengantin(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan calon pengantin berhasil disimpan",
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
      <h1 className="mb-6 text-2xl font-bold">
        Tambah Data Layanan Calon Pengantin
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Warga ID Field */}
        <div>
          <Label htmlFor="wargaId">Warga ID</Label>
          <Input id="wargaId" {...register("wargaId")} />
          {errors.wargaId && (
            <p className="text-sm text-red-500">{errors.wargaId.message}</p>
          )}
        </div>

        {/* Tanggal Pernikahan Field */}
        <div>
          <Label htmlFor="tanggalPernikahan">Tanggal Pernikahan</Label>
          <Input
            id="tanggalPernikahan"
            type="date"
            {...register("tanggalPernikahan")}
          />
          {errors.tanggalPernikahan && (
            <p className="text-sm text-red-500">
              {errors.tanggalPernikahan.message}
            </p>
          )}
        </div>

        {/* Periksa Kesehatan Field */}
        <div className="flex items-center gap-2">
          <Label htmlFor="periksaKesehatan">Periksa Kesehatan</Label>
          <input
            id="periksaKesehatan"
            type="checkbox"
            {...register("periksaKesehatan")}
          />
        </div>

        {/* Bimbingan Perkawinan Field */}
        <div className="flex items-center gap-2">
          <Label htmlFor="bimbinganPerkawinan">Bimbingan Perkawinan</Label>
          <input
            id="bimbinganPerkawinan"
            type="checkbox"
            {...register("bimbinganPerkawinan")}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit">Simpan Data</Button>
      </form>
    </main>
  )
}
