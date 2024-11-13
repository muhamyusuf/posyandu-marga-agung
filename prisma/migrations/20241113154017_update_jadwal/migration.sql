-- CreateTable
CREATE TABLE "JadwalPosyandu" (
    "id" TEXT NOT NULL,
    "namaAcara" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "jam" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JadwalPosyandu_pkey" PRIMARY KEY ("id")
);
