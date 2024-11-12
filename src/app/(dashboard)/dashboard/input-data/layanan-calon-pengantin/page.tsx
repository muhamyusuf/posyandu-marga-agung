"use client"

import React, { useState } from "react"

import Footer from "@/components/footer"

import { saveCalonPengantinData } from "./actions"

export default function InputDataCanti() {
  const [nama, setNama] = useState("")
  const [nik, setNik] = useState("")
  const [tanggalLahir, setTanggalLahir] = useState("")
  const [umur, setUmur] = useState("")
  const [tanggalPernikahan, setTanggalPernikahan] = useState("")
  const [periksaKesehatan, setPeriksaKesehatan] = useState(false)
  const [bimbinganPerkawinan, setBimbinganPerkawinan] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await saveCalonPengantinData({
        nama,
        nik,
        tanggalLahir: new Date(tanggalLahir),
        umur: parseInt(umur, 10),
        tanggalPernikahan: new Date(tanggalPernikahan),
        periksaKesehatan,
        bimbinganPerkawinan,
      })
      alert("Data berhasil disimpan")

      setNama("")
      setNik("")
      setTanggalLahir("")
      setUmur("")
      setTanggalPernikahan("")
      setPeriksaKesehatan(false)
      setBimbinganPerkawinan(false)
    } catch (error) {
      console.error("Terjadi kesalahan saat menyimpan data:", error)
      alert("Gagal menyimpan data")
    }
  }

  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="w-full max-w-md rounded-lg bg-white p-6 text-black shadow-md">
          <h2 className="mb-6 text-xl font-semibold">DATA LAYANAN CATIN</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">Nama</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama"
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">NIK</label>
              <input
                type="text"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
                placeholder="Contoh: 3602041211870001"
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">
                Tanggal Lahir
              </label>
              <input
                type="date"
                value={tanggalLahir}
                onChange={(e) => setTanggalLahir(e.target.value)}
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">Umur</label>
              <input
                type="number"
                value={umur}
                onChange={(e) => setUmur(e.target.value)}
                placeholder="Contoh: 21"
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">
                Perkiraan Tanggal Pernikahan
              </label>
              <input
                type="date"
                value={tanggalPernikahan}
                onChange={(e) => setTanggalPernikahan(e.target.value)}
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Periksa Kesehatan */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">
                Periksa Kesehatan
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="periksaKesehatan"
                    checked={periksaKesehatan === true}
                    onChange={() => setPeriksaKesehatan(true)}
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="periksaKesehatan"
                    checked={periksaKesehatan === false}
                    onChange={() => setPeriksaKesehatan(false)}
                    className="mr-2"
                  />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            {/* Bimbingan Perkawinan */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold">
                Bimbingan Perkawinan
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="bimbinganPerkawinan"
                    checked={bimbinganPerkawinan === true}
                    onChange={() => setBimbinganPerkawinan(true)}
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="bimbinganPerkawinan"
                    checked={bimbinganPerkawinan === false}
                    onChange={() => setBimbinganPerkawinan(false)}
                    className="mr-2"
                  />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 px-4 py-3 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              SIMPAN
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
