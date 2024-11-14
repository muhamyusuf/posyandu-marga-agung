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

// Define types for LayananAnak based on your Prisma schema
type LayananAnak = {
  id: string
  namaOrangTua: string
  jenisKelamin: "LAKI_LAKI" | "PEREMPUAN"
  statusGiziKurang: boolean
  statusGiziBuruk: boolean
  stunting: boolean
  imunisasiHbO: boolean
  imunisasiBcgPolio1: boolean
  statusKelengkapan: boolean
  createdAt: string // Assuming ISO string format
}

// Define mock data
const mockData: LayananAnak[] = [
  {
    id: "1",
    namaOrangTua: "John Doe",
    jenisKelamin: "LAKI_LAKI",
    statusGiziKurang: true,
    statusGiziBuruk: false,
    stunting: false,
    imunisasiHbO: true,
    imunisasiBcgPolio1: true,
    statusKelengkapan: true,
    createdAt: "2023-01-01T00:00:00Z",
  },
  // Add more mock rows as needed
]

// Define columns based on the LayananAnak model fields
const columns: ColumnDef<LayananAnak>[] = [
  {
    accessorKey: "namaOrangTua",
    header: "Nama Orang Tua",
  },
  {
    accessorKey: "jenisKelamin",
    header: "Jenis Kelamin",
    cell: (info) =>
      info.getValue() === "LAKI_LAKI" ? "Laki-Laki" : "Perempuan",
  },
  {
    accessorKey: "statusGiziKurang",
    header: "Status Gizi Kurang",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "statusGiziBuruk",
    header: "Status Gizi Buruk",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "stunting",
    header: "Stunting",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "imunisasiHbO",
    header: "Imunisasi HbO",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "imunisasiBcgPolio1",
    header: "Imunisasi BCG/Polio 1",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "statusKelengkapan",
    header: "Status Kelengkapan",
    cell: (info) => (info.getValue() ? "Lengkap" : "Tidak Lengkap"),
  },
  {
    accessorKey: "createdAt",
    header: "Tanggal Pencatatan",
    cell: (info) =>
      new Date(info.getValue<string>()).toLocaleDateString("id-ID"),
  },
]

export default function TabelDataAnak() {
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
