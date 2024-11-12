// action.ts

import db from "@/lib/db"

export async function saveDataLayananKeluarga(data: {
  wargaId: string
  namaKepalaKeluarga: string
  dusun: string
  namaIbuHamil: string
  anak_0_59_bulan: number
  kategoriKeluargaRentan: boolean
  kartuKeluarga: boolean
  jambanSehat: boolean
  sumberAirBersih: boolean
  jaminanSosial: boolean
  jaminanKesehatan: boolean
  aksesSanitasi: boolean
  pendampinganKeluarga: boolean
  ketahananPangan: boolean
}) {
  //   try {
  //     await prisma.layananKeluarga.create({
  //       data: {
  //         wargaId: data.wargaId,
  //         namaKepalaKeluarga: data.namaKepalaKeluarga,
  //         dusun: data.dusun,
  //         namaIbuHamil: data.namaIbuHamil,
  //         anak_0_59_bulan: data.anak_0_59_bulan,
  //         kategoriKeluargaRentan: data.kategoriKeluargaRentan,
  //         kartuKeluarga: data.kartuKeluarga,
  //         jambanSehat: data.jambanSehat,
  //         sumberAirBersih: data.sumberAirBersih,
  //         jaminanSosial: data.jaminanSosial,
  //         jaminanKesehatan: data.jaminanKesehatan,
  //         aksesSanitasi: data.aksesSanitasi,
  //         pendampinganKeluarga: data.pendampinganKeluarga,
  //         ketahananPangan: data.ketahananPangan,
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
