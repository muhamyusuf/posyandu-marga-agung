"use server";

import db from "@/lib/db"; // Pastikan path ini benar dan sesuai struktur project Anda
import { revalidatePath } from "next/cache";

// Fungsi untuk menyimpan data warga ke database
export async function saveDataWarga({
  nama,
  nik,
  tanggalLahir,
  umur,
}: {
  nama: string;
  nik: string;
  tanggalLahir: Date;
  umur: number;
}) {
  try {
    // Periksa apakah NIK sudah ada di database
    const existingWarga = await db.warga.findUnique({
      where: { nik },
    });

    if (existingWarga) {
      return { success: false, error: "Data warga dengan NIK ini sudah ada" };
    }

    // Simpan data warga baru ke database
    await db.warga.create({
      data: {
        nama,
        nik,
        tanggalLahir,
        umur,
      },
    });

    // Revalidasi path untuk memastikan data baru tampil
    revalidatePath("/(dashboard)/dashboard/input-data/warga");
    return { success: true };
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan data warga:", error);
    return { success: false, error: "Gagal menyimpan data warga" };
  }
}