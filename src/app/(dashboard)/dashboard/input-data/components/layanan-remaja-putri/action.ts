// action.ts
// src/actions/getWargaOptions.ts
import prisma from "@/lib/prisma"

export async function saveDataLayananRemajaPutri(data: {
  wargaId: string
  ttd: boolean
  anemia: boolean
  hasilAnemia: boolean
}) {
  //   try {
  //     await prisma.layananRemajaPutri.create({
  //       data: {
  //         wargaId: data.wargaId,
  //         ttd: data.ttd,
  //         anemia: data.anemia,
  //         hasilAnemia: data.hasilAnemia,
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

export async function getWargaOptions(query: string) {
  const wargaData = await prisma.warga.findMany({
    where: {
      nama: {
        contains: query,
        mode: "insensitive",
      },
    },
    select: {
      id: true,
      nama: true,
    },
    orderBy: {
      nama: "asc",
    },
    take: 10, // Limit results for performance
  })

  return wargaData.map((warga) => ({ id: warga.id, name: warga.nama }))
}
