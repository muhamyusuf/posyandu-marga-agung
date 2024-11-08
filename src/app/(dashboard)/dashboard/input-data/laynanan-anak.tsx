"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

export default function InputDataAnak() {
  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="w-full max-w-md rounded-lg bg-white p-6 text-black shadow-md">
          <h2 className="mb-6 text-xl font-semibold">DATA LAYANAN ANAK</h2>

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

          {/* Jenis Kelamin */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">
              Jenis Kelamin
            </label>
            <div className="flex gap-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="jenisKelamin"
                  id="perempuan"
                  className="mr-2"
                />
                <label htmlFor="perempuan">Perempuan</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="jenisKelamin"
                  id="lakiLaki"
                  className="mr-2"
                />
                <label htmlFor="lakiLaki">Laki-laki</label>
              </div>
            </div>
          </div>

          {/* Nama Orang Tua */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">
              Nama Lengkap Orang Tua
            </label>
            <input
              type="text"
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
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="giziKurang"
                    id="giziKurangYa"
                    className="mr-2"
                  />
                  <label htmlFor="giziKurangYa">YA</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="giziKurang"
                    id="giziKurangTidak"
                    className="mr-2"
                  />
                  <label htmlFor="giziKurangTidak">TIDAK</label>
                </div>
              </div>
            </div>

            {/* Gizi Buruk */}
            <div className="mb-2">
              <label className="mb-2 block text-sm font-semibold">
                Gizi Buruk
              </label>
              <div className="flex gap-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="giziBuruk"
                    id="giziBurukYa"
                    className="mr-2"
                  />
                  <label htmlFor="giziBurukYa">YA</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="giziBuruk"
                    id="giziBurukTidak"
                    className="mr-2"
                  />
                  <label htmlFor="giziBurukTidak">TIDAK</label>
                </div>
              </div>
            </div>

            {/* Stunting */}
            <div className="mb-2">
              <label className="mb-2 block text-sm font-semibold">
                Stunting
              </label>
              <div className="flex gap-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="stunting"
                    id="stuntingYa"
                    className="mr-2"
                  />
                  <label htmlFor="stuntingYa">YA</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="stunting"
                    id="stuntingTidak"
                    className="mr-2"
                  />
                  <label htmlFor="stuntingTidak">TIDAK</label>
                </div>
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
              <label className="mb-2 block text-sm font-semibold">HB - O</label>
              <div className="flex gap-6">
                <div className="flex items-center">
                  <input type="radio" name="hbO" id="hbOYa" className="mr-2" />
                  <label htmlFor="hbOYa">YA</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="hbO"
                    id="hbOTidak"
                    className="mr-2"
                  />
                  <label htmlFor="hbOTidak">TIDAK</label>
                </div>
              </div>
            </div>

            {/* BCG & Polio 1 */}
            <div className="mb-2">
              <label className="mb-2 block text-sm font-semibold">
                BCG & Polio 1
              </label>
              <div className="flex gap-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="bcgPolio1"
                    id="bcgPolio1Ya"
                    className="mr-2"
                  />
                  <label htmlFor="bcgPolio1Ya">YA</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="bcgPolio1"
                    id="bcgPolio1Tidak"
                    className="mr-2"
                  />
                  <label htmlFor="bcgPolio1Tidak">TIDAK</label>
                </div>
              </div>
            </div>
          </div>
          {/* Status Kelengkapan */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">
              STATUS KELENGKAPAN
            </label>
            <div className="flex gap-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="statusKelengkapan"
                  id="lengkap"
                  className="mr-2"
                />
                <label htmlFor="lengkap">Lengkap</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="statusKelengkapan"
                  id="tidakLengkap"
                  className="mr-2"
                />
                <label htmlFor="tidakLengkap">Tidak Lengkap</label>
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

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Website Posyandu ©2024
          </div>
        </div>
      </div>
    </main>
  )
}
