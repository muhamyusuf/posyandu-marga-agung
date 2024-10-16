import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        {/* <Icons.logo className="h-16 w-16" /> */}
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
          <ModeToggle />
        </div>

        <h1 className="text-4xl font-semibold">Contoh Penggunaan</h1>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-start justify-center gap-1">
            <Label>NIK</Label>
            <Input />
          </div>

          <div className="flex flex-col items-start justify-center gap-1">
            <Label>Nama</Label>
            <Input />
          </div>

          <div className="flex gap-2 self-end">
            <Button variant={"outline"}>Cancel</Button>
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
