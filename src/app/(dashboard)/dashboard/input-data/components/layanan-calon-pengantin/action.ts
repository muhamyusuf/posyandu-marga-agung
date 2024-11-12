// action.ts
import db from "@/lib/db"

// Assuming you have Prisma set up

export async function saveDataLayananCalonPengantin(data: {
  wargaId: string
  tanggalPernikahan: string
  periksaKesehatan: boolean
  bimbinganPerkawinan: boolean
}) {
  //   try {
  //     await prisma.layananCalonPengantin.create({
  //       data: {
  //         wargaId: data.wargaId,
  //         tanggalPernikahan: new Date(data.tanggalPernikahan), // Convert to Date object
  //         periksaKesehatan: data.periksaKesehatan,
  //         bimbinganPerkawinan: data.bimbinganPerkawinan,
  //       },
  //     })
  //     return { success: true }
  //   } catch (error) {
  //     console.error("Failed to save data:", error)
  //     return { success: false, error: "Failed to save data" }
  //   }

  if (data.wargaId === "123") {
    return { success: false, error: "Warga ID sudah terdaftar" }
  }

  return { success: true }
}
