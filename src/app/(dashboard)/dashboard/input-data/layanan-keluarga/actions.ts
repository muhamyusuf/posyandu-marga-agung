"use server"
import { revalidatePath } from "next/cache"
import db from "@/lib/db"

export async function saveKeluargaData({
  namaKepalaKeluarga,
  dusun,
  namaIbuHamil,
  anak_0_59_bulan,
  kategoriKeluargaRentan,
  kartuKeluarga,
  jambanSehat,
  sumberAirBersih,
  jaminanSosial,
  jaminanKesehatan,
  aksesSanitasi,
  pendampinganKeluarga,
  ketahananPangan,
}: {
  namaKepalaKeluarga: string
  dusun: string
  namaIbuHamil: string
  anak_0_59_bulan: number
  kategoriKeluargaRentan: boolean
  kartuKeluarga: boolean
  jambanSehat: boolean
  sumberAirBersih: boolean
  jaminanSosial: boolean
  jaminanKesehatan: boolean
  aksesSanitasi: boolean
  pendampinganKeluarga: boolean
  ketahananPangan: boolean
}) {
  try {
    await db.keluarga.create({
      data: {
        namaKepalaKeluarga,
        dusun,
        namaIbuHamil,
        anak_0_59_bulan,
        kategoriKeluargaRentan,
        kartuKeluarga,
        jambanSehat,
        sumberAirBersih,
        jaminanSosial,
        jaminanKesehatan,
        aksesSanitasi,
        pendampinganKeluarga,
        ketahananPangan,
      },
    })
    revalidatePath("/(dashboard)/dashboard/input-data/layanan-keluarga")
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan data:", error)
    throw new Error("Gagal menyimpan data")
  }
}
