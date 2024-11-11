"use client"

import React, { useState } from "react"

import Footer from "@/components/footer"

import { saveIbuHamilData } from "./actions"

export default function InputDataBumil() {
  const [nama, setNama] = useState("")
  const [nik, setNik] = useState("")
  const [tanggalLahir, setTanggalLahir] = useState("")
  const [umur, setUmur] = useState("")
  const [hariPertamaHaid, setHariPertamaHaid] = useState("")
  const [tanggalPerkiraanLahir, setTanggalPerkiraanLahir] = useState("")
  const [umurKehamilan, setUmurKehamilan] = useState("")
  const [periksaKehamilan, setPeriksaKehamilan] = useState("")
  const [statusGizi, setStatusGizi] = useState(false)
  const [statusPeriksaLengkap, setStatusPeriksaLengkap] = useState(false)
  const [minumTtd, setMinumTtd] = useState(false)
  const [kpPascaBersalin, setKpPascaBersalin] = useState(false)
  const [tambahanGizi, setTambahanGizi] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await saveIbuHamilData({
        nama,
        nik,
        tanggalLahir: new Date(tanggalLahir),
        umur: parseInt(umur, 10),
        hariPertamaHaid: new Date(hariPertamaHaid),
        tanggalPerkiraanLahir: new Date(tanggalPerkiraanLahir),
        umurKehamilan: parseInt(umurKehamilan, 10),
        periksaKehamilan,
        statusGizi,
        statusPeriksaLengkap,
        minumTtd,
        kpPascaBersalin,
        tambahanGizi,
      })
      alert("Data berhasil disimpan")

      setNama("")
      setNik("")
      setTanggalLahir("")
      setUmur("")
      setHariPertamaHaid("")
      setTanggalPerkiraanLahir("")
      setUmurKehamilan("")
      setPeriksaKehamilan("")
      setStatusGizi(false)
      setStatusPeriksaLengkap(false)
      setMinumTtd(false)
      setKpPascaBersalin(false)
      setTambahanGizi(false)
    } catch (error) {
      console.error("Terjadi kesalahan saat menyimpan data:", error)
      alert("Gagal menyimpan data")
    }
  }

  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="w-full max-w-md rounded-lg bg-white p-6 text-black shadow-md">
          <h2 className="mb-6 text-xl font-semibold">DATA LAYANAN IBU HAMIL</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">
                Nama Ibu Hamil
              </label>
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
                Hari Pertama Haid Terakhir
              </label>
              <input
                type="date"
                value={hariPertamaHaid}
                onChange={(e) => setHariPertamaHaid(e.target.value)}
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">
                Tanggal Perkiraan Lahir
              </label>
              <input
                type="date"
                value={tanggalPerkiraanLahir}
                onChange={(e) => setTanggalPerkiraanLahir(e.target.value)}
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">
                Umur Kehamilan (Minggu)
              </label>
              <input
                type="number"
                value={umurKehamilan}
                onChange={(e) => setUmurKehamilan(e.target.value)}
                placeholder="6"
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Periksa Kehamilan/Nifas */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">
                Periksa Kehamilan/Nifas (Minggu ke -)
              </label>
              <select
                value={periksaKehamilan}
                onChange={(e) => setPeriksaKehamilan(e.target.value)}
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
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
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="statusGizi"
                    checked={statusGizi === true}
                    onChange={() => setStatusGizi(true)}
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="statusGizi"
                    checked={statusGizi === false}
                    onChange={() => setStatusGizi(false)}
                    className="mr-2"
                  />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            {/* Status Periksa Lengkap */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">
                Status Periksa Lengkap
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="statusPeriksaLengkap"
                    checked={statusPeriksaLengkap === true}
                    onChange={() => setStatusPeriksaLengkap(true)}
                    className="mr-2"
                  />
                  <span>Lengkap</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="statusPeriksaLengkap"
                    checked={statusPeriksaLengkap === false}
                    onChange={() => setStatusPeriksaLengkap(false)}
                    className="mr-2"
                  />
                  <span>Tidak Lengkap</span>
                </label>
              </div>
            </div>

            {/* Minum TTD */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">
                Minum TTD
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="minumTtd"
                    checked={minumTtd === true}
                    onChange={() => setMinumTtd(true)}
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="minumTtd"
                    checked={minumTtd === false}
                    onChange={() => setMinumTtd(false)}
                    className="mr-2"
                  />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            {/* KP Pasca Bersalin */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">
                KP Pasca Bersalin
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="kpPascaBersalin"
                    checked={kpPascaBersalin === true}
                    onChange={() => setKpPascaBersalin(true)}
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="kpPascaBersalin"
                    checked={kpPascaBersalin === false}
                    onChange={() => setKpPascaBersalin(false)}
                    className="mr-2"
                  />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            {/* Bumil KEK mendapat Tambahan Gizi */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">
                Bumil KEK mendapat Tambahan Gizi
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tambahanGizi"
                    checked={tambahanGizi === true}
                    onChange={() => setTambahanGizi(true)}
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tambahanGizi"
                    checked={tambahanGizi === false}
                    onChange={() => setTambahanGizi(false)}
                    className="mr-2"
                  />
                  <span>TIDAK</span>
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
          <Footer />
        </div>
      </div>
    </main>
  )
}
