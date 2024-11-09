import React, { useState } from "react"

import Footer from "@/components/footer"

export default function InputDataBumil() {
  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="w-full max-w-md rounded-lg bg-white p-6 text-black shadow-md">
          <h2 className="mb-6 text-xl font-semibold">DATA LAYANAN IBU HAMIL</h2>

          {/* Input Nama Ibu Hamil */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">
              Nama Ibu Hamil
            </label>
            <input
              type="text"
              placeholder="Nama"
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Input NIK */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">NIK</label>
            <input
              type="text"
              placeholder="Contoh: 3602041211870001"
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Input Tanggal Lahir */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">
              Tanggal Lahir
            </label>
            <input
              type="text"
              placeholder="Contoh: 16/04/2016"
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Input Umur */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">Umur</label>
            <input
              type="number"
              placeholder="Contoh: 21"
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Input Hari Pertama Haid Terakhir */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">
              Hari Pertama Haid Terakhir
            </label>
            <input
              type="text"
              placeholder="hh/bb/tttt"
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Input Tanggal Perkiraan Lahir */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">
              Tanggal Perkiraan Lahir
            </label>
            <input
              type="text"
              placeholder="hh/bb/tttt"
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Input Umur Kehamilan (Minggu) */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">
              Umur Kehamilan (Minggu)
            </label>
            <input
              type="number"
              placeholder="6"
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Periksa Kehamilan/Nifas */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">
              Periksa Kehamilan/Nifas (Minggu ke -)
            </label>
            <select className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Pilih Minggu</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>

          {/* Status Gizi/Kesehatan */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">
              Status Gizi/Kesehatan
            </label>
            <div className="flex gap-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="statusGizi"
                  id="giziYa"
                  className="mr-2"
                />
                <label htmlFor="giziYa">YA</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="statusGizi"
                  id="giziTidak"
                  className="mr-2"
                />
                <label htmlFor="giziTidak">TIDAK</label>
              </div>
            </div>
          </div>

          {/* Status Periksa Lengkap */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">
              Status Periksa Lengkap
            </label>
            <div className="flex gap-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="periksaLengkap"
                  id="lengkap"
                  className="mr-2"
                />
                <label htmlFor="lengkap">Lengkap</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="periksaLengkap"
                  id="tidakLengkap"
                  className="mr-2"
                />
                <label htmlFor="tidakLengkap">Tidak Lengkap</label>
              </div>
            </div>
          </div>

          {/* Minum TTD */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">
              Minum TTD
            </label>
            <div className="flex gap-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="minumTTD"
                  id="ttdYa"
                  className="mr-2"
                />
                <label htmlFor="ttdYa">YA</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="minumTTD"
                  id="ttdTidak"
                  className="mr-2"
                />
                <label htmlFor="ttdTidak">TIDAK</label>
              </div>
            </div>
          </div>

          {/* KP Pasca Bersalin */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">
              KP Pasca Bersalin
            </label>
            <div className="flex gap-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="kpPascaBersalin"
                  id="kpYa"
                  className="mr-2"
                />
                <label htmlFor="kpYa">YA</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="kpPascaBersalin"
                  id="kpTidak"
                  className="mr-2"
                />
                <label htmlFor="kpTidak">TIDAK</label>
              </div>
            </div>
          </div>

          {/* Bumil KEK mendapat Tambahan Gizi */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">
              Bumil KEK mendapat Tambahan Gizi
            </label>
            <div className="flex gap-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="tambahanGizi"
                  id="giziYa"
                  className="mr-2"
                />
                <label htmlFor="giziYa">YA</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="tambahanGizi"
                  id="giziTidak"
                  className="mr-2"
                />
                <label htmlFor="giziTidak">TIDAK</label>
              </div>
            </div>
          </div>

          {/* Tombol Simpan */}
          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 px-4 py-3 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            SIMPAN
          </button>

          <Footer />
        </div>
      </div>
    </main>
  )
}
