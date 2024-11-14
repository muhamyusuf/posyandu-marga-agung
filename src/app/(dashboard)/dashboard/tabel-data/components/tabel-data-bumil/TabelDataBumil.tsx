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

// Define types for LayananIbuHamil based on your Prisma schema
type LayananIbuHamil = {
  id: string
  hariPertamaHaid: string // Assuming ISO string format for dates
  tanggalPerkiraanLahir: string
  umurKehamilan: number
  periksaKehamilan: string
  statusGizi: boolean
  statusPeriksaLengkap: boolean
  minumTtd: boolean
  kpPascaBersalin: boolean
  tambahanGizi: boolean
  createdAt: string
}

// Define mock data
const mockData: LayananIbuHamil[] = [
  {
    id: "1",
    hariPertamaHaid: "2023-01-01T00:00:00Z",
    tanggalPerkiraanLahir: "2023-10-01T00:00:00Z",
    umurKehamilan: 32,
    periksaKehamilan: "Lengkap",
    statusGizi: true,
    statusPeriksaLengkap: true,
    minumTtd: true,
    kpPascaBersalin: false,
    tambahanGizi: true,
    createdAt: "2023-01-01T00:00:00Z",
  },
  // Add more mock rows as needed
]

// Define columns based on the LayananIbuHamil model fields
const columns: ColumnDef<LayananIbuHamil>[] = [
  {
    accessorKey: "hariPertamaHaid",
    header: "Hari Pertama Haid",
    cell: (info) =>
      new Date(info.getValue<string>()).toLocaleDateString("id-ID"),
  },
  {
    accessorKey: "tanggalPerkiraanLahir",
    header: "Tanggal Perkiraan Lahir",
    cell: (info) =>
      new Date(info.getValue<string>()).toLocaleDateString("id-ID"),
  },
  {
    accessorKey: "umurKehamilan",
    header: "Umur Kehamilan (minggu)",
  },
  {
    accessorKey: "periksaKehamilan",
    header: "Status Periksa Kehamilan",
  },
  {
    accessorKey: "statusGizi",
    header: "Status Gizi",
    cell: (info) => (info.getValue() ? "Baik" : "Buruk"),
  },
  {
    accessorKey: "statusPeriksaLengkap",
    header: "Status Periksa Lengkap",
    cell: (info) => (info.getValue() ? "Lengkap" : "Tidak Lengkap"),
  },
  {
    accessorKey: "minumTtd",
    header: "Minum TTD",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "kpPascaBersalin",
    header: "Layanan Pasca Bersalin",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "tambahanGizi",
    header: "Tambahan Gizi",
    cell: (info) => (info.getValue() ? "Ya" : "Tidak"),
  },
  {
    accessorKey: "createdAt",
    header: "Tanggal Pencatatan",
    cell: (info) =>
      new Date(info.getValue<string>()).toLocaleDateString("id-ID"),
  },
]

export default function TabelDataBumil() {
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
