import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">Login Admin & Kader Posyandu</h1>

      <form className="mt-10 flex flex-col gap-2">
        <div className="flex flex-col items-start justify-center gap-1">
          <Label>Username</Label>
          <Input />
        </div>

        <div className="flex flex-col items-start justify-center gap-1">
          <Label>Password</Label>
          <Input />
        </div>

        <div className="flex gap-2 self-end">
          <Link href="/dashboard">
            <Button type="submit">Submit</Button>
          </Link>
        </div>
      </form>
    </main>
  )
}
