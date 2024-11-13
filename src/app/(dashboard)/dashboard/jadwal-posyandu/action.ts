import db from "@/lib/db"

// Definisikan tipe data untuk jadwal posyandu
interface JadwalPosyanduData {
  namaAcara: string
  tanggal: Date
  jam: string
}

export async function saveJadwalPosyandu(data: JadwalPosyanduData) {
  // Inisialisasi Supabase client untuk autentikasi

  //   try {
  //     // Simpan data jadwal posyandu ke database menggunakan Prisma
  //     const jadwal = await db.jadwalPosyandu.create({
  //       data: {
  //         namaAcara: data.namaAcara,
  //         tanggal: new Date(data.tanggal), // Konversi ke Date
  //         jam: data.jam,
  //         userId: user.id, // Simpan id pengguna untuk referensi
  //       },
  //     })
  //     return { success: true, data: jadwal }
  //   } catch (error) {
  //     console.error("Error saving jadwal posyandu:", error)
  //     return { success: false, error: "Gagal menyimpan jadwal posyandu." }
  //   }

  if (data) {
    return { success: false, error: "Jadwal sudah terdaftar" }
  }

  return { success: true }
}
