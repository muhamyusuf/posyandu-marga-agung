"use client"

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
  const form = useForm<LayananLansiaFormValues>({
    resolver: zodResolver(layananLansiaSchema),
  })

  const onSubmit = async (data: LayananLansiaFormValues) => {
    const result = await saveDataLayananLansia(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan lansia berhasil disimpan",
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

        {/* GDS Field */}
        <FormField
          control={form.control}
          name="gds"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="gds">GDS</Label>
              <FormControl>
                <Input id="gds" type="number" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Berat Badan Field */}
        <FormField
          control={form.control}
          name="beratBadan"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="beratBadan">Berat Badan</Label>
              <FormControl>
                <Input id="beratBadan" type="number" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Tinggi Badan Field */}
        <FormField
          control={form.control}
          name="tinggiBadan"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="tinggiBadan">Tinggi Badan</Label>
              <FormControl>
                <Input id="tinggiBadan" type="number" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Lingkar Pinggang Field */}
        <FormField
          control={form.control}
          name="lingkarPinggang"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="lingkarPinggang">Lingkar Pinggang</Label>
              <FormControl>
                <Input id="lingkarPinggang" type="number" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Tekanan Darah Field */}
        <FormField
          control={form.control}
          name="tekananDarah"
          render={({ field, fieldState }) => (
            <FormItem>
              <Label htmlFor="tekananDarah">Tekanan Darah</Label>
              <FormControl>
                <Input id="tekananDarah" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit">Simpan Data</Button>
      </form>
    </Form>
  )
}
