"use client"

// Import necessary libraries and ShadCN components
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { saveDataWarga } from "./action"

// Define the validation schema with Zod
const wargaSchema = z.object({
  nama: z.string().min(1, { message: "Nama wajib diisi" }),
  nik: z
    .string()
    .min(16, { message: "NIK harus 16 karakter" })
    .max(16, { message: "NIK harus 16 karakter" }),
  tanggalLahir: z.string().refine((value) => !isNaN(Date.parse(value)), {
    message: "Tanggal Lahir tidak valid",
  }),
})

export type WargaFormValues = z.infer<typeof wargaSchema>

export default function InputDataWarga() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WargaFormValues>({
    resolver: zodResolver(wargaSchema),
  })

  const onSubmit = async (data: WargaFormValues) => {
    // Calculate age based on tanggalLahir
    const age =
      new Date().getFullYear() - new Date(data.tanggalLahir).getFullYear()
    const wargaDataWithAge = { ...data, umur: age }

    await saveDataWarga(wargaDataWithAge) // Replace with your server action

    toast({
      title: "Data berhasil disimpan",
      description: "Data warga berhasil disimpan",
    })
  }

  return (
    <main className="flex min-h-screen flex-col justify-start p-6">
      <h1 className="mb-6 text-2xl font-bold">Tambah Data Warga</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Nama Field */}
        <div>
          <Label htmlFor="nama">Nama</Label>
          <Input id="nama" {...register("nama")} />
          {errors.nama && (
            <p className="text-sm text-red-500">{errors.nama.message}</p>
          )}
        </div>

        {/* NIK Field */}
        <div>
          <Label htmlFor="nik">NIK</Label>
          <Input id="nik" {...register("nik")} />
          {errors.nik && (
            <p className="text-sm text-red-500">{errors.nik.message}</p>
          )}
        </div>

        {/* Tanggal Lahir Field */}
        <div>
          <Label htmlFor="tanggalLahir">Tanggal Lahir</Label>
          <Input id="tanggalLahir" type="date" {...register("tanggalLahir")} />
          {errors.tanggalLahir && (
            <p className="text-sm text-red-500">
              {errors.tanggalLahir.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-5">
          <Button type="submit">Simpan Data</Button>
        </div>
      </form>
    </main>
  )
}
