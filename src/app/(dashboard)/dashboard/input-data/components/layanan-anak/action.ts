"use server"

import { revalidatePath } from "next/cache"

import db from "@/lib/db"

export async function saveDataLayananAnak(data: {
  wargaId: string
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
    // Validasi apakah warga dengan ID tersebut ada
    const warga = await db.warga.findUnique({
      where: { id: data.wargaId },
    })

    if (!warga) {
      return { success: false, error: "Data warga tidak ditemukan" }
    }

    // Simpan data layanan anak
    await db.layananAnak.create({
      data: {
        wargaId: data.wargaId,
        jenisKelamin: data.jenisKelamin,
        namaOrangTua: data.namaOrangTua,
        statusGiziKurang: data.statusGiziKurang,
        statusGiziBuruk: data.statusGiziBuruk,
        stunting: data.stunting,
        imunisasiHbO: data.imunisasiHbO,
        imunisasiBcgPolio1: data.imunisasiBcgPolio1,
        statusKelengkapan: data.statusKelengkapan,
      },
    })

    // Revalidate path to refresh relevant page data
    revalidatePath("/(dashboard)/dashboard/input-data/layanan-anak")

    return { success: true }
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan data:", error)
    return { success: false, error: "Gagal menyimpan data" }
  }
}
