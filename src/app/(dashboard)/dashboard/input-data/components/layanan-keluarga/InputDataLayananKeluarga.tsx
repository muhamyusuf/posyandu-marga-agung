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

import { saveDataLayananKeluarga } from "./action"

// Define the validation schema with Zod
const layananKeluargaSchema = z
  .object({
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
  .superRefine((data, ctx) => {
    Object.keys(data).forEach((key) => {
      if (
        data[key as keyof typeof data] === undefined ||
        data[key as keyof typeof data] === ""
      ) {
        ctx.addIssue({
          code: "custom", // Tambahkan kode error 'custom'
          path: [key],
          message: "Data wajib diisi terlebih dahulu", // Pesan default
        })
      }
    })
  })

type LayananKeluargaFormValues = z.infer<typeof layananKeluargaSchema>

export default function InputDataLayananKeluarga() {
  const router = useRouter()
  const form = useForm<LayananKeluargaFormValues>({
    resolver: zodResolver(layananKeluargaSchema),
    shouldFocusError: true,
    mode: "onTouched",
  })

  const onSubmit = async (data: LayananKeluargaFormValues) => {
    const result = await saveDataLayananKeluarga(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan keluarga berhasil disimpan",
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

  const booleanFields: (keyof LayananKeluargaFormValues)[] = [
    "kategoriKeluargaRentan",
    "kartuKeluarga",
    "jambanSehat",
    "sumberAirBersih",
    "jaminanSosial",
    "jaminanKesehatan",
    "aksesSanitasi",
    "pendampinganKeluarga",
    "ketahananPangan",
  ]

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
                <Input id="wargaId" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Nama Kepala Keluarga Field */}
        <FormField
          control={form.control}
          name="namaKepalaKeluarga"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="namaKepalaKeluarga">Nama Kepala Keluarga</Label>
              <FormControl>
                <Input id="namaKepalaKeluarga" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Dusun Field */}
        <FormField
          control={form.control}
          name="dusun"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="dusun">Dusun</Label>
              <FormControl>
                <Input id="dusun" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Nama Ibu Hamil Field */}
        <FormField
          control={form.control}
          name="namaIbuHamil"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="namaIbuHamil">Nama Ibu Hamil</Label>
              <FormControl>
                <Input id="namaIbuHamil" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Anak 0-59 Bulan Field */}
        <FormField
          control={form.control}
          name="anak_0_59_bulan"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="anak_0_59_bulan">Anak 0-59 Bulan</Label>
              <FormControl>
                <Input id="anak_0_59_bulan" type="number" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        <div className="mt-2 space-y-2">
          {/* Boolean Fields with ShadCN Checkbox */}
          {booleanFields.map((name) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field, fieldState }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        id={name}
                        checked={Boolean(field.value)}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <Label htmlFor={name}>{name}</Label>
                  </div>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
          ))}
        </div>

        {/* Submit Button */}
        <Button type="submit" className="mt-5">
          Simpan Data
        </Button>
      </form>
    </Form>
  )
}
