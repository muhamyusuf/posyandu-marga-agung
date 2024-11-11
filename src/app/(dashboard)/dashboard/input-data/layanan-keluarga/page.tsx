"use client"
import React, { useState } from "react"
import Footer from "@/components/footer"
import { saveKeluargaData } from "./actions"

export default function InputDataKeluarga() {
  const [namaKepalaKeluarga, setNamaKepalaKeluarga] = useState("")
  const [dusun, setDusun] = useState("")
  const [namaIbuHamil, setNamaIbuHamil] = useState("")
  const [anak_0_59_bulan, setAnak_0_59_bulan] = useState(0)
  const [kategoriKeluargaRentan, setKategoriKeluargaRentan] = useState(false)
  const [kartuKeluarga, setKartuKeluarga] = useState(false)
  const [jambanSehat, setJambanSehat] = useState(false)
  const [sumberAirBersih, setSumberAirBersih] = useState(false)
  const [jaminanSosial, setJaminanSosial] = useState(false)
  const [jaminanKesehatan, setJaminanKesehatan] = useState(false)
  const [aksesSanitasi, setAksesSanitasi] = useState(false)
  const [pendampinganKeluarga, setPendampinganKeluarga] = useState(false)
  const [ketahananPangan, setKetahananPangan] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await saveKeluargaData({
        namaKepalaKeluarga,
        dusun,
        namaIbuHamil,
        anak_0_59_bulan,
        kategoriKeluargaRentan,
        kartuKeluarga,
        jambanSehat,
        sumberAirBersih,
        jaminanSosial,
        jaminanKesehatan,
        aksesSanitasi,
        pendampinganKeluarga,
        ketahananPangan,
      })
      alert("Data berhasil disimpan")

      setNamaKepalaKeluarga("")
      setDusun("")
      setNamaIbuHamil("")
      setAnak_0_59_bulan(0)
      setKategoriKeluargaRentan(false)
      setKartuKeluarga(false)
      setJambanSehat(false)
      setSumberAirBersih(false)
      setJaminanSosial(false)
      setJaminanKesehatan(false)
      setAksesSanitasi(false)
      setPendampinganKeluarga(false)
      setKetahananPangan(false)
    } catch (error) {
      console.error("Terjadi kesalahan saat menyimpan data:", error)
      alert("Gagal menyimpan data")
    }
  }

  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="w-full max-w-md rounded-md bg-white p-6 text-black">
          <div className="mb-6 text-center">
            <h1 className="text-xl font-semibold">DATA LAYANAN KELUARGA</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Nama Lengkap Kepala Keluarga
              </label>
              <input
                type="text"
                value={namaKepalaKeluarga}
                onChange={(e) => setNamaKepalaKeluarga(e.target.value)}
                placeholder="Nama"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">Dusun</label>
              <input
                type="text"
                value={dusun}
                onChange={(e) => setDusun(e.target.value)}
                placeholder="Contoh: 3"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Nama Lengkap Ibu Hamil
              </label>
              <input
                type="text"
                value={namaIbuHamil}
                onChange={(e) => setNamaIbuHamil(e.target.value)}
                placeholder="Nama"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Anak (0-59 bulan)
              </label>
              <input
                type="number"
                value={anak_0_59_bulan}
                onChange={(e) => setAnak_0_59_bulan(Number(e.target.value))}
                placeholder="Contoh: 0"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Kategori Keluarga Rentan
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="kategoriKeluargaRentan"
                    checked={kategoriKeluargaRentan === true}
                    onChange={() => setKategoriKeluargaRentan(true)}
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="kategoriKeluargaRentan"
                    checked={kategoriKeluargaRentan === false}
                    onChange={() => setKategoriKeluargaRentan(false)}
                    className="mr-2"
                  />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Memiliki Kartu Keluarga
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="kartuKeluarga"
                    checked={kartuKeluarga === true}
                    onChange={() => setKartuKeluarga(true)}
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="kartuKeluarga"
                    checked={kartuKeluarga === false}
                    onChange={() => setKartuKeluarga(false)}
                    className="mr-2"
                  />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Memiliki Jamban Sehat
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="jambanSehat"
                    checked={jambanSehat === true}
                    onChange={() => setJambanSehat(true)}
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="jambanSehat"
                    checked={jambanSehat === false}
                    onChange={() => setJambanSehat(false)}
                    className="mr-2"
                  />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            {/* Sumber Air Bersih */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Memiliki Sumber Air Bersih
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sumberAirBersih"
                    checked={sumberAirBersih === true}
                    onChange={() => setSumberAirBersih(true)}
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sumberAirBersih"
                    checked={sumberAirBersih === false}
                    onChange={() => setSumberAirBersih(false)}
                    className="mr-2"
                  />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            {/* Jaminan Sosial */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Peserta Jaminan Sosial (PKH/BLT-DD/Program sejenis)
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="jaminanSosial"
                    checked={jaminanSosial === true}
                    onChange={() => setJaminanSosial(true)}
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="jaminanSosial"
                    checked={jaminanSosial === false}
                    onChange={() => setJaminanSosial(false)}
                    className="mr-2"
                  />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            {/* Jaminan Kesehatan */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Peserta Jaminan Kesehatan
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="jaminanKesehatan"
                    checked={jaminanKesehatan === true}
                    onChange={() => setJaminanKesehatan(true)}
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="jaminanKesehatan"
                    checked={jaminanKesehatan === false}
                    onChange={() => setJaminanKesehatan(false)}
                    className="mr-2"
                  />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            {/* Akses Sanitasi */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Memiliki Akses Sanitasi/Pembuangan Limbah Layak
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="aksesSanitasi"
                    checked={aksesSanitasi === true}
                    onChange={() => setAksesSanitasi(true)}
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="aksesSanitasi"
                    checked={aksesSanitasi === false}
                    onChange={() => setAksesSanitasi(false)}
                    className="mr-2"
                  />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            {/* Pendampingan Keluarga oleh TPK */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Pendampingan Keluarga oleh TPK
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="pendampinganKeluarga"
                    checked={pendampinganKeluarga === true}
                    onChange={() => setPendampinganKeluarga(true)}
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="pendampinganKeluarga"
                    checked={pendampinganKeluarga === false}
                    onChange={() => setPendampinganKeluarga(false)}
                    className="mr-2"
                  />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            {/* Peserta Kegiatan Ketahanan Pangan */}
            <div className="mb-6">
              <label className="mb-1 block text-sm font-semibold">
                Peserta Kegiatan Ketahanan Pangan
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="ketahananPangan"
                    checked={ketahananPangan === true}
                    onChange={() => setKetahananPangan(true)}
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="ketahananPangan"
                    checked={ketahananPangan === false}
                    onChange={() => setKetahananPangan(false)}
                    className="mr-2"
                  />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full rounded-md bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                SIMPAN
              </button>
            </div>
          </form>

          <Footer />
        </div>
      </div>
    </main>
  )
}
