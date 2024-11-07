// app/[berita-artikel-id]/page.tsx

import Image from "next/image"
import { notFound } from "next/navigation"
import { ArtikelData } from "@/constants/artikeldata" // Make sure your data is accessible here

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

type Props = {
  params: {
    "berita-artikel-id": string
  }
}

// Find article based on the id from params
const getArtikelById = (id: string) => {
  return ArtikelData.find(
    (artikel) => artikel.title.toLowerCase().replace(/ /g, "-") === id
  )
}

export default function ArticlePage({ params }: Props) {
  const { "berita-artikel-id": artikelId } = params
  const artikel = getArtikelById(artikelId)

  // Handle if the article is not found
  if (!artikel) {
    return notFound()
  }

  return (
    <main className="container">
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

        <h1 className="text-3xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          {artikel.title}
        </h1>

        <p className="max-w-[42rem] text-sm font-normal leading-normal text-muted-foreground">
          {artikel.desc}
        </p>
      </section>

      <section className="mx-auto mt-10 flex w-full flex-col">
        <Image
          src={artikel.img}
          alt={artikel.title}
          width={600}
          height={400}
          className="mx-auto rounded-md"
        />

        <div className="mx-auto max-w-5xl py-20">
          <p>{artikel.contents}</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
