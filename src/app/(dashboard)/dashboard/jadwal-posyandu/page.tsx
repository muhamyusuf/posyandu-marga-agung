import { CalendarDemo } from "@/components/calendar"

export default function JadwalPosyanduPage() {
  return (
    <main className="flex min-h-screen flex-col justify-start">
      <h1 className="text-2xl font-bold">Atur Jadwal Posyandu</h1>
      <CalendarDemo />
      <div className="mt-10">
        <h2 className="font-bold">Tambah jadwal posyandu bulan ini</h2>
      </div>
    </main>
  )
}
