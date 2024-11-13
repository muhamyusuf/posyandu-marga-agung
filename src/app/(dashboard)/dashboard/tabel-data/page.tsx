"use client"

import React, { useEffect, useState } from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import TabelDataAnak from "./tabel-data-anak"
import TabelDataBumil from "./tabel-data-bumil"
import TabelDataCatin from "./tabel-data-Catin"
import TabelDataKeluarga from "./tabel-data-keluarga"
import TabelDataLansia from "./tabel-data-lansia"
import TabelDataRematri from "./tabel-data-Rematri"

function Skeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 w-3/4 rounded bg-gray-300"></div>
      <div className="h-4 w-5/6 rounded bg-gray-300"></div>
      <div className="h-4 w-1/2 rounded bg-gray-300"></div>
    </div>
  )
}

export default function TableDataPage() {
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

  // Show skeleton while loading a new table
  const handleLayananChange = (value: string) => {
    setSelectedLayanan(value)
    localStorage.setItem("selectedLayanan", value)
    setTimeout(() => setLoading(false), 300) // Simulate loading delay
  }

  return (
    <main className="min-h-screen w-full">
      <div className="mb-4">
        <label className="mb-1 block text-sm font-semibold">
          Tampilkan Data Tabel
        </label>

        {/* ShadCN Select Component */}
        <Select onValueChange={handleLayananChange} value={selectedLayanan}>
          <SelectTrigger className="w-full min-w-[300px] max-w-[400px] rounded-md border px-4 py-2">
            <SelectValue placeholder="Pilih Tabel" />
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
          <>
            <TabelDataKeluarga />
            <TabelDataAnak />
            <TabelDataBumil />
            <TabelDataRematri />
            <TabelDataLansia />
            <TabelDataCatin />
          </>
        ) : selectedLayanan === "remaja_putri" ? (
          <TabelDataRematri />
        ) : selectedLayanan === "ibu_hamil" ? (
          <TabelDataBumil />
        ) : selectedLayanan === "calon_pengantin" ? (
          <TabelDataCatin />
        ) : selectedLayanan === "anak" ? (
          <TabelDataAnak />
        ) : (
          <TabelDataLansia />
        )}
      </div>
    </main>
  )
}
