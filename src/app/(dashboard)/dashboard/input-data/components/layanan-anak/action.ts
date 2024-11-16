"use server"

import db from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function saveDataLayananAnak(data: {
  wargaId: string
  jenisKelamin: "LAKI_LAKI" | "PEREMPUAN"
  namaOrangTua: string
  statusGiziKurang: boolean
  statusGiziBuruk: boolean
  stunting: boolean
  pemantauanTumbuhKembangSetiapBulan: boolean
  ikutBKBPAUDSetiapBulan: boolean
  mendapatkanTambahanGizi: boolean
  imunisasiHbO: boolean
  imunisasiBcgPolio1: boolean
  DPTHBHlb1Polio2: boolean
  DPTHBHlb2Polio3: boolean
  campak: boolean
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
        pemantauanTumbuhKembangSetiapBulan:
          data.pemantauanTumbuhKembangSetiapBulan,
        ikutBKBPAUDSetiapBulan: data.ikutBKBPAUDSetiapBulan,
        mendapatkanTambahanGizi: data.mendapatkanTambahanGizi,
        imunisasiHbO: data.imunisasiHbO,
        imunisasiBcgPolio1: data.imunisasiBcgPolio1,
        DPTHBHlb1Polio2: data.DPTHBHlb1Polio2,
        DPTHBHlb2Polio3: data.DPTHBHlb2Polio3,
        campak: data.campak,
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
