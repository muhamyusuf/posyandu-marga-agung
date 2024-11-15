import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"

import { ChartDemo1 } from "@/components/charts/chart1"
import { ChartDemo2 } from "@/components/charts/chart2"
import { ChartDemo3 } from "@/components/charts/chart3"
import { ChartDemo4 } from "@/components/charts/chart4"
import { ChartDemo5 } from "@/components/charts/chart5"
import { ChartDemo6 } from "@/components/charts/chart6"

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/login")
  }

  return (
    <main className="flex min-h-screen w-full max-w-[1280px] flex-col justify-start">
      <h1 className="text-2xl font-bold">Dashboard Monitoring</h1>

      <div className="mt-10">
        <h2 className="font-bold">Report Data Posyandu</h2>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2 md:justify-start">
        <ChartDemo3 />
        <ChartDemo5 />
        <ChartDemo6 />
        <ChartDemo1 />
        <ChartDemo2 />
      </div>

      <div className="mt-2 w-full">
        <ChartDemo4 />
      </div>
    </main>
  )
}
