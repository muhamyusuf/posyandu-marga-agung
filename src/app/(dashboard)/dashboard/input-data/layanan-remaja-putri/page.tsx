"use client"
import React, { useState } from "react"
import Footer from "@/components/footer"
import { saveRematriData } from "./actions"

export default function InputDataRematri() {
  const [nama, setNama] = useState("")
  const [nik, setNik] = useState("")
  const [tanggalLahir, setTanggalLahir] = useState("")
  const [umur, setUmur] = useState("")
  const [ttd, setTtd] = useState(false)
  const [anemia, setAnemia] = useState(false)
  const [hasilAnemia, setHasilAnemia] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const formattedTanggalLahir = new Date(tanggalLahir).toISOString()
      await saveRematriData({
        nama,
        nik,
        tanggalLahir: formattedTanggalLahir,
        umur: parseInt(umur, 10),
        ttd,
        anemia,
        hasilAnemia,
      })
      alert("Data berhasil disimpan")

      setNama("")
      setNik("")
      setTanggalLahir("")
      setUmur("")
      setTtd(false)
      setAnemia(false)
      setHasilAnemia(false)
    } catch (error) {
      console.error("Terjadi kesalahan saat menyimpan data:", error)
      alert("Gagal menyimpan data")
    }
  }

  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="w-full max-w-md rounded-md bg-white p-6 text-black shadow-md">
          <div className="mb-6 text-center">
            <h1 className="text-xl font-semibold">DATA LAYANAN REMAJA PUTRI</h1>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Input Nama */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">Nama</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Input NIK */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">NIK</label>
              <input
                type="text"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
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
                type="date"
                value={tanggalLahir}
                onChange={(e) => setTanggalLahir(e.target.value)}
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Input Umur */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">Umur</label>
              <input
                type="number"
                value={umur}
                onChange={(e) => setUmur(e.target.value)}
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
                  <input
                    type="radio"
                    name="ttd"
                    id="ttdYa"
                    checked={ttd === true}
                    onChange={() => setTtd(true)}
                    className="mr-2"
                  />
                  <label htmlFor="ttdYa">YA</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="ttd"
                    id="ttdTidak"
                    checked={ttd === false}
                    onChange={() => setTtd(false)}
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
                    checked={anemia === true}
                    onChange={() => setAnemia(true)}
                    className="mr-2"
                  />
                  <label htmlFor="anemiaYa">YA</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="anemia"
                    id="anemiaTidak"
                    checked={anemia === false}
                    onChange={() => setAnemia(false)}
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
                    checked={hasilAnemia === true}
                    onChange={() => setHasilAnemia(true)}
                    className="mr-2"
                  />
                  <label htmlFor="hasilAnemiaYa">ANEMIA</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="hasilAnemia"
                    id="hasilAnemiaTidak"
                    checked={hasilAnemia === false}
                    onChange={() => setHasilAnemia(false)}
                    className="mr-2"
                  />
                  <label htmlFor="hasilAnemiaTidak">TIDAK</label>
                </div>
              </div>
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
