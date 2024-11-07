import Image from "next/image"
import { ArtikelData } from "@/constants/artikeldata"

import CardBeritaArtikel from "@/components/CardBeritaArtikel"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import ArticleNews from "../article-news"

export default function BeritaArtikelPage() {
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
          Berita & Artikel
        </h1>

        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Berisi berita dan artikel terkait Posyandu Marga Agung, SGDS, dan
          Informasi Kesehatan Lainnya.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-bold">List Berita & Artikel</h2>

        <div className="mt-5 flex w-fit flex-wrap gap-2">
          {ArtikelData.map(({ title, img, desc }, index) => (
            <CardBeritaArtikel
              key={index}
              img={img}
              title={title}
              desc={desc}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
