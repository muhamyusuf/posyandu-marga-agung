// action.ts
import db from "@/lib/db"

export async function saveDataLayananIbuHamil(data: {
  wargaId: string
  hariPertamaHaid: string
  tanggalPerkiraanLahir: string
  umurKehamilan: number
  periksaKehamilan: string
  statusGizi: boolean
  statusPeriksaLengkap: boolean
  minumTtd: boolean
  kpPascaBersalin: boolean
  tambahanGizi: boolean
}) {
  //   try {
  //     await prisma.layananIbuHamil.create({
  //       data: {
  //         wargaId: data.wargaId,
  //         hariPertamaHaid: new Date(data.hariPertamaHaid),
  //         tanggalPerkiraanLahir: new Date(data.tanggalPerkiraanLahir),
  //         umurKehamilan: data.umurKehamilan,
  //         periksaKehamilan: data.periksaKehamilan,
  //         statusGizi: data.statusGizi,
  //         statusPeriksaLengkap: data.statusPeriksaLengkap,
  //         minumTtd: data.minumTtd,
  //         kpPascaBersalin: data.kpPascaBersalin,
  //         tambahanGizi: data.tambahanGizi,
  //       },
  //     });
  //     return { success: true };
  //   } catch (error) {
  //     console.error("Failed to save data:", error);
  //     return { success: false, error: "Failed to save data" };
  //   }

  if (data.wargaId === "123") {
    return { success: false, error: "Warga ID sudah terdaftar" }
  }

  return { success: true }
}
