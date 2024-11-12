"use client"

import { useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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

import { saveDataLayananRemajaPutri } from "./action"

// Define the schema with Zod
const layananRemajaPutriSchema = z.object({
  wargaId: z.string().min(1, { message: "Warga ID wajib diisi" }),
  ttd: z.boolean(),
  anemia: z.boolean(),
  hasilAnemia: z.boolean(),
})

type LayananRemajaPutriFormValues = z.infer<typeof layananRemajaPutriSchema>

export default function InputDataLayananRemajaPutri({
  defaultValues,
}: {
  defaultValues?: LayananRemajaPutriFormValues
}) {
  const form = useForm<LayananRemajaPutriFormValues>({
    resolver: zodResolver(layananRemajaPutriSchema),
    defaultValues: defaultValues || {
      wargaId: "",
      ttd: false,
      anemia: false,
      hasilAnemia: false,
    },
  })

  const onSubmit = async (data: LayananRemajaPutriFormValues) => {
    const result = await saveDataLayananRemajaPutri(data)

    if (result.success) {
      toast({
        title: "Data berhasil disimpan",
        description: "Data layanan remaja putri berhasil disimpan",
      })
      form.reset()
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
              <Label htmlFor="wargaId">Pilih Warga</Label>
              <FormControl className="mt-2">
                <Input id="wargaId" placeholder="Warga ID" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        <div className="mt-5 space-y-2">
          {/* TTD Checkbox */}
          <FormField
            control={form.control}
            name="ttd"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="ttd"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor="ttd">TTD (Tablet Tambah Darah)</Label>
                  </div>
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />

          {/* Anemia Checkbox */}
          <FormField
            control={form.control}
            name="anemia"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="anemia"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor="anemia">Anemia</Label>
                  </div>
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />

          {/* Hasil Anemia Checkbox */}
          <FormField
            control={form.control}
            name="hasilAnemia"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="hasilAnemia"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor="hasilAnemia">Hasil Anemia</Label>
                  </div>
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="mt-5"
          disabled={!form.formState.isValid || form.formState.isSubmitting} // Disable if invalid or pending
        >
          {form.formState.isSubmitting ? "Menyimpan..." : "Simpan Data"}
        </Button>
      </form>
    </Form>
  )
}
