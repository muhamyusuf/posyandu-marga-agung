import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

export default function InputDataRematri() {
  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="w-full max-w-md rounded-md bg-white p-6 text-black shadow-md">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-xl font-semibold">DATA LAYANAN KELUARGA</h1>
          </div>
          <form>
            {/* Input Nama */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">Nama</label>
              <input
                type="text"
                placeholder="Nama"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Input NIK */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">NIK</label>
              <input
                type="text"
                placeholder="Contoh: 3602041211870001"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Input Tanggal Lahir */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Tanggal Lahir
              </label>
              <input
                type="text"
                placeholder="Contoh: 16/04/2016"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Input Umur */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">Umur</label>
              <input
                type="number"
                placeholder="Contoh: 21"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Mendapatkan TTD */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Mendapatkan TTD
              </label>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input type="radio" name="ttd" id="ttdYa" className="mr-2" />
                  <label htmlFor="ttdYa">YA</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="ttd"
                    id="ttdTidak"
                    className="mr-2"
                  />
                  <label htmlFor="ttdTidak">TIDAK</label>
                </div>
              </div>
            </div>

            {/* Periksa Anemia */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Periksa Anemia
              </label>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="anemia"
                    id="anemiaYa"
                    className="mr-2"
                  />
                  <label htmlFor="anemiaYa">YA</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="anemia"
                    id="anemiaTidak"
                    className="mr-2"
                  />
                  <label htmlFor="anemiaTidak">TIDAK</label>
                </div>
              </div>
            </div>

            {/* Hasil Periksa Anemia */}
            <div className="mb-6">
              <label className="mb-1 block text-sm font-semibold">
                Hasil Periksa Anemia
              </label>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="hasilAnemia"
                    id="hasilAnemiaYa"
                    className="mr-2"
                  />
                  <label htmlFor="hasilAnemiaYa">ANEMIA</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="hasilAnemia"
                    id="hasilAnemiaTidak"
                    className="mr-2"
                  />
                  <label htmlFor="hasilAnemiaTidak">TIDAK</label>
                </div>
              </div>
            </div>

            {/* Tombol Simpan */}
            <button
              type="submit"
              className="w-full rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              SIMPAN
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Website Posyandu ©2024
          </div>
        </div>
      </div>
    </main>
  )
}
