/*
  Warnings:

  - You are about to drop the column `gds` on the `LayananLansia` table. All the data in the column will be lost.
  - You are about to drop the column `lingkarPinggang` on the `LayananLansia` table. All the data in the column will be lost.
  - You are about to drop the column `tekananDarah` on the `LayananLansia` table. All the data in the column will be lost.
  - You are about to drop the `LayananAnak` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LayananCalonPengantin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LayananIbuHamil` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LayananKeluarga` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LayananRemajaPutri` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `asamUrat` to the `LayananLansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gulaDarah` to the `LayananLansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `keterangan` to the `LayananLansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kolesterol` to the `LayananLansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lingkarPerut` to the `LayananLansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama` to the `LayananLansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nik` to the `LayananLansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tensiDarah` to the `LayananLansia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ttl` to the `LayananLansia` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LayananAnak" DROP CONSTRAINT "LayananAnak_wargaId_fkey";

-- DropForeignKey
ALTER TABLE "LayananCalonPengantin" DROP CONSTRAINT "LayananCalonPengantin_wargaId_fkey";

-- DropForeignKey
ALTER TABLE "LayananIbuHamil" DROP CONSTRAINT "LayananIbuHamil_wargaId_fkey";

-- DropForeignKey
ALTER TABLE "LayananKeluarga" DROP CONSTRAINT "LayananKeluarga_wargaId_fkey";

-- DropForeignKey
ALTER TABLE "LayananRemajaPutri" DROP CONSTRAINT "LayananRemajaPutri_wargaId_fkey";

-- AlterTable
ALTER TABLE "LayananLansia" DROP COLUMN "gds",
DROP COLUMN "lingkarPinggang",
DROP COLUMN "tekananDarah",
ADD COLUMN     "asamUrat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "gulaDarah" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "keterangan" TEXT NOT NULL,
ADD COLUMN     "kolesterol" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lingkarPerut" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "nama" TEXT NOT NULL,
ADD COLUMN     "nik" TEXT NOT NULL,
ADD COLUMN     "tensiDarah" TEXT NOT NULL,
ADD COLUMN     "ttl" TEXT NOT NULL;

-- DropTable
DROP TABLE "LayananAnak";

-- DropTable
DROP TABLE "LayananCalonPengantin";

-- DropTable
DROP TABLE "LayananIbuHamil";

-- DropTable
DROP TABLE "LayananKeluarga";

-- DropTable
DROP TABLE "LayananRemajaPutri";

-- CreateTable
CREATE TABLE "LayananIbuAnak" (
    "id" TEXT NOT NULL,
    "wargaId" TEXT NOT NULL,
    "jenisKelamin" "JenisKelamin" NOT NULL,
    "namaIbu" TEXT NOT NULL,
    "namaAyah" TEXT NOT NULL,
    "namaAnak" TEXT NOT NULL,
    "tinggiBadanAnak" DOUBLE PRECISION NOT NULL,
    "beratBadanAnak" DOUBLE PRECISION NOT NULL,
    "umurAnak" DOUBLE PRECISION NOT NULL,
    "lingkarLenganAnak" DOUBLE PRECISION NOT NULL,
    "lingkarKepalaAnak" DOUBLE PRECISION NOT NULL,
    "tinggiBadanIbu" DOUBLE PRECISION NOT NULL,
    "beratBadanIbu" DOUBLE PRECISION NOT NULL,
    "lingkarLenganIbu" DOUBLE PRECISION NOT NULL,
    "lingkarPinggangIbu" DOUBLE PRECISION NOT NULL,
    "alatKontrasepsi" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LayananIbuAnak_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LayananIbuAnak" ADD CONSTRAINT "LayananIbuAnak_wargaId_fkey" FOREIGN KEY ("wargaId") REFERENCES "Warga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
