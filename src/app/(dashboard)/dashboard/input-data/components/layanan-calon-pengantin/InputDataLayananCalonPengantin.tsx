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
  const form = useForm<LayananCalonPengantinFormValues>({
    resolver: zodResolver(layananCalonPengantinSchema),
  })

  const onSubmit = async (data: LayananCalonPengantinFormValues) => {
    const result = await saveDataLayananCalonPengantin(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan calon pengantin berhasil disimpan",
      })
      form.reset() // Clear the form
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 flex flex-col rounded-md"
      >
        {/* Warga ID Field */}
        <FormField
          control={form.control}
          name="wargaId"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="wargaId">Warga ID</Label>
              <FormControl>
                <Input id="wargaId" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tanggal Pernikahan Field */}
        <FormField
          control={form.control}
          name="tanggalPernikahan"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="tanggalPernikahan">Tanggal Pernikahan</Label>
              <FormControl>
                <Input id="tanggalPernikahan" type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Periksa Kesehatan Field */}
        <FormField
          control={form.control}
          name="periksaKesehatan"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <FormControl>
                  <Checkbox
                    id="periksaKesehatan"
                    checked={field.value as boolean}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <Label htmlFor="periksaKesehatan">Periksa Kesehatan</Label>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bimbingan Perkawinan Field */}
        <FormField
          control={form.control}
          name="bimbinganPerkawinan"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <FormControl>
                  <Checkbox
                    id="bimbinganPerkawinan"
                    checked={field.value as boolean}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <Label htmlFor="bimbinganPerkawinan">
                  Bimbingan Perkawinan
                </Label>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit">Simpan Data</Button>
      </form>
    </Form>
  )
}
