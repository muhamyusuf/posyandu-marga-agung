"use server"
import db from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function saveCalonPengantinData({
  nama,
  nik,
  tanggalLahir,
  umur,
  tanggalPernikahan,
  periksaKesehatan,
  bimbinganPerkawinan,
}: {
  nama: string
  nik: string
  tanggalLahir: Date
  umur: number
  tanggalPernikahan: Date
  periksaKesehatan: boolean
  bimbinganPerkawinan: boolean
}) {
  try {
    await db.calonPengantin.create({
      data: {
        nama,
        nik,
        tanggalLahir,
        umur,
        tanggalPernikahan,
        periksaKesehatan,
        bimbinganPerkawinan,
      },
    })
    revalidatePath("/(dashboard)/dashboard/input-data/layanan-calon-pengantin")
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan data:", error)
    throw new Error("Gagal menyimpan data")
  }
}
