"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LayananLansiaFormValues>({
    resolver: zodResolver(layananLansiaSchema),
  })

  const onSubmit = async (data: LayananLansiaFormValues) => {
    const result = await saveDataLayananLansia(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan lansia berhasil disimpan",
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
      <h1 className="mb-6 text-2xl font-bold">Tambah Data Layanan Lansia</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Warga ID Field */}
        <div>
          <Label htmlFor="wargaId">Warga ID</Label>
          <Input id="wargaId" {...register("wargaId")} />
          {errors.wargaId && (
            <p className="text-sm text-red-500">{errors.wargaId.message}</p>
          )}
        </div>

        {/* GDS Field */}
        <div>
          <Label htmlFor="gds">GDS</Label>
          <Input
            id="gds"
            type="number"
            {...register("gds", { valueAsNumber: true })}
          />
          {errors.gds && (
            <p className="text-sm text-red-500">{errors.gds.message}</p>
          )}
        </div>

        {/* Berat Badan Field */}
        <div>
          <Label htmlFor="beratBadan">Berat Badan</Label>
          <Input
            id="beratBadan"
            type="number"
            {...register("beratBadan", { valueAsNumber: true })}
          />
          {errors.beratBadan && (
            <p className="text-sm text-red-500">{errors.beratBadan.message}</p>
          )}
        </div>

        {/* Tinggi Badan Field */}
        <div>
          <Label htmlFor="tinggiBadan">Tinggi Badan</Label>
          <Input
            id="tinggiBadan"
            type="number"
            {...register("tinggiBadan", { valueAsNumber: true })}
          />
          {errors.tinggiBadan && (
            <p className="text-sm text-red-500">{errors.tinggiBadan.message}</p>
          )}
        </div>

        {/* Lingkar Pinggang Field */}
        <div>
          <Label htmlFor="lingkarPinggang">Lingkar Pinggang</Label>
          <Input
            id="lingkarPinggang"
            type="number"
            {...register("lingkarPinggang", { valueAsNumber: true })}
          />
          {errors.lingkarPinggang && (
            <p className="text-sm text-red-500">
              {errors.lingkarPinggang.message}
            </p>
          )}
        </div>

        {/* Tekanan Darah Field */}
        <div>
          <Label htmlFor="tekananDarah">Tekanan Darah</Label>
          <Input id="tekananDarah" {...register("tekananDarah")} />
          {errors.tekananDarah && (
            <p className="text-sm text-red-500">
              {errors.tekananDarah.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit">Simpan Data</Button>
      </form>
    </main>
  )
}
