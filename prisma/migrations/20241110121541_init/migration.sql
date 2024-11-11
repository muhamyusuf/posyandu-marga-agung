-- CreateEnum
CREATE TYPE "JenisKelamin" AS ENUM ('LAKI_LAKI', 'PEREMPUAN');

-- CreateTable
CREATE TABLE "Lansia" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "umur" INTEGER NOT NULL,
    "gds" INTEGER NOT NULL,
    "beratBadan" DOUBLE PRECISION NOT NULL,
    "tinggiBadan" DOUBLE PRECISION NOT NULL,
    "lingkarPinggang" DOUBLE PRECISION NOT NULL,
    "tekananDarah" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lansia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CalonPengantin" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "umur" INTEGER NOT NULL,
    "tanggalPernikahan" TIMESTAMP(3) NOT NULL,
    "periksaKesehatan" BOOLEAN NOT NULL,
    "bimbinganPerkawinan" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CalonPengantin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RemajaPutri" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "umur" INTEGER NOT NULL,
    "ttd" BOOLEAN NOT NULL,
    "anemia" BOOLEAN NOT NULL,
    "hasilAnemia" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RemajaPutri_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IbuHamil" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "umur" INTEGER NOT NULL,
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

    CONSTRAINT "IbuHamil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anak" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "umur" INTEGER NOT NULL,
    "jenisKelamin" "JenisKelamin" NOT NULL,
    "namaOrangTua" TEXT NOT NULL,
    "statusGiziKurang" BOOLEAN NOT NULL,
    "statusGiziBuruk" BOOLEAN NOT NULL,
    "stunting" BOOLEAN NOT NULL,
    "imunisasiHbO" BOOLEAN NOT NULL,
    "imunisasiBcgPolio1" BOOLEAN NOT NULL,
    "statusKelengkapan" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Anak_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Keluarga" (
    "id" SERIAL NOT NULL,
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

    CONSTRAINT "Keluarga_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lansia_nik_key" ON "Lansia"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "CalonPengantin_nik_key" ON "CalonPengantin"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "RemajaPutri_nik_key" ON "RemajaPutri"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "IbuHamil_nik_key" ON "IbuHamil"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "Anak_nik_key" ON "Anak"("nik");
