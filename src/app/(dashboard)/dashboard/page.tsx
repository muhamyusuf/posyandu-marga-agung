import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"

import { ChartDemo1 } from "@/components/charts/chart1"
import { ChartDemo2 } from "@/components/charts/chart2"
import { ChartDemo3 } from "@/components/charts/chart3"
import { ChartDemo4 } from "@/components/charts/chart4"

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/login")
  }

  return (
    <main className="flex min-h-screen flex-col justify-start">
      <h1 className="text-2xl font-bold">Dashboard Monitoring</h1>

      <div className="mt-10">
        <h2 className="font-bold">Report Data Posyandu</h2>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-5 md:justify-start">
        <ChartDemo1 />
        <ChartDemo2 />
        <ChartDemo3 />
      </div>

      <div className="mt-10 w-full">
        <ChartDemo4 />
      </div>
    </main>
  )
}
