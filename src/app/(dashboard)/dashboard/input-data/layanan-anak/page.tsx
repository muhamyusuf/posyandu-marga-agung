"use client"

import React, { useState } from "react"

import Footer from "@/components/footer"

import { saveDataAnak } from "./actions"

export default function InputDataAnak() {
  const [nama, setNama] = useState("")
  const [nik, setNik] = useState("")
  const [tanggalLahir, setTanggalLahir] = useState("")
  const [umur, setUmur] = useState("")
  const [jenisKelamin, setJenisKelamin] = useState<"LAKI_LAKI" | "PEREMPUAN">(
    "LAKI_LAKI"
  )
  const [namaOrangTua, setNamaOrangTua] = useState("")
  const [statusGiziKurang, setStatusGiziKurang] = useState(false)
  const [statusGiziBuruk, setStatusGiziBuruk] = useState(false)
  const [stunting, setStunting] = useState(false)
  const [imunisasiHbO, setImunisasiHbO] = useState(false)
  const [imunisasiBcgPolio1, setImunisasiBcgPolio1] = useState(false)
  const [statusKelengkapan, setStatusKelengkapan] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await saveDataAnak({
        nama,
        nik,
        tanggalLahir: new Date(tanggalLahir),
        umur: parseInt(umur, 10),
        jenisKelamin,
        namaOrangTua,
        statusGiziKurang,
        statusGiziBuruk,
        stunting,
        imunisasiHbO,
        imunisasiBcgPolio1,
        statusKelengkapan,
      })
      alert("Data berhasil disimpan")

      setNama("")
      setNik("")
      setTanggalLahir("")
      setUmur("")
      setJenisKelamin("LAKI_LAKI")
      setNamaOrangTua("")
      setStatusGiziKurang(false)
      setStatusGiziBuruk(false)
      setStunting(false)
      setImunisasiHbO(false)
      setImunisasiBcgPolio1(false)
      setStatusKelengkapan(false)
    } catch (error) {
      console.error("Terjadi kesalahan saat menyimpan data:", error)
      alert("Gagal menyimpan data")
    }
  }

  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="w-full max-w-md rounded-lg bg-white p-6 text-black shadow-md">
          <h2 className="mb-6 text-xl font-semibold">DATA LAYANAN ANAK</h2>

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
                Jenis Kelamin
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="jenisKelamin"
                    checked={jenisKelamin === "PEREMPUAN"}
                    onChange={() => setJenisKelamin("PEREMPUAN")}
                    className="mr-2"
                  />
                  <span>Perempuan</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="jenisKelamin"
                    checked={jenisKelamin === "LAKI_LAKI"}
                    onChange={() => setJenisKelamin("LAKI_LAKI")}
                    className="mr-2"
                  />
                  <span>Laki-laki</span>
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">
                Nama Lengkap Orang Tua
              </label>
              <input
                type="text"
                value={namaOrangTua}
                onChange={(e) => setNamaOrangTua(e.target.value)}
                placeholder="Contoh: Nur Arini"
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Status Gizi */}
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-semibold">STATUS GIZI</h3>
              {/* Gizi Kurang */}
              <div className="mb-2">
                <label className="mb-2 block text-sm font-semibold">
                  Gizi Kurang
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="giziKurang"
                      checked={statusGiziKurang === true}
                      onChange={() => setStatusGiziKurang(true)}
                      className="mr-2"
                    />
                    <span>YA</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="giziKurang"
                      checked={statusGiziKurang === false}
                      onChange={() => setStatusGiziKurang(false)}
                      className="mr-2"
                    />
                    <span>TIDAK</span>
                  </label>
                </div>
              </div>

              {/* Gizi Buruk */}
              <div className="mb-2">
                <label className="mb-2 block text-sm font-semibold">
                  Gizi Buruk
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="giziBuruk"
                      checked={statusGiziBuruk === true}
                      onChange={() => setStatusGiziBuruk(true)}
                      className="mr-2"
                    />
                    <span>YA</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="giziBuruk"
                      checked={statusGiziBuruk === false}
                      onChange={() => setStatusGiziBuruk(false)}
                      className="mr-2"
                    />
                    <span>TIDAK</span>
                  </label>
                </div>
              </div>

              {/* Stunting */}
              <div className="mb-2">
                <label className="mb-2 block text-sm font-semibold">
                  Stunting
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="stunting"
                      checked={stunting === true}
                      onChange={() => setStunting(true)}
                      className="mr-2"
                    />
                    <span>YA</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="stunting"
                      checked={stunting === false}
                      onChange={() => setStunting(false)}
                      className="mr-2"
                    />
                    <span>TIDAK</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Imunisasi Dasar Lengkap */}
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-semibold">
                IMUNISASI DASAR LENGKAP
              </h3>
              {/* HB - O */}
              <div className="mb-2">
                <label className="mb-2 block text-sm font-semibold">
                  HB - O
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hbO"
                      checked={imunisasiHbO === true}
                      onChange={() => setImunisasiHbO(true)}
                      className="mr-2"
                    />
                    <span>YA</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hbO"
                      checked={imunisasiHbO === false}
                      onChange={() => setImunisasiHbO(false)}
                      className="mr-2"
                    />
                    <span>TIDAK</span>
                  </label>
                </div>
              </div>

              {/* BCG & Polio 1 */}
              <div className="mb-2">
                <label className="mb-2 block text-sm font-semibold">
                  BCG & Polio 1
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="bcgPolio1"
                      checked={imunisasiBcgPolio1 === true}
                      onChange={() => setImunisasiBcgPolio1(true)}
                      className="mr-2"
                    />
                    <span>YA</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="bcgPolio1"
                      checked={imunisasiBcgPolio1 === false}
                      onChange={() => setImunisasiBcgPolio1(false)}
                      className="mr-2"
                    />
                    <span>TIDAK</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Status Kelengkapan */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">
                STATUS KELENGKAPAN
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="statusKelengkapan"
                    checked={statusKelengkapan === true}
                    onChange={() => setStatusKelengkapan(true)}
                    className="mr-2"
                  />
                  <span>Lengkap</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="statusKelengkapan"
                    checked={statusKelengkapan === false}
                    onChange={() => setStatusKelengkapan(false)}
                    className="mr-2"
                  />
                  <span>Tidak Lengkap</span>
                </label>
              </div>
            </div>

            {/* Tombol Simpan */}
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
