"use server"

import db from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function saveDataLansia({
  nama,
  nik,
  tanggalLahir,
  umur,
  gds,
  beratBadan,
  tinggiBadan,
  lingkarPinggang,
  tekananDarah,
}: {
  nama: string
  nik: string
  tanggalLahir: Date
  umur: number
  gds: number
  beratBadan: number
  tinggiBadan: number
  lingkarPinggang: number
  tekananDarah: string
}) {
  try {
    await db.lansia.create({
      data: {
        nama,
        nik,
        tanggalLahir,
        umur,
        gds,
        beratBadan,
        tinggiBadan,
        lingkarPinggang,
        tekananDarah,
      },
    })
    revalidatePath("/(dashboard)/dashboard/input-data/layanan-lansia")
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan data:", error)
    throw new Error("Gagal menyimpan data")
  }
}
