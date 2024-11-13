"use server"

import { revalidatePath } from "next/cache"

import db from "@/lib/db"

export async function saveDataLayananCalonPengantin(data: {
  wargaId: string
  tanggalPernikahan: string
  periksaKesehatan: boolean
  bimbinganPerkawinan: boolean
}) {
  try {
    // Validasi apakah warga dengan ID tersebut ada
    const warga = await db.warga.findUnique({
      where: { id: data.wargaId },
    })

    if (!warga) {
      return { success: false, error: "Data warga tidak ditemukan" }
    }

    // Simpan data layanan calon pengantin
    await db.layananCalonPengantin.create({
      data: {
        wargaId: data.wargaId,
        tanggalPernikahan: new Date(data.tanggalPernikahan), // Konversi tanggal ke tipe Date
        periksaKesehatan: data.periksaKesehatan,
        bimbinganPerkawinan: data.bimbinganPerkawinan,
      },
    })

    // Revalidate path to refresh relevant page data
    revalidatePath("/(dashboard)/dashboard/input-data/layanan-calon-pengantin")

    return { success: true }
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan data:", error)
    return { success: false, error: "Gagal menyimpan data" }
  }
}
