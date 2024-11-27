"use server"

import { JenisKelamin } from "@prisma/client" // Enum dari Prisma schema

import db from "@/lib/db"

export async function saveDataLayananIbuAnak(data: {
  wargaId: string
  namaIbu: string
  namaAyah: string
  namaAnak: string
  tinggiBadanIbu: number
  beratBadanIbu: number
  lingkarLenganIbu: number
  lingkarPinggangIbu: number
  alatKontrasepsi: string
  jenisKelamin: JenisKelamin // Sertakan jenis kelamin
  tinggiBadanAnak: number
  beratBadanAnak: number
  umurAnak: number
  lingkarLenganAnak: number
  lingkarKepalaAnak: number
}) {
  try {
    // Validasi apakah warga ada di database
    const warga = await db.warga.findUnique({
      where: { id: data.wargaId },
    })
    if (!warga) {
      return { success: false, error: "Warga tidak ditemukan" }
    }

    // Menyimpan data layanan ibu-anak
    await db.layananIbuAnak.create({
      data: {
        wargaId: data.wargaId,
        namaIbu: data.namaIbu,
        namaAyah: data.namaAyah,
        namaAnak: data.namaAnak,
        tinggiBadanIbu: data.tinggiBadanIbu,
        beratBadanIbu: data.beratBadanIbu,
        lingkarLenganIbu: data.lingkarLenganIbu,
        lingkarPinggangIbu: data.lingkarPinggangIbu,
        alatKontrasepsi: data.alatKontrasepsi,
        jenisKelamin: data.jenisKelamin, // Field wajib
        tinggiBadanAnak: data.tinggiBadanAnak,
        beratBadanAnak: data.beratBadanAnak,
        umurAnak: data.umurAnak,
        lingkarLenganAnak: data.lingkarLenganAnak,
        lingkarKepalaAnak: data.lingkarKepalaAnak,
      },
    })

    return { success: true }
  } catch (error) {
    console.error("Error saving data:", error)
    return { success: false, error: "Gagal menyimpan data" }
  }
}
