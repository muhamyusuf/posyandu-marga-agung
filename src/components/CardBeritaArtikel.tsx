import React from "react"

import { Card, CardContent } from "./ui/card"

interface CardBeritaArtikelPropsType {
  img: string
  title: string
  desc: string
}

export default function CardBeritaArtikel({
  title,
  desc,
  img,
}: CardBeritaArtikelPropsType) {
  return (
    <Card
      className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl border-none shadow-sm"
      color="transparent"
    >
      <img
        src={img}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/70" />

      <CardContent className="relative flex flex-col justify-end text-white">
        <h3 className="text-xl font-bold">{title}</h3>

        <div className="my-2 max-w-sm font-light text-white/80">{desc}</div>
      </CardContent>
    </Card>
  )
}
