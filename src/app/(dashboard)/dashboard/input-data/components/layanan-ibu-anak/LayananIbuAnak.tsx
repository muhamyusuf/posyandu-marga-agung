"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { getAllDataWarga } from "../../data-warga/action"
import { ComboboxWarga } from "../ComboboxWarga"
import { saveDataLayananIbuAnak } from "./action"

// Schema Validation with Zod
const layananSchema = z.object({
  wargaId: z.string().min(1, { message: "Warga ID wajib diisi" }),
  namaIbu: z.string().min(1, { message: "Nama Ibu wajib diisi" }),
  namaAyah: z.string().min(1, { message: "Nama Ayah wajib diisi" }),
  namaAnak: z.string().min(1, { message: "Nama Anak wajib diisi" }),
  jenisKelamin: z.enum(["LAKI_LAKI", "PEREMPUAN"], {
    errorMap: () => ({ message: "Jenis Kelamin wajib dipilih" }),
  }),
  tinggiBadanIbu: z
    .number({ invalid_type_error: "Tinggi Badan Ibu harus berupa angka" })
    .positive({ message: "Tinggi Badan Ibu harus lebih dari 0" }),
  beratBadanIbu: z
    .number({ invalid_type_error: "Berat Badan Ibu harus berupa angka" })
    .positive({ message: "Berat Badan Ibu harus lebih dari 0" }),
  lingkarLenganIbu: z
    .number({ invalid_type_error: "Lingkar Lengan Ibu harus berupa angka" })
    .positive({ message: "Lingkar Lengan Ibu harus lebih dari 0" }),
  lingkarPinggangIbu: z
    .number({ invalid_type_error: "Lingkar Pinggang Ibu harus berupa angka" })
    .positive({ message: "Lingkar Pinggang Ibu harus lebih dari 0" }),
  alatKontrasepsi: z
    .string()
    .min(1, { message: "Alat Kontrasepsi wajib diisi" }),
  tinggiBadanAnak: z
    .number({ invalid_type_error: "Tinggi Badan Anak harus berupa angka" })
    .positive({ message: "Tinggi Badan Anak harus lebih dari 0" }),
  beratBadanAnak: z
    .number({ invalid_type_error: "Berat Badan Anak harus berupa angka" })
    .positive({ message: "Berat Badan Anak harus lebih dari 0" }),
  umurAnak: z
    .number({ invalid_type_error: "Umur Anak harus berupa angka" })
    .positive({ message: "Umur Anak harus lebih dari 0" }),
  lingkarLenganAnak: z
    .number({ invalid_type_error: "Lingkar Lengan Anak harus berupa angka" })
    .positive({ message: "Lingkar Lengan Anak harus lebih dari 0" }),
  lingkarKepalaAnak: z
    .number({ invalid_type_error: "Lingkar Kepala Anak harus berupa angka" })
    .positive({ message: "Lingkar Kepala Anak harus lebih dari 0" }),
})

type LayananFormValues = z.infer<typeof layananSchema>

export default function LayananIbuAnakForm() {
  const form = useForm<LayananFormValues>({
    resolver: zodResolver(layananSchema),
    defaultValues: {
      wargaId: "",
      namaIbu: "",
      namaAyah: "",
      namaAnak: "",
      jenisKelamin: undefined,
      tinggiBadanIbu: undefined,
      beratBadanIbu: undefined,
      lingkarLenganIbu: undefined,
      lingkarPinggangIbu: undefined,
      alatKontrasepsi: "",
      tinggiBadanAnak: undefined,
      beratBadanAnak: undefined,
      umurAnak: undefined,
      lingkarLenganAnak: undefined,
      lingkarKepalaAnak: undefined,
    },
  })

  const onSubmit = async (data: LayananFormValues) => {
    const result = await saveDataLayananIbuAnak(data)
    if (result.success) {
      alert("Data berhasil disimpan!")
      form.reset()
    } else {
      alert(`Gagal menyimpan data: ${result.error}`)
    }
  }

  const [wargaOptions, setWargaOptions] = React.useState<
    { value: string; label: string }[]
  >([])

  React.useEffect(() => {
    async function fetchData() {
      try {
        const result = await getAllDataWarga()
        if (result.success && result.data) {
          setWargaOptions(
            result.data.map((warga: { id: string; nama: string }) => ({
              value: warga.id,
              label: warga.nama,
            }))
          )
        } else {
          console.error(result.error || "Data is undefined")
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 flex w-[310px] flex-col space-y-2 rounded-md sm:w-[400px]"
      >
        {/* Pilih Nama Ibu */}
        <FormField
          control={form.control}
          name="namaIbu"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Label>Pilih Nama Ibu</Label>
              <FormControl>
                <ComboboxWarga
                  options={wargaOptions}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Pilih nama ibu..."
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.namaIbu?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        {/* Tinggi Badan Ibu */}
        <FormField
          control={form.control}
          name="tinggiBadanIbu"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Label>Tinggi Badan Ibu (cm)</Label>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Masukkan Tinggi Badan Ibu"
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.tinggiBadanIbu?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        {/* Berat Badan Ibu */}
        <FormField
          control={form.control}
          name="beratBadanIbu"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Label>Berat Badan Ibu (kg)</Label>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Masukkan Berat Badan Ibu"
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.beratBadanIbu?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        {/* Lingkar Lengan Ibu */}
        <FormField
          control={form.control}
          name="lingkarLenganIbu"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Label>Lingkar Lengan Ibu (cm)</Label>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Masukkan Lingkar Lengan Ibu"
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.lingkarLenganIbu?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        {/* Lingkar Pinggang Ibu */}
        <FormField
          control={form.control}
          name="lingkarPinggangIbu"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Label>Lingkar Pinggang Ibu (cm)</Label>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Masukkan Lingkar Pinggang Ibu"
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.lingkarPinggangIbu?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        {/* Pilih Nama Ayah */}
        <FormField
          control={form.control}
          name="namaAyah"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Label>Pilih Nama Ayah</Label>
              <FormControl>
                <ComboboxWarga
                  options={wargaOptions}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Pilih nama ayah..."
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.namaAyah?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        {/* Pilih Nama Anak/Balita */}
        <FormField
          control={form.control}
          name="namaAnak"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Label>Pilih Nama Anak/Balita</Label>
              <FormControl>
                <ComboboxWarga
                  options={wargaOptions}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Pilih nama anak/balita..."
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.namaAnak?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jenisKelamin"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Label>Jenis Kelamin Anak</Label>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="border border-primary">
                    <SelectValue placeholder="Pilih jenis kelamin" />
                  </SelectTrigger>
                  <SelectContent className="border border-primary">
                    <SelectItem value="LAKI_LAKI">Laki-Laki</SelectItem>
                    <SelectItem value="PEREMPUAN">Perempuan</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage>
                {form.formState.errors.jenisKelamin?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        {/* Berat Badan Anak/Balita */}
        <FormField
          control={form.control}
          name="beratBadanAnak"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Label>Berat Badan Anak/Balita (kg)</Label>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Masukkan Berat Badan Anak/Balita"
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.beratBadanAnak?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        {/* Tinggi Badan Anak/Balita */}
        <FormField
          control={form.control}
          name="tinggiBadanAnak"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Label>Tinggi Badan Anak/Balita (cm)</Label>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Masukkan Tinggi Badan Anak/Balita"
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.tinggiBadanAnak?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        {/* Lingkar Lengan Anak/Balita */}
        <FormField
          control={form.control}
          name="lingkarLenganAnak"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Label>Lingkar Lengan Anak/Balita (cm)</Label>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Masukkan Lingkar Lengan Anak/Balita"
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.lingkarLenganAnak?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        {/* Alat Kontrasepsi */}
        <FormField
          control={form.control}
          name="alatKontrasepsi"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Label>Alat Kontrasepsi</Label>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="border border-primary">
                    <SelectValue placeholder="Pilih alat kontrasepsi" />
                  </SelectTrigger>
                  <SelectContent className="border border-primary">
                    <SelectItem value="SUNTIK">Suntik</SelectItem>
                    <SelectItem value="IMPLAN">Implan</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage>
                {form.formState.errors.alatKontrasepsi?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Simpan Data
        </Button>
      </form>
    </Form>
  )
}
