// action.ts

import db from "@/lib/db"

export async function saveDataLayananLansia(data: {
  wargaId: string
  gds: number
  beratBadan: number
  tinggiBadan: number
  lingkarPinggang: number
  tekananDarah: string
}) {
  //   try {
  //     await prisma.layananLansia.create({
  //       data: {
  //         wargaId: data.wargaId,
  //         gds: data.gds,
  //         beratBadan: data.beratBadan,
  //         tinggiBadan: data.tinggiBadan,
  //         lingkarPinggang: data.lingkarPinggang,
  //         tekananDarah: data.tekananDarah,
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
