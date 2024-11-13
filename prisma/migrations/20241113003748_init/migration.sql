/*
  Warnings:

  - You are about to drop the `CalonPengantin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IbuHamil` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Keluarga` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lansia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RemajaPutri` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dataAnak` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CalonPengantin";

-- DropTable
DROP TABLE "IbuHamil";

-- DropTable
DROP TABLE "Keluarga";

-- DropTable
DROP TABLE "Lansia";

-- DropTable
DROP TABLE "RemajaPutri";

-- DropTable
DROP TABLE "dataAnak";

-- CreateTable
CREATE TABLE "Warga" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "umur" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Warga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LayananLansia" (
    "id" TEXT NOT NULL,
    "wargaId" TEXT NOT NULL,
    "gds" INTEGER NOT NULL,
    "beratBadan" DOUBLE PRECISION NOT NULL,
    "tinggiBadan" DOUBLE PRECISION NOT NULL,
    "lingkarPinggang" DOUBLE PRECISION NOT NULL,
    "tekananDarah" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LayananLansia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LayananCalonPengantin" (
    "id" TEXT NOT NULL,
    "wargaId" TEXT NOT NULL,
    "tanggalPernikahan" TIMESTAMP(3) NOT NULL,
    "periksaKesehatan" BOOLEAN NOT NULL,
    "bimbinganPerkawinan" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LayananCalonPengantin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LayananRemajaPutri" (
    "id" TEXT NOT NULL,
    "wargaId" TEXT NOT NULL,
    "ttd" BOOLEAN NOT NULL,
    "anemia" BOOLEAN NOT NULL,
    "hasilAnemia" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LayananRemajaPutri_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LayananIbuHamil" (
    "id" TEXT NOT NULL,
    "wargaId" TEXT NOT NULL,
    "hariPertamaHaid" TIMESTAMP(3) NOT NULL,
    "tanggalPerkiraanLahir" TIMESTAMP(3) NOT NULL,
    "umurKehamilan" INTEGER NOT NULL,
    "periksaKehamilan" TEXT NOT NULL,
    "statusGizi" BOOLEAN NOT NULL,
    "statusPeriksaLengkap" BOOLEAN NOT NULL,
    "minumTtd" BOOLEAN NOT NULL,
    "kpPascaBersalin" BOOLEAN NOT NULL,
    "tambahanGizi" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LayananIbuHamil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LayananAnak" (
    "id" TEXT NOT NULL,
    "wargaId" TEXT NOT NULL,
    "jenisKelamin" "JenisKelamin" NOT NULL,
    "namaOrangTua" TEXT NOT NULL,
    "statusGiziKurang" BOOLEAN NOT NULL,
    "statusGiziBuruk" BOOLEAN NOT NULL,
    "stunting" BOOLEAN NOT NULL,
    "imunisasiHbO" BOOLEAN NOT NULL,
    "imunisasiBcgPolio1" BOOLEAN NOT NULL,
    "statusKelengkapan" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LayananAnak_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LayananKeluarga" (
    "id" TEXT NOT NULL,
    "wargaId" TEXT NOT NULL,
    "namaKepalaKeluarga" TEXT NOT NULL,
    "dusun" TEXT NOT NULL,
    "namaIbuHamil" TEXT NOT NULL,
    "anak_0_59_bulan" INTEGER NOT NULL,
    "kategoriKeluargaRentan" BOOLEAN NOT NULL,
    "kartuKeluarga" BOOLEAN NOT NULL,
    "jambanSehat" BOOLEAN NOT NULL,
    "sumberAirBersih" BOOLEAN NOT NULL,
    "jaminanSosial" BOOLEAN NOT NULL,
    "jaminanKesehatan" BOOLEAN NOT NULL,
    "aksesSanitasi" BOOLEAN NOT NULL,
    "pendampinganKeluarga" BOOLEAN NOT NULL,
    "ketahananPangan" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LayananKeluarga_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Warga_nik_key" ON "Warga"("nik");

-- AddForeignKey
ALTER TABLE "LayananLansia" ADD CONSTRAINT "LayananLansia_wargaId_fkey" FOREIGN KEY ("wargaId") REFERENCES "Warga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LayananCalonPengantin" ADD CONSTRAINT "LayananCalonPengantin_wargaId_fkey" FOREIGN KEY ("wargaId") REFERENCES "Warga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LayananRemajaPutri" ADD CONSTRAINT "LayananRemajaPutri_wargaId_fkey" FOREIGN KEY ("wargaId") REFERENCES "Warga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LayananIbuHamil" ADD CONSTRAINT "LayananIbuHamil_wargaId_fkey" FOREIGN KEY ("wargaId") REFERENCES "Warga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LayananAnak" ADD CONSTRAINT "LayananAnak_wargaId_fkey" FOREIGN KEY ("wargaId") REFERENCES "Warga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LayananKeluarga" ADD CONSTRAINT "LayananKeluarga_wargaId_fkey" FOREIGN KEY ("wargaId") REFERENCES "Warga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
