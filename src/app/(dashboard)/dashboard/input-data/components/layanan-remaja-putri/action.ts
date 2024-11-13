"use server"

import { revalidatePath } from "next/cache"

import db from "@/lib/db"

export async function saveDataLayananRemajaPutri({
  wargaId,
  ttd,
  anemia,
  hasilAnemia,
}: {
  wargaId: string
  ttd: boolean
  anemia: boolean
  hasilAnemia: boolean
}) {
  try {
    const warga = await db.warga.findUnique({
      where: { id: wargaId },
    })

    if (!warga) {
      return { success: false, error: "Data warga tidak ditemukan" }
    }

    await db.layananRemajaPutri.create({
      data: {
        wargaId: warga.id,
        ttd,
        anemia,
        hasilAnemia,
      },
    })

    // Revalidate the path to refresh any relevant data
    revalidatePath("/(dashboard)/dashboard/input-data/layanan-remaja-putri")
    return { success: true }
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan data:", error)
    return { success: false, error: "Gagal menyimpan data" }
  }
}
