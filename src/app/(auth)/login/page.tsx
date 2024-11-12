import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { login } from "./actions"

export default function LoginPage() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
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

      <Card className="mt-5 w-[320px] border-none">
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
              <Label htmlFor="email">Email</Label>
              <Input
                className="h-8"
                id="email"
                name="email"
                type="email"
                required
              />
            </div>

            <div className="flex flex-col items-start justify-center gap-1">
              <Label htmlFor="password">Password</Label>
              <Input
                className="h-8"
                id="password"
                name="password"
                type="password"
                required
              />
            </div>

            <div className="mt-5 flex w-full gap-2">
              <div className="flex w-full">
                <Button
                  formAction={login}
                  type="submit"
                  size={"sm"}
                  className="w-full"
                >
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
