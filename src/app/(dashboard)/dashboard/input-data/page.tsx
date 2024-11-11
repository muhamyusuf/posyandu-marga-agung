"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import Navbar from "@/components/navbar"

import InputDataCanti from "./layanan-calon-pengantin/page"
import InputDataBumil from "./layanan-ibu-hamil/page"
import InputDataKeluarga from "./layanan-keluarga/page"
import InputDataRematri from "./layanan-remaja-putri/page"
import InputDataLansia from "./layanan-lansia/page"
import InputDataAnak from "./layanan-anak/page"

export default function InputDataPage() {
  const [selectedLayanan, setSelectedLayanan] = useState("keluarga")
  const handleLayananChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLayanan(event.target.value)
  }
  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="mb-4">
        <label className="mb-1 block text-sm font-semibold">
          Pilih Layanan
        </label>
        <select
          className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={selectedLayanan}
          onChange={handleLayananChange}
        >
          <option value="keluarga">Layanan Keluarga</option>
          <option value="remaja_putri">Layanan Remaja Putri</option>
          <option value="ibu_hamil">Layanan Ibu Hamil</option>
          <option value="calon_pengantin">Layanan Calon Pengantin</option>
          <option value="anak">Layanan Anak</option>
          <option value="lansia">Layanan Lansia</option>
        </select>
      </div>

      {/* Kondisional Rendering */}
      {selectedLayanan === "keluarga" && <InputDataKeluarga />}
      {selectedLayanan === "remaja_putri" && <InputDataRematri />}
      {selectedLayanan === "calon_pengantin" && <InputDataCanti />}
      {selectedLayanan === "ibu_hamil" && <InputDataBumil />}
      {selectedLayanan === "anak" && <InputDataAnak />}
      {selectedLayanan === "lansia" && <InputDataLansia />}
    </main>
  )
}
