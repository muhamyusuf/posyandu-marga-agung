"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { saveDataLayananIbuHamil } from "./action"

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
  statusGizi: z.boolean(),
  statusPeriksaLengkap: z.boolean(),
  minumTtd: z.boolean(),
  kpPascaBersalin: z.boolean(),
  tambahanGizi: z.boolean(),
})

type LayananIbuHamilFormValues = z.infer<typeof layananIbuHamilSchema>

export default function InputDataLayananIbuHamil() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LayananIbuHamilFormValues>({
    resolver: zodResolver(layananIbuHamilSchema),
  })

  const onSubmit = async (data: LayananIbuHamilFormValues) => {
    const result = await saveDataLayananIbuHamil(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan ibu hamil berhasil disimpan",
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
      <h1 className="mb-6 text-2xl font-bold">Tambah Data Layanan Ibu Hamil</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Warga ID Field */}
        <div>
          <Label htmlFor="wargaId">Warga ID</Label>
          <Input id="wargaId" {...register("wargaId")} />
          {errors.wargaId && (
            <p className="text-sm text-red-500">{errors.wargaId.message}</p>
          )}
        </div>

        {/* Hari Pertama Haid Field */}
        <div>
          <Label htmlFor="hariPertamaHaid">Hari Pertama Haid</Label>
          <Input
            id="hariPertamaHaid"
            type="date"
            {...register("hariPertamaHaid")}
          />
          {errors.hariPertamaHaid && (
            <p className="text-sm text-red-500">
              {errors.hariPertamaHaid.message}
            </p>
          )}
        </div>

        {/* Tanggal Perkiraan Lahir Field */}
        <div>
          <Label htmlFor="tanggalPerkiraanLahir">Tanggal Perkiraan Lahir</Label>
          <Input
            id="tanggalPerkiraanLahir"
            type="date"
            {...register("tanggalPerkiraanLahir")}
          />
          {errors.tanggalPerkiraanLahir && (
            <p className="text-sm text-red-500">
              {errors.tanggalPerkiraanLahir.message}
            </p>
          )}
        </div>

        {/* Umur Kehamilan Field */}
        <div>
          <Label htmlFor="umurKehamilan">Umur Kehamilan</Label>
          <Input
            id="umurKehamilan"
            type="number"
            {...register("umurKehamilan", { valueAsNumber: true })}
          />
          {errors.umurKehamilan && (
            <p className="text-sm text-red-500">
              {errors.umurKehamilan.message}
            </p>
          )}
        </div>

        {/* Periksa Kehamilan Field */}
        <div>
          <Label htmlFor="periksaKehamilan">Periksa Kehamilan</Label>
          <Input id="periksaKehamilan" {...register("periksaKehamilan")} />
          {errors.periksaKehamilan && (
            <p className="text-sm text-red-500">
              {errors.periksaKehamilan.message}
            </p>
          )}
        </div>

        {/* Boolean Fields */}
        <div className="flex flex-col gap-2">
          <Label>Status Gizi</Label>
          <input type="checkbox" {...register("statusGizi")} />

          <Label>Status Periksa Lengkap</Label>
          <input type="checkbox" {...register("statusPeriksaLengkap")} />

          <Label>Minum TTD</Label>
          <input type="checkbox" {...register("minumTtd")} />

          <Label>KP Pasca Bersalin</Label>
          <input type="checkbox" {...register("kpPascaBersalin")} />

          <Label>Tambahan Gizi</Label>
          <input type="checkbox" {...register("tambahanGizi")} />
        </div>

        {/* Submit Button */}
        <Button type="submit">Simpan Data</Button>
      </form>
    </main>
  )
}
