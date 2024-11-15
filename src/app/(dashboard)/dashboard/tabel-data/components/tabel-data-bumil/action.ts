"use server"

import db from "@/lib/db"

export type LayananIbuHamil = {
  id: string
  hariPertamaHaid: Date
  tanggalPerkiraanLahir: Date
  umurKehamilan: number
  periksaKehamilan: string
  statusGizi: boolean
  statusPeriksaLengkap: boolean
  minumTtd: boolean
  kpPascaBersalin: boolean
  tambahanGizi: boolean
  createdAt: Date
  updatedAt: Date
  warga?: {
    nama: string
  }
}

export async function getLayananIbuHamilData(
  year?: number,
  month?: string
): Promise<LayananIbuHamil[]> {
  try {
    const startDate =
      year && month ? new Date(`${year}-${month}-01`) : undefined
    const endDate = startDate
      ? new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0)
      : undefined

    const layananIbuHamilData = await db.layananIbuHamil.findMany({
      where: {
        ...(startDate &&
          endDate && {
            createdAt: {
              gte: startDate,
              lte: endDate,
            },
          }),
      },
      orderBy: { createdAt: "desc" },
      include: {
        warga: {
          select: {
            nama: true, // Ambil nama dari `warga`
          },
        },
      },
    })

    return layananIbuHamilData || []
  } catch (error) {
    console.error("Error fetching Layanan Ibu Hamil data:", error)
    return []
  }
}
