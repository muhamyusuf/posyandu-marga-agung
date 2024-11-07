import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <Navbar />

      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        {/* <Icons.logo className="w-16 h-16" /> */}
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="flex gap-2">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            className={cn(buttonVariants({ size: "default" }))}
          >
            Get Started
          </Link>
        </div>

        {/* <h1 className="text-4xl font-semibold">Contoh Penggunaan</h1> */}

        {/* <div className="flex flex-col gap-2">
          <div className="flex flex-col items-start justify-center gap-1">
            <Label>NIK</Label>
            <Input />
          </div>

          <div className="flex flex-col items-start justify-center gap-1">
            <Label>Nama</Label>
            <Input />
          </div>

          <div className="flex self-end gap-2">
            <Button variant={"outline"}>Cancel</Button>
            <Button>Submit</Button>
          </div>
        </div> */}

        {/* <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card> */}
      </div>
    </main>
  )
}
