import React, { useState } from "react"

import Footer from "@/components/footer"

export default function InputDataLansia() {
  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="w-full max-w-md rounded-md bg-white p-6 text-black shadow-md">
          <h2 className="mb-4 text-xl font-bold">DATA LAYANAN LANSIA</h2>

          <form>
            <div className="mb-4">
              <label
                className="mb-2 block font-semibold text-gray-700"
                htmlFor="namaLansia"
              >
                Nama Lansia
              </label>
              <input
                type="text"
                id="namaLansia"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nama"
              />
            </div>

            <div className="mb-4">
              <label
                className="mb-2 block font-semibold text-gray-700"
                htmlFor="nik"
              >
                NIK
              </label>
              <input
                type="text"
                id="nik"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contoh: 3602041211870001"
              />
            </div>

            <div className="mb-4">
              <label
                className="mb-2 block font-semibold text-gray-700"
                htmlFor="tanggalLahir"
              >
                Tanggal Lahir
              </label>
              <input
                type="text"
                id="tanggalLahir"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contoh: 16/04/2016"
              />
            </div>

            <div className="mb-4">
              <label
                className="mb-2 block font-semibold text-gray-700"
                htmlFor="umur"
              >
                Umur
              </label>
              <input
                type="text"
                id="umur"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contoh: 21"
              />
            </div>

            <div className="mb-4">
              <label
                className="mb-2 block font-semibold text-gray-700"
                htmlFor="gds"
              >
                GDS
              </label>
              <input
                type="text"
                id="gds"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="116"
              />
            </div>

            <h3 className="mb-4 mt-6 text-lg font-semibold">PEMERIKSAAN</h3>

            <div className="mb-4">
              <label
                className="mb-2 block font-semibold text-gray-700"
                htmlFor="beratBadan"
              >
                Berat Badan
              </label>
              <input
                type="text"
                id="beratBadan"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="54 Kg"
              />
            </div>

            <div className="mb-4">
              <label
                className="mb-2 block font-semibold text-gray-700"
                htmlFor="tinggiBadan"
              >
                Tinggi Badan
              </label>
              <input
                type="text"
                id="tinggiBadan"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="156 Cm"
              />
            </div>

            <div className="mb-4">
              <label
                className="mb-2 block font-semibold text-gray-700"
                htmlFor="lingkarPinggang"
              >
                Lingkar Pinggang
              </label>
              <input
                type="text"
                id="lingkarPinggang"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="70 Cm"
              />
            </div>

            <div className="mb-4">
              <label
                className="mb-2 block font-semibold text-gray-700"
                htmlFor="tekananDarah"
              >
                Tekanan Darah
              </label>
              <input
                type="text"
                id="tekananDarah"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="156/93"
              />
            </div>
          </form>

          {/* Tombol Simpan */}
          <button
            type="submit"
            className="w-full rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            SIMPAN
          </button>

          <Footer />
        </div>
      </div>
    </main>
  )
}
