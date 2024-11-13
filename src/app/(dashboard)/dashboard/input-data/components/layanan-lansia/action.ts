"use server"
import db from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function saveDataLayananLansia({
  wargaId,
  gds,
  beratBadan,
  tinggiBadan,
  lingkarPinggang,
  tekananDarah,
}: {
  wargaId: string
  gds: number
  beratBadan: number
  tinggiBadan: number
  lingkarPinggang: number
  tekananDarah: string
}) {
  try {
    const warga = await db.warga.findUnique({
      where: { id: wargaId },
    })

    if (!warga) {
      return { success: false, error: "Data warga tidak ditemukan" }
    }

    await db.layananLansia.create({
      data: {
        wargaId: warga.id,
        gds,
        beratBadan,
        tinggiBadan,
        lingkarPinggang,
        tekananDarah,
      },
    })

    revalidatePath("/(dashboard)/dashboard/input-data/layanan-lansia")
    return { success: true }
  } catch (error) {
    console.error("Terjadi kesalahan saat menyimpan data:", error)
    return { success: false, error: "Gagal menyimpan data" }
  }
}