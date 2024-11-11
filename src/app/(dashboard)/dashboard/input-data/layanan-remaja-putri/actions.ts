"use server"
import { revalidatePath } from 'next/cache'
import db from "@/lib/db"

export async function saveRematriData({
  nama,
  nik,
  tanggalLahir,
  umur,
  ttd,
  anemia,
  hasilAnemia,
}: {
  nama: string,
  nik: string,
  tanggalLahir: string,
  umur: number,
  ttd: boolean,
  anemia: boolean,
  hasilAnemia: boolean,
}) {
  try {
    await db.remajaPutri.create({
      data: {
        nama,
        nik,
        tanggalLahir,
        umur,
        ttd,
        anemia,
        hasilAnemia,
      },
    });
    revalidatePath('/(dashboard)/dashboard/input-data/layanan-remaja-putri')
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan data:", error)
    throw new Error("Gagal menyimpan data")
  }
}
