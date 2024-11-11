/*
  Warnings:

  - You are about to drop the `Anak` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Anak";

-- CreateTable
CREATE TABLE "dataAnak" (
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

    CONSTRAINT "dataAnak_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dataAnak_nik_key" ON "dataAnak"("nik");
