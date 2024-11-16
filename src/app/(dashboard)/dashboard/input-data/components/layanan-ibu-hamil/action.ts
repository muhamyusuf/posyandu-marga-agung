"use server"

import db from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function saveDataLayananIbuHamil(data: {
  wargaId: string
  hariPertamaHaid: string
  tanggalPerkiraanLahir: string
  umurKehamilan: number
  periksaKehamilan: string
  statusGiziKEK: boolean
  statusGiziRisti: boolean
  statusPeriksaLengkap: boolean
  minumTtd: boolean
  kpPascaBersalin: boolean
  tambahanGizi: boolean
}) {
  try {
    // Validasi apakah warga dengan ID tersebut ada
    const warga = await db.warga.findUnique({
      where: { id: data.wargaId },
    })

    if (!warga) {
      return { success: false, error: "Data warga tidak ditemukan" }
    }

    // Simpan data layanan ibu hamil
    await db.layananIbuHamil.create({
      data: {
        wargaId: data.wargaId,
        hariPertamaHaid: new Date(data.hariPertamaHaid),
        tanggalPerkiraanLahir: new Date(data.tanggalPerkiraanLahir),
        umurKehamilan: data.umurKehamilan,
        periksaKehamilan: data.periksaKehamilan,
        statusGiziKEK: data.statusGiziKEK,
        statusGiziRisti: data.statusGiziRisti,
        statusPeriksaLengkap: data.statusPeriksaLengkap,
        minumTtd: data.minumTtd,
        kpPascaBersalin: data.kpPascaBersalin,
        tambahanGizi: data.tambahanGizi,
      },
    })

    // Revalidate path to refresh the relevant page data
    revalidatePath("/(dashboard)/dashboard/input-data/layanan-ibu-hamil")

    return { success: true }
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan data:", error)
    return { success: false, error: "Gagal menyimpan data" }
  }
}
