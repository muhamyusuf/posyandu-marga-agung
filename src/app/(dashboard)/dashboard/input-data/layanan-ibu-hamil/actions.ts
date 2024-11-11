"use server"
import db from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function saveIbuHamilData({
  nama,
  nik,
  tanggalLahir,
  umur,
  hariPertamaHaid,
  tanggalPerkiraanLahir,
  umurKehamilan,
  periksaKehamilan,
  statusGizi,
  statusPeriksaLengkap,
  minumTtd,
  kpPascaBersalin,
  tambahanGizi,
}: {
  nama: string
  nik: string
  tanggalLahir: Date
  umur: number
  hariPertamaHaid: Date
  tanggalPerkiraanLahir: Date
  umurKehamilan: number
  periksaKehamilan: string
  statusGizi: boolean
  statusPeriksaLengkap: boolean
  minumTtd: boolean
  kpPascaBersalin: boolean
  tambahanGizi: boolean
}) {
  try {
    await db.ibuHamil.create({
      data: {
        nama,
        nik,
        tanggalLahir,
        umur,
        hariPertamaHaid,
        tanggalPerkiraanLahir,
        umurKehamilan,
        periksaKehamilan,
        statusGizi,
        statusPeriksaLengkap,
        minumTtd,
        kpPascaBersalin,
        tambahanGizi,
      },
    })
    revalidatePath("/(dashboard)/dashboard/input-data/layanan-ibu-hamil")
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan data:", error)
    throw new Error("Gagal menyimpan data")
  }
}
