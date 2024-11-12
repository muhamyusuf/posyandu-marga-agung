"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { saveDataLayananRemajaPutri } from "./action"

// Define the validation schema with Zod
const layananRemajaPutriSchema = z.object({
  wargaId: z.string().min(1, { message: "Warga ID wajib diisi" }),
  ttd: z.boolean(),
  anemia: z.boolean(),
  hasilAnemia: z.boolean(),
})

type LayananRemajaPutriFormValues = z.infer<typeof layananRemajaPutriSchema>

export default function InputDataLayananRemajaPutri() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LayananRemajaPutriFormValues>({
    resolver: zodResolver(layananRemajaPutriSchema),
  })

  const onSubmit = async (data: LayananRemajaPutriFormValues) => {
    const result = await saveDataLayananRemajaPutri(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan remaja putri berhasil disimpan",
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
        Tambah Data Layanan Remaja Putri
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

        {/* TTD Field */}
        <div className="flex items-center gap-2">
          <Label htmlFor="ttd">TTD (Tablet Tambah Darah)</Label>
          <input id="ttd" type="checkbox" {...register("ttd")} />
        </div>

        {/* Anemia Field */}
        <div className="flex items-center gap-2">
          <Label htmlFor="anemia">Anemia</Label>
          <input id="anemia" type="checkbox" {...register("anemia")} />
        </div>

        {/* Hasil Anemia Field */}
        <div className="flex items-center gap-2">
          <Label htmlFor="hasilAnemia">Hasil Anemia</Label>
          <input
            id="hasilAnemia"
            type="checkbox"
            {...register("hasilAnemia")}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit">Simpan Data</Button>
      </form>
    </main>
  )
}
