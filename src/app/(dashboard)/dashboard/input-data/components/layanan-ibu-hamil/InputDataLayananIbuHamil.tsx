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
  const form = useForm<LayananIbuHamilFormValues>({
    resolver: zodResolver(layananIbuHamilSchema),
    defaultValues: {
      wargaId: "",
      hariPertamaHaid: "",
      tanggalPerkiraanLahir: "",
      umurKehamilan: undefined,
      periksaKehamilan: "",
      statusGizi: false,
      statusPeriksaLengkap: false,
      minumTtd: false,
      kpPascaBersalin: false,
      tambahanGizi: false,
    },
  })

  const onSubmit = async (data: LayananIbuHamilFormValues) => {
    const result = await saveDataLayananIbuHamil(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan ibu hamil berhasil disimpan",
      })
      form.reset() // Clear the form
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
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="wargaId">Warga ID</Label>
              <FormControl>
                <Input
                  id="wargaId"
                  placeholder="Masukkan Warga ID"
                  {...field}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Hari Pertama Haid Field */}
        <FormField
          control={form.control}
          name="hariPertamaHaid"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="hariPertamaHaid">Hari Pertama Haid</Label>
              <FormControl>
                <Input id="hariPertamaHaid" type="date" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Tanggal Perkiraan Lahir Field */}
        <FormField
          control={form.control}
          name="tanggalPerkiraanLahir"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="tanggalPerkiraanLahir">
                Tanggal Perkiraan Lahir
              </Label>
              <FormControl>
                <Input id="tanggalPerkiraanLahir" type="date" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Umur Kehamilan Field */}
        <FormField
          control={form.control}
          name="umurKehamilan"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="umurKehamilan">Umur Kehamilan</Label>
              <FormControl>
                <Input id="umurKehamilan" type="number" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Periksa Kehamilan Field */}
        <FormField
          control={form.control}
          name="periksaKehamilan"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="periksaKehamilan">Periksa Kehamilan</Label>
              <FormControl>
                <Input
                  id="periksaKehamilan"
                  placeholder="Masukkan Periksa Kehamilan"
                  {...field}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Boolean Fields with Checkboxes */}
        <div className="mt-5 space-y-2">
          {[
            { name: "statusGizi", label: "Status Gizi" },
            { name: "statusPeriksaLengkap", label: "Status Periksa Lengkap" },
            { name: "minumTtd", label: "Minum TTD" },
            { name: "kpPascaBersalin", label: "KP Pasca Bersalin" },
            { name: "tambahanGizi", label: "Tambahan Gizi" },
          ].map(({ name, label }) => (
            <FormField
              key={name}
              control={form.control}
              name={name as keyof LayananIbuHamilFormValues}
              render={({ field, fieldState }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        id={name}
                        checked={field.value as boolean}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <Label htmlFor={name}>{label}</Label>
                  </div>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
          ))}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="mt-5"
          disabled={!form.formState.isValid || form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Menyimpan..." : "Simpan Data"}
        </Button>
      </form>
    </Form>
  )
}
