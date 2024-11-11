import Image from "next/image"
import Link from "next/link"
import { contents } from "@/constants/artikeldata"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarDemo } from "@/components/calendar"
import CardBeritaArtikel from "@/components/CardBeritaArtikel"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="container min-h-screen">
      <Navbar />

      <section className="container mt-40 flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <Image
            src="/logo-posyandu.png"
            width={1000}
            height={1000}
            alt="Posyandu Marga Agung"
            className="h-32 w-36 rounded-md border"
          />

          <Image
            src="/logo-sgds.png"
            width={1000}
            height={1000}
            alt="Posyandu Marga Agung"
            className="h-32 w-36 rounded-md border"
          />
        </div>

        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>

        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
      </section>

      <section className="flex flex-col items-center justify-start py-20">
        <h2 className="text-2xl font-bold">Jadwal Posyandu Bulan Ini</h2>

        <div className="mt-5 w-fit">
          <CalendarDemo />
        </div>

        <div className="mx-auto mt-5 flex w-fit min-w-[300px] flex-col items-start px-4">
          <p className="font-bold">Keterangan</p>

          <div className="mt-2 flex items-center gap-2">
            <div className="h-10 w-10 rounded-md bg-primary" />

            <p className="text-[12px]">Kegiatan posyandu dilaksanakan</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-bold">List Berita & Artikel</h2>

        <div className="mt-5 flex w-fit flex-wrap gap-2">
          {contents.map(({ title, img, desc }, index) => (
            <CardBeritaArtikel
              key={index}
              img={img}
              title={title}
              desc={desc}
            />
          ))}
        </div>

        <Link href="/berita-artikel" className="mt-10 flex w-fit">
          <Button type="submit" size={"sm"} className="w-full">
            Lihat Semua Berita & Artikel
          </Button>
        </Link>
      </section>

      <Footer />
    </main>
  )
}
