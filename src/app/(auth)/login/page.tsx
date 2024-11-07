import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-5 md:flex-row">
        <Image
          src="/logo-posyandu.png"
          width={1000}
          height={1000}
          alt="Posyandu Marga Agung"
          className="h-32 w-36 rounded-md border"
        />

        <Image
          src="/logo-sgds.png"
          width={1000}
          height={1000}
          alt="Posyandu Marga Agung"
          className="h-32 w-36 rounded-md border"
        />
      </div>

      <Card className="mt-5 min-w-[300px] border-none">
        <CardContent className="border-none shadow-sm">
          <form className="mt-10 flex flex-col gap-2">
            <h1 className="text-lg font-semibold">
              Login
              <br />
              Admin & Kader Posyandu
              <br />
              Desa Marga Agung
            </h1>

            <div className="mt-10 flex flex-col items-start justify-center gap-1">
              <Label>Username</Label>

              <Input className="h-8" />
            </div>

            <div className="flex flex-col items-start justify-center gap-1">
              <Label>Password</Label>

              <Input className="h-8" />
            </div>

            <div className="mt-5 flex w-full gap-2">
              <Link href="/dashboard" className="flex w-full">
                <Button type="submit" size={"sm"} className="w-full">
                  Login
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
