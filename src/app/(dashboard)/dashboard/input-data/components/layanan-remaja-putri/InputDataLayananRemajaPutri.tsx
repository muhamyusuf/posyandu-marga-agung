"use client"

import { useState, useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox" // Replacing Switch with Checkbox
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
  const [isPending, startTransition] = useTransition()

  const form = useForm<LayananRemajaPutriFormValues>({
    resolver: zodResolver(layananRemajaPutriSchema),
    defaultValues: defaultValues || {
      wargaId: "",
      ttd: false,
      anemia: false,
      hasilAnemia: false,
    },
  })

  const onSubmit = (data: LayananRemajaPutriFormValues) => {
    toast({
      title: "Berhasil Submit Data",
      description: "",
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 flex flex-col rounded-md"
      >
        <FormField
          control={form.control}
          name="wargaId"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="wargaId">Pilih Warga</Label>
              <FormControl className="mt-2">
                <Input placeholder="Warga ID" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-5">
          <FormField
            control={form.control}
            name="ttd"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="ttd"
                    />
                    <label htmlFor="ttd">TTD (Tablet Tambah Darah)</label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="anemia"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="anemia"
                    />
                    <label htmlFor="anemia">Anemia</label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hasilAnemia"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="hasilAnemia"
                    />
                    <label htmlFor="hasilAnemia">Hasil Anemia</label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" disabled={isPending} className="mt-5">
          {isPending ? "Menyimpan..." : "Simpan Data"}
        </Button>
      </form>
    </Form>
  )
}
