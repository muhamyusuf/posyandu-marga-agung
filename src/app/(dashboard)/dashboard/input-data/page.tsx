import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

export default function InputDataPage() {
  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="w-full max-w-md rounded-md bg-white p-6 text-black">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-xl font-semibold">DATA LAYANAN KELUARGA</h1>
          </div>

          {/* Dropdown untuk memilih layanan */}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-semibold">
              Tampilan Data Tabel
            </label>
            <select className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">-Pilih-</option>
              <option value="ibu_hamil">Layanan Ibu Hamil</option>
              <option value="remaja_putri">Layanan Remaja Putri</option>
              <option value="calon_pengantin">Layanan Calon Pengantin</option>
              <option value="keluarga">Layanan Keluarga</option>
              <option value="anak">Layanan Anak</option>
              <option value="lansia">Layanan Lansia</option>
            </select>
          </div>

          {/* Form */}
          <form>
            {/* Nama Lengkap Kepala Keluarga */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Nama Lengkap Kepala Keluarga
              </label>
              <input
                type="text"
                placeholder="Nama"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Dusun */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">Dusun</label>
              <input
                type="text"
                placeholder="Contoh: 3"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Nama Lengkap Ibu Hamil */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Nama Lengkap Ibu Hamil
              </label>
              <input
                type="text"
                placeholder="Nama"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Anak (0-59 bulan) */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Anak (0-59 bulan)
              </label>
              <input
                type="text"
                placeholder="Contoh: 0"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Kategori Keluarga Rentan */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Kategori Keluarga Rentan
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="kategori_rentan" className="mr-2" />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="kategori_rentan" className="mr-2" />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            {/* Memiliki Kartu Keluarga */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Memiliki Kartu Keluarga
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="kartu_keluarga" className="mr-2" />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="kartu_keluarga" className="mr-2" />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            {/* Memiliki Jamban Sehat */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Memiliki Jamban Sehat
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="jamban_sehat" className="mr-2" />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="jamban_sehat" className="mr-2" />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            {/* Memiliki Sumber Air Bersih */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Memiliki Sumber Air Bersih
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="air_bersih" className="mr-2" />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="air_bersih" className="mr-2" />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            {/* Peserta Jaminan Sosial */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Peserta Jaminan Sosial (PKH/BLT-DD/Program sejenis)
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="jaminan_sosial" className="mr-2" />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="jaminan_sosial" className="mr-2" />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            {/* Peserta Jaminan Kesehatan */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Peserta Jaminan Kesehatan
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="jaminan_kesehatan"
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="jaminan_kesehatan"
                    className="mr-2"
                  />
                  <span>TIDAK</span>
                </label>
              </div>
            </div>

            {/* Memiliki Akses Sanitasi/Pembuangan Limbah Layak */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold">
                Memiliki Akses Sanitasi/ Pembuangan Limbah Layak
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="akses_sanitasi" className="mr-2" />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="akses_sanitasi" className="mr-2" />
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
                    name="pendampingan_tpk"
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="pendampingan_tpk"
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
                    name="ketahanan_pangan"
                    className="mr-2"
                  />
                  <span>YA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="ketahanan_pangan"
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

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Website Posyandu ©2024
          </div>
        </div>
      </div>
    </main>
  )
}
