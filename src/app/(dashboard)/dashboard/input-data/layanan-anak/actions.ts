"use server"
import db from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function saveDataAnak({
  nama,
  nik,
  tanggalLahir,
  umur,
  jenisKelamin,
  namaOrangTua,
  statusGiziKurang,
  statusGiziBuruk,
  stunting,
  imunisasiHbO,
  imunisasiBcgPolio1,
  statusKelengkapan,
}: {
  nama: string
  nik: string
  tanggalLahir: Date
  umur: number
  jenisKelamin: "LAKI_LAKI" | "PEREMPUAN"
  namaOrangTua: string
  statusGiziKurang: boolean
  statusGiziBuruk: boolean
  stunting: boolean
  imunisasiHbO: boolean
  imunisasiBcgPolio1: boolean
  statusKelengkapan: boolean
}) {
  try {
    await db.dataAnak.create({
      data: {
        nama,
        nik,
        tanggalLahir,
        umur,
        jenisKelamin,
        namaOrangTua,
        statusGiziKurang,
        statusGiziBuruk,
        stunting,
        imunisasiHbO,
        imunisasiBcgPolio1,
        statusKelengkapan,
      },
    })
    revalidatePath("/(dashboard)/dashboard/input-data/anak")
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan data:", error)
    throw new Error("Gagal menyimpan data")
  }
}
