-- AlterTable
ALTER TABLE "LayananIbuAnak" ALTER COLUMN "tinggiBadanAnak" DROP NOT NULL,
ALTER COLUMN "beratBadanAnak" DROP NOT NULL,
ALTER COLUMN "umurAnak" DROP NOT NULL,
ALTER COLUMN "lingkarLenganAnak" DROP NOT NULL,
ALTER COLUMN "lingkarKepalaAnak" DROP NOT NULL,
ALTER COLUMN "tinggiBadanIbu" DROP NOT NULL,
ALTER COLUMN "beratBadanIbu" DROP NOT NULL,
ALTER COLUMN "lingkarLenganIbu" DROP NOT NULL,
ALTER COLUMN "lingkarPinggangIbu" DROP NOT NULL,
ALTER COLUMN "alatKontrasepsi" DROP NOT NULL;

-- AlterTable
ALTER TABLE "LayananLansia" ALTER COLUMN "beratBadan" DROP NOT NULL,
ALTER COLUMN "tinggiBadan" DROP NOT NULL,
ALTER COLUMN "asamUrat" DROP NOT NULL,
ALTER COLUMN "gulaDarah" DROP NOT NULL,
ALTER COLUMN "keterangan" DROP NOT NULL,
ALTER COLUMN "kolesterol" DROP NOT NULL,
ALTER COLUMN "lingkarPerut" DROP NOT NULL,
ALTER COLUMN "tensiDarah" DROP NOT NULL;