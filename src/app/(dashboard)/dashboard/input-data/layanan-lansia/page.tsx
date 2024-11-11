"use client"
import React, { useState } from "react"
import Footer from "@/components/footer"
import { saveDataLansia } from "./actions"

export default function InputDataLansia() {
  const [nama, setNama] = useState("")
  const [nik, setNik] = useState("")
  const [tanggalLahir, setTanggalLahir] = useState("")
  const [umur, setUmur] = useState("")
  const [gds, setGds] = useState("")
  const [beratBadan, setBeratBadan] = useState("")
  const [tinggiBadan, setTinggiBadan] = useState("")
  const [lingkarPinggang, setLingkarPinggang] = useState("")
  const [tekananDarah, setTekananDarah] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await saveDataLansia({
        nama,
        nik,
        tanggalLahir: new Date(tanggalLahir),
        umur: parseInt(umur, 10),
        gds: parseInt(gds, 10),
        beratBadan: parseFloat(beratBadan),
        tinggiBadan: parseFloat(tinggiBadan),
        lingkarPinggang: parseFloat(lingkarPinggang),
        tekananDarah,
      })
      alert("Data berhasil disimpan")

      setNama("")
      setNik("")
      setTanggalLahir("")
      setUmur("")
      setGds("")
      setBeratBadan("")
      setTinggiBadan("")
      setLingkarPinggang("")
      setTekananDarah("")
    } catch (error) {
      console.error("Terjadi kesalahan saat menyimpan data:", error)
      alert("Gagal menyimpan data")
    }
  }

  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="w-full max-w-md rounded-md bg-white p-6 text-black shadow-md">
          <h2 className="mb-4 text-xl font-bold">DATA LAYANAN LANSIA</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="mb-2 block font-semibold text-gray-700" htmlFor="namaLansia">Nama Lansia</label>
              <input
                type="text"
                id="namaLansia"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nama"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block font-semibold text-gray-700" htmlFor="nik">NIK</label>
              <input
                type="text"
                id="nik"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contoh: 3602041211870001"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block font-semibold text-gray-700" htmlFor="tanggalLahir">Tanggal Lahir</label>
              <input
                type="date"
                id="tanggalLahir"
                value={tanggalLahir}
                onChange={(e) => setTanggalLahir(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block font-semibold text-gray-700" htmlFor="umur">Umur</label>
              <input
                type="number"
                id="umur"
                value={umur}
                onChange={(e) => setUmur(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contoh: 21"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block font-semibold text-gray-700" htmlFor="gds">GDS</label>
              <input
                type="number"
                id="gds"
                value={gds}
                onChange={(e) => setGds(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="116"
              />
            </div>

            <h3 className="mb-4 mt-6 text-lg font-semibold">PEMERIKSAAN</h3>

            <div className="mb-4">
              <label className="mb-2 block font-semibold text-gray-700" htmlFor="beratBadan">Berat Badan</label>
              <input
                type="number"
                id="beratBadan"
                value={beratBadan}
                onChange={(e) => setBeratBadan(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="54 Kg"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block font-semibold text-gray-700" htmlFor="tinggiBadan">Tinggi Badan</label>
              <input
                type="number"
                id="tinggiBadan"
                value={tinggiBadan}
                onChange={(e) => setTinggiBadan(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="156 Cm"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block font-semibold text-gray-700" htmlFor="lingkarPinggang">Lingkar Pinggang</label>
              <input
                type="number"
                id="lingkarPinggang"
                value={lingkarPinggang}
                onChange={(e) => setLingkarPinggang(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="70 Cm"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block font-semibold text-gray-700" htmlFor="tekananDarah">Tekanan Darah</label>
              <input
                type="text"
                id="tekananDarah"
                value={tekananDarah}
                onChange={(e) => setTekananDarah(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="156/93"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              SIMPAN
            </button>
          </form>

          <Footer />
        </div>
      </div>
    </main>
  )
}