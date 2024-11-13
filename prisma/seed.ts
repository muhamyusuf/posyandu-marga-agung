import { JenisKelamin, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Membuat data warga dengan layanan terkait secara statis
  const warga1 = await prisma.warga.create({
    data: {
      nama: "Ahmad Setiawan",
      nik: "1234567890123456",
      tanggalLahir: new Date("1985-03-20"),
      umur: 37,
      layananLansia: {
        create: [
          {
            gds: 110,
            beratBadan: 70.5,
            tinggiBadan: 175,
            lingkarPinggang: 90,
            tekananDarah: "120/80",
          },
        ],
      },
      layananCalonPengantin: {
        create: [
          {
            tanggalPernikahan: new Date("2024-06-15"),
            periksaKesehatan: true,
            bimbinganPerkawinan: true,
          },
        ],
      },
      layananRemajaPutri: {
        create: [
          {
            ttd: true,
            anemia: false,
            hasilAnemia: false,
          },
        ],
      },
      layananIbuHamil: {
        create: [
          {
            hariPertamaHaid: new Date("2023-01-10"),
            tanggalPerkiraanLahir: new Date("2023-10-20"),
            umurKehamilan: 36,
            periksaKehamilan: "Lengkap",
            statusGizi: true,
            statusPeriksaLengkap: true,
            minumTtd: true,
            kpPascaBersalin: false,
            tambahanGizi: true,
          },
        ],
      },
      layananAnak: {
        create: [
          {
            jenisKelamin: "LAKI_LAKI" as JenisKelamin,
            namaOrangTua: "Budi Setiawan",
            statusGiziKurang: false,
            statusGiziBuruk: false,
            stunting: false,
            imunisasiHbO: true,
            imunisasiBcgPolio1: true,
            statusKelengkapan: true,
          },
        ],
      },
      layananKeluarga: {
        create: [
          {
            namaKepalaKeluarga: "Ahmad Setiawan",
            dusun: "Dusun Melati",
            namaIbuHamil: "Siti Aisyah",
            anak_0_59_bulan: 2,
            kategoriKeluargaRentan: false,
            kartuKeluarga: true,
            jambanSehat: true,
            sumberAirBersih: true,
            jaminanSosial: true,
            jaminanKesehatan: true,
            aksesSanitasi: true,
            pendampinganKeluarga: false,
            ketahananPangan: true,
          },
        ],
      },
    },
  })

  console.log(`Warga created: ${warga1.nama}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
