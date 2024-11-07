import Link from "next/link"

import { Button, buttonVariants } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center" prefetch={false}>
            <MountainIcon className="h-6 w-6" />

            <span className="sr-only">Posyandu Marga Agung</span>
          </Link>

          <nav className="hidden gap-4 md:flex">
            <Link
              href="/"
              className="flex items-center text-sm font-medium transition-colors duration-300 ease-in-out hover:text-primary"
              prefetch={false}
            >
              Posyandu Marga Agung
            </Link>
            <Link
              href="berita-artikel"
              className="flex items-center text-sm font-medium transition-colors duration-300 ease-in-out hover:text-primary"
              prefetch={false}
            >
              Berita & Artikel
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={"/login"}
              className={`${buttonVariants({ size: "sm" })} px-4`}
            >
              Login
            </Link>
            {/* <Button size="sm" className="px-4" >
              Login
            </Button> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
