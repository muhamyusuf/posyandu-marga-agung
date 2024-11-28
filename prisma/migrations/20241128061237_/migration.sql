/*
  Warnings:

  - You are about to drop the column `jenisKelamin` on the `LayananIbuAnak` table. All the data in the column will be lost.
  - You are about to drop the column `namaAnak` on the `LayananIbuAnak` table. All the data in the column will be lost.
  - You are about to drop the column `namaAyah` on the `LayananIbuAnak` table. All the data in the column will be lost.
  - You are about to drop the column `namaIbu` on the `LayananIbuAnak` table. All the data in the column will be lost.
  - You are about to drop the column `wargaId` on the `LayananIbuAnak` table. All the data in the column will be lost.
  - Added the required column `anakId` to the `LayananIbuAnak` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ayahId` to the `LayananIbuAnak` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ibuId` to the `LayananIbuAnak` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jenisKelaminAnak` to the `LayananIbuAnak` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LayananIbuAnak" DROP CONSTRAINT "LayananIbuAnak_wargaId_fkey";

-- AlterTable
ALTER TABLE "LayananIbuAnak" DROP COLUMN "jenisKelamin",
DROP COLUMN "namaAnak",
DROP COLUMN "namaAyah",
DROP COLUMN "namaIbu",
DROP COLUMN "wargaId",
ADD COLUMN     "anakId" TEXT NOT NULL,
ADD COLUMN     "ayahId" TEXT NOT NULL,
ADD COLUMN     "ibuId" TEXT NOT NULL,
ADD COLUMN     "jenisKelaminAnak" "JenisKelamin" NOT NULL;

-- AddForeignKey
ALTER TABLE "LayananIbuAnak" ADD CONSTRAINT "LayananIbuAnak_ibuId_fkey" FOREIGN KEY ("ibuId") REFERENCES "Warga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LayananIbuAnak" ADD CONSTRAINT "LayananIbuAnak_ayahId_fkey" FOREIGN KEY ("ayahId") REFERENCES "Warga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LayananIbuAnak" ADD CONSTRAINT "LayananIbuAnak_anakId_fkey" FOREIGN KEY ("anakId") REFERENCES "Warga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
