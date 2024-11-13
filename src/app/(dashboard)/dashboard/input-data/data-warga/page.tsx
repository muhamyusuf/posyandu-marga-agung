"use client"

// Import necessary libraries and ShadCN components
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { saveDataWarga } from "./action"

// Define the validation schema with Zod
const wargaSchema = z
  .object({
    nama: z.string().min(1, { message: "Nama wajib diisi" }),
    nik: z
      .string()
      .min(16, { message: "NIK harus 16 karakter" })
      .max(16, { message: "NIK harus 16 karakter" }),
    tanggalLahir: z.string().refine((value) => !isNaN(Date.parse(value)), {
      message: "Tanggal Lahir tidak valid",
    }),
  })
  .superRefine((data, ctx) => {
    Object.keys(data).forEach((key) => {
      if (
        data[key as keyof typeof data] === undefined ||
        data[key as keyof typeof data] === ""
      ) {
        ctx.addIssue({
          code: "custom",
          path: [key],
          message: "Data wajib diisi terlebih dahulu", // Pesan default
        })
      }
    })
  })

export type WargaFormValues = z.infer<typeof wargaSchema>

export default function InputDataWarga() {
  const router = useRouter()
  const form = useForm<WargaFormValues>({
    resolver: zodResolver(wargaSchema),
    mode: "onChange", // Enable real-time validation
  })

  const onSubmit = async (data: WargaFormValues) => {
    // Calculate age based on tanggalLahir
    const age =
      new Date().getFullYear() - new Date(data.tanggalLahir).getFullYear()
    const wargaDataWithAge = { ...data, umur: age }

    const result = await saveDataWarga(wargaDataWithAge)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data warga berhasil disimpan",
      })
    } else {
      toast({
        title: "Gagal menyimpan data",
        description: result.error || "Terjadi kesalahan saat menyimpan data",
        variant: "destructive",
      })
    }
  }

  return (
    <main className="flex min-h-screen flex-col justify-start">
      <h1 className="mb-6 text-2xl font-bold">Tambah Data Warga</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-10 flex min-w-[300px] flex-col rounded-md sm:min-w-[400px]"
        >
          {/* Nama Field */}
          <FormField
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="nama">Nama</Label>
                <FormControl>
                  <Input
                    id="nama"
                    placeholder="Masukkan nama lengkap"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{form.formState.errors.nama?.message}</FormMessage>
              </FormItem>
            )}
          />

          {/* NIK Field */}
          <FormField
            control={form.control}
            name="nik"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="nik">NIK</Label>
                <FormControl>
                  <Input
                    id="nik"
                    placeholder="Masukkan NIK 16 digit"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{form.formState.errors.nik?.message}</FormMessage>
              </FormItem>
            )}
          />

          {/* Tanggal Lahir Field */}
          <FormField
            control={form.control}
            name="tanggalLahir"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="tanggalLahir">Tanggal Lahir</Label>
                <FormControl>
                  <Input
                    id="tanggalLahir"
                    type="date"
                    placeholder="Masukkan tanggal lahir"
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.tanggalLahir?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="mt-5"
            disabled={!form.formState.isValid || form.formState.isSubmitting}
          >
            Simpan Data
          </Button>
        </form>
      </Form>
    </main>
  )
}
