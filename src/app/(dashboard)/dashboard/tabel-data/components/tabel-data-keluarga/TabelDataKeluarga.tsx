"use client"

import React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Define types for LayananKeluarga based on your Prisma schema
type LayananKeluarga = {
  id: string
  namaKepalaKeluarga: string
  dusun: string
  namaIbuHamil: string
  anak_0_59_bulan: number
  kategoriKeluargaRentan: boolean
  kartuKeluarga: boolean
  jambanSehat: boolean
  sumberAirBersih: boolean
  jaminanSosial: boolean
  jaminanKesehatan: boolean
  aksesSanitasi: boolean
  pendampinganKeluarga: boolean
  ketahananPangan: boolean
  createdAt: string // Assuming ISO string format for dates
}

// Define mock data
const mockData: LayananKeluarga[] = [
  {
    id: "1",
    namaKepalaKeluarga: "Budi Santoso",
    dusun: "Dusun Mekar Sari",
    namaIbuHamil: "Siti Aminah",
    anak_0_59_bulan: 2,
    kategoriKeluargaRentan: true,
    kartuKeluarga: true,
    jambanSehat: true,
    sumberAirBersih: true,
    jaminanSosial: false,
    jaminanKesehatan: true,
    aksesSanitasi: true,
    pendampinganKeluarga: false,
    ketahananPangan: true,
    createdAt: "2023-01-15T00:00:00Z",
  },
  // Add more mock rows as needed
]

// Define columns based on the LayananKeluarga model fields
const columns: ColumnDef<LayananKeluarga>[] = [
  { accessorKey: "namaKepalaKeluarga", header: "Nama Kepala Keluarga" },
  { accessorKey: "dusun", header: "Dusun" },
  { accessorKey: "namaIbuHamil", header: "Nama Ibu Hamil" },
  { accessorKey: "anak_0_59_bulan", header: "Anak (0-59 Bulan)" },
  {
    accessorKey: "kategoriKeluargaRentan",
    header: "Kategori Keluarga Rentan",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "kartuKeluarga",
    header: "Kartu Keluarga",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "jambanSehat",
    header: "Jamban Sehat",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "sumberAirBersih",
    header: "Sumber Air Bersih",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "jaminanSosial",
    header: "Jaminan Sosial",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "jaminanKesehatan",
    header: "Jaminan Kesehatan",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "aksesSanitasi",
    header: "Akses Sanitasi",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "pendampinganKeluarga",
    header: "Pendampingan Keluarga",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "ketahananPangan",
    header: "Ketahanan Pangan",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "createdAt",
    header: "Tanggal Pencatatan",
    cell: (info) =>
      new Date(info.getValue<string>()).toLocaleDateString("id-ID"),
  },
]

export default function TabelDataKeluarga() {
  const table = useReactTable({
    data: mockData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-x-auto">
      <ScrollArea className="max-w-[320px] overflow-hidden rounded-md border sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1280px]">
        <Table className="min-w-full divide-y divide-gray-200 overflow-hidden rounded-md">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="bg-white">
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="whitespace-nowrap px-6 py-4 text-sm text-gray-500"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
