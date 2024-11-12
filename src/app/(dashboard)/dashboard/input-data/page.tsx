"use client"

import React, { useEffect, useState } from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Importing ShadCN Select components

import InputDataLayananAnak from "./components/layanan-anak/InputDataLayananAnak"
import InputDataLayananCalonPengantin from "./components/layanan-calon-pengantin/InputDataLayananCalonPengantin"
import InputDataLayananIbuHamil from "./components/layanan-ibu-hamil/InputDataLayananIbuHamil"
import InputDataLayananKeluarga from "./components/layanan-keluarga/InputDataLayananKeluarga"
import InputDataLayananLansia from "./components/layanan-lansia/InputDataLayananLansia"
import InputDataLayananRemajaPutri from "./components/layanan-remaja-putri/InputDataLayananRemajaPutri"

function Skeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 w-3/4 rounded bg-gray-300"></div>
      <div className="h-4 w-5/6 rounded bg-gray-300"></div>
      <div className="h-4 w-1/2 rounded bg-gray-300"></div>
    </div>
  )
}

export default function InputDataPage() {
  const [selectedLayanan, setSelectedLayanan] = useState("keluarga")
  const [loading, setLoading] = useState(true)

  // Load selectedLayanan from localStorage on initial load
  useEffect(() => {
    const storedLayanan = localStorage.getItem("selectedLayanan")
    if (storedLayanan) {
      setSelectedLayanan(storedLayanan)
    }
    setLoading(false) // Initial load complete, hide skeleton
  }, [])

  // Show skeleton while loading a new form
  const handleLayananChange = (value: string) => {
    setSelectedLayanan(value)
    localStorage.setItem("selectedLayanan", value)
  }

  return (
    <main className="min-h-screen w-full">
      <div className="mb-4">
        <label className="mb-1 block text-sm font-semibold">
          Pilih Layanan
        </label>

        {/* ShadCN Select Component */}
        <Select onValueChange={handleLayananChange} value={selectedLayanan}>
          <SelectTrigger className="min-w-[300px] max-w-[400px]">
            <SelectValue placeholder="Pilih Layanan" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="keluarga">Layanan Keluarga</SelectItem>
            <SelectItem value="remaja_putri">Layanan Remaja Putri</SelectItem>
            <SelectItem value="ibu_hamil">Layanan Ibu Hamil</SelectItem>
            <SelectItem value="calon_pengantin">
              Layanan Calon Pengantin
            </SelectItem>
            <SelectItem value="anak">Layanan Anak</SelectItem>
            <SelectItem value="lansia">Layanan Lansia</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="min-w-[300px] sm:min-w-[400px]">
        {/* Conditional Rendering with Loading Skeleton */}
        {loading ? (
          <Skeleton />
        ) : selectedLayanan === "keluarga" ? (
          <InputDataLayananKeluarga />
        ) : selectedLayanan === "remaja_putri" ? (
          <InputDataLayananRemajaPutri />
        ) : selectedLayanan === "calon_pengantin" ? (
          <InputDataLayananCalonPengantin />
        ) : selectedLayanan === "ibu_hamil" ? (
          <InputDataLayananIbuHamil />
        ) : selectedLayanan === "anak" ? (
          <InputDataLayananAnak />
        ) : (
          <InputDataLayananLansia />
        )}
      </div>
    </main>
  )
}
