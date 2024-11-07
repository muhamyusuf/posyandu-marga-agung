import Image from "next/image"
import Link from "next/link"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Reports",
    url: "/",
    icon: Home,
  },
  {
    title: "Input Data Posyandu",
    url: "/input-data",
    icon: Inbox,
  },
  {
    title: "Tabel Data Posyandu",
    url: "/tabel-data",
    icon: Calendar,
  },
  {
    title: "Tambah Artikel & Berita",
    url: "/berita-artikel",
    icon: Calendar,
  },
  {
    title: "Atur Jadwal Posyandu",
    url: "/jadwal-posyandu",
    icon: Calendar,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-none">
      <SidebarContent>
        <SidebarGroup>
          <Link href="/" className="flex items-center" prefetch={false}>
            <Image
              src="/logo-posyandu.png"
              width={1000}
              height={1000}
              alt="Posyandu Marga Agung"
              className="h-12 w-16"
            />

            <span className="sr-only">Posyandu Marga Agung</span>
          </Link>

          <SidebarGroupLabel>Dashboard Posyandu Marga Agung</SidebarGroupLabel>

          <SidebarGroupContent className="mt-10">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={`/dashboard${item.url}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
