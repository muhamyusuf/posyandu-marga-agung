import db from "@/lib/db"

export async function saveDataLayananAnak(data: {
  wargaId: string
  jenisKelamin: "LAKI_LAKI" | "PEREMPUAN"
  namaOrangTua: string
  statusGiziKurang: boolean
  statusGiziBuruk: boolean
  stunting: boolean
  imunisasiHbO: boolean
  imunisasiBcgPolio1: boolean
  statusKelengkapan: boolean
}) {
  //   try {
  //     await db.layananAnak.create({
  //       data: {
  //         wargaId: data.wargaId,
  //         jenisKelamin: data.jenisKelamin,
  //         namaOrangTua: data.namaOrangTua,
  //         statusGiziKurang: data.statusGiziKurang,
  //         statusGiziBuruk: data.statusGiziBuruk,
  //         stunting: data.stunting,
  //         imunisasiHbO: data.imunisasiHbO,
  //         imunisasiBcgPolio1: data.imunisasiBcgPolio1,
  //         statusKelengkapan: data.statusKelengkapan,
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
