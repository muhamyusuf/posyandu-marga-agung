"use server"

import { revalidatePath } from "next/cache"

import db from "@/lib/db"

export async function saveDataLayananKeluarga(data: {
  wargaId: string
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
    // Validasi apakah warga dengan ID tersebut ada
    const warga = await db.warga.findUnique({
      where: { id: data.wargaId },
    })

    if (!warga) {
      return { success: false, error: "Data warga tidak ditemukan" }
    }

    // Simpan data layanan keluarga
    await db.layananKeluarga.create({
      data: {
        wargaId: data.wargaId,
        namaKepalaKeluarga: data.namaKepalaKeluarga,
        dusun: data.dusun,
        namaIbuHamil: data.namaIbuHamil,
        anak_0_59_bulan: data.anak_0_59_bulan,
        kategoriKeluargaRentan: data.kategoriKeluargaRentan,
        kartuKeluarga: data.kartuKeluarga,
        jambanSehat: data.jambanSehat,
        sumberAirBersih: data.sumberAirBersih,
        jaminanSosial: data.jaminanSosial,
        jaminanKesehatan: data.jaminanKesehatan,
        aksesSanitasi: data.aksesSanitasi,
        pendampinganKeluarga: data.pendampinganKeluarga,
        ketahananPangan: data.ketahananPangan,
      },
    })

    // Revalidate path to refresh the relevant page data
    revalidatePath("/(dashboard)/dashboard/input-data/layanan-keluarga")

    return { success: true }
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan data:", error)
    return { success: false, error: "Gagal menyimpan data" }
  }
}
