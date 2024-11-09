"use client"

import React, { useState } from "react"

import Footer from "@/components/footer"

export default function InputDataCanti() {
  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="w-full max-w-md rounded-lg bg-white p-6 text-black shadow-md">
          <h2 className="mb-6 text-xl font-semibold">DATA LAYANAN CATIN</h2>

          {/* Input Nama */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">Nama</label>
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

          {/* Input Perkiraan Tanggal Pernikahan */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">
              Perkiraan Tanggal Pernikahan
            </label>
            <input
              type="text"
              placeholder="Contoh: 17/02/2025"
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Periksa Kesehatan */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">
              Periksa Kesehatan
            </label>
            <div className="flex gap-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="periksaKesehatan"
                  id="periksaKesehatanYa"
                  className="mr-2"
                />
                <label htmlFor="periksaKesehatanYa">YA</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="periksaKesehatan"
                  id="periksaKesehatanTidak"
                  className="mr-2"
                />
                <label htmlFor="periksaKesehatanTidak">TIDAK</label>
              </div>
            </div>
          </div>

          {/* Bimbingan Perkawinan */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold">
              Bimbingan Perkawinan
            </label>
            <div className="flex gap-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="bimbinganPerkawinan"
                  id="bimbinganPerkawinanYa"
                  className="mr-2"
                />
                <label htmlFor="bimbinganPerkawinanYa">YA</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="bimbinganPerkawinan"
                  id="bimbinganPerkawinanTidak"
                  className="mr-2"
                />
                <label htmlFor="bimbinganPerkawinanTidak">TIDAK</label>
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
