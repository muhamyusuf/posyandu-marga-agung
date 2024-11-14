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

// Define types for LayananLansia based on your Prisma schema
type LayananLansia = {
  id: string
  gds: number
  beratBadan: number
  tinggiBadan: number
  lingkarPinggang: number
  tekananDarah: string
  createdAt: string // Assuming ISO string format for dates
}

// Define mock data
const mockData: LayananLansia[] = [
  {
    id: "1",
    gds: 5,
    beratBadan: 60.5,
    tinggiBadan: 165.0,
    lingkarPinggang: 85.0,
    tekananDarah: "120/80",
    createdAt: "2023-01-10T00:00:00Z",
  },
  // Add more mock rows as needed
]

// Define columns based on the LayananLansia model fields
const columns: ColumnDef<LayananLansia>[] = [
  { accessorKey: "gds", header: "GDS" },
  { accessorKey: "beratBadan", header: "Berat Badan (kg)" },
  { accessorKey: "tinggiBadan", header: "Tinggi Badan (cm)" },
  { accessorKey: "lingkarPinggang", header: "Lingkar Pinggang (cm)" },
  { accessorKey: "tekananDarah", header: "Tekanan Darah" },
  {
    accessorKey: "createdAt",
    header: "Tanggal Pencatatan",
    cell: (info) =>
      new Date(info.getValue<string>()).toLocaleDateString("id-ID"),
  },
]

export default function TabelDataLansia() {
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
