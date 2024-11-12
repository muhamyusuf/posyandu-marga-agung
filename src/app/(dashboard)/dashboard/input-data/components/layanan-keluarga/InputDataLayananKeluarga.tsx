"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { saveDataLayananKeluarga } from "./action"

// Define the validation schema with Zod
const layananKeluargaSchema = z.object({
  wargaId: z.string().min(1, { message: "Warga ID wajib diisi" }),
  namaKepalaKeluarga: z
    .string()
    .min(1, { message: "Nama Kepala Keluarga wajib diisi" }),
  dusun: z.string().min(1, { message: "Dusun wajib diisi" }),
  namaIbuHamil: z.string().min(1, { message: "Nama Ibu Hamil wajib diisi" }),
  anak_0_59_bulan: z
    .number()
    .min(0, { message: "Anak 0-59 bulan wajib diisi" }),
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LayananKeluargaFormValues>({
    resolver: zodResolver(layananKeluargaSchema),
  })

  const onSubmit = async (data: LayananKeluargaFormValues) => {
    const result = await saveDataLayananKeluarga(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan keluarga berhasil disimpan",
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
      <h1 className="mb-6 text-2xl font-bold">Tambah Data Layanan Keluarga</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Warga ID Field */}
        <div>
          <Label htmlFor="wargaId">Warga ID</Label>
          <Input id="wargaId" {...register("wargaId")} />
          {errors.wargaId && (
            <p className="text-sm text-red-500">{errors.wargaId.message}</p>
          )}
        </div>

        {/* Nama Kepala Keluarga Field */}
        <div>
          <Label htmlFor="namaKepalaKeluarga">Nama Kepala Keluarga</Label>
          <Input id="namaKepalaKeluarga" {...register("namaKepalaKeluarga")} />
          {errors.namaKepalaKeluarga && (
            <p className="text-sm text-red-500">
              {errors.namaKepalaKeluarga.message}
            </p>
          )}
        </div>

        {/* Dusun Field */}
        <div>
          <Label htmlFor="dusun">Dusun</Label>
          <Input id="dusun" {...register("dusun")} />
          {errors.dusun && (
            <p className="text-sm text-red-500">{errors.dusun.message}</p>
          )}
        </div>

        {/* Nama Ibu Hamil Field */}
        <div>
          <Label htmlFor="namaIbuHamil">Nama Ibu Hamil</Label>
          <Input id="namaIbuHamil" {...register("namaIbuHamil")} />
          {errors.namaIbuHamil && (
            <p className="text-sm text-red-500">
              {errors.namaIbuHamil.message}
            </p>
          )}
        </div>

        {/* Anak 0-59 Bulan Field */}
        <div>
          <Label htmlFor="anak_0_59_bulan">Anak 0-59 Bulan</Label>
          <Input
            id="anak_0_59_bulan"
            type="number"
            {...register("anak_0_59_bulan", { valueAsNumber: true })}
          />
          {errors.anak_0_59_bulan && (
            <p className="text-sm text-red-500">
              {errors.anak_0_59_bulan.message}
            </p>
          )}
        </div>

        {/* Boolean Fields */}
        <div className="flex flex-col gap-2">
          <Label>Kategori Keluarga Rentan</Label>
          <input type="checkbox" {...register("kategoriKeluargaRentan")} />

          <Label>Kartu Keluarga</Label>
          <input type="checkbox" {...register("kartuKeluarga")} />

          <Label>Jamban Sehat</Label>
          <input type="checkbox" {...register("jambanSehat")} />

          <Label>Sumber Air Bersih</Label>
          <input type="checkbox" {...register("sumberAirBersih")} />

          <Label>Jaminan Sosial</Label>
          <input type="checkbox" {...register("jaminanSosial")} />

          <Label>Jaminan Kesehatan</Label>
          <input type="checkbox" {...register("jaminanKesehatan")} />

          <Label>Akses Sanitasi</Label>
          <input type="checkbox" {...register("aksesSanitasi")} />

          <Label>Pendampingan Keluarga</Label>
          <input type="checkbox" {...register("pendampinganKeluarga")} />

          <Label>Ketahanan Pangan</Label>
          <input type="checkbox" {...register("ketahananPangan")} />
        </div>

        {/* Submit Button */}
        <Button type="submit">Simpan Data</Button>
      </form>
    </main>
  )
}
