"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { PostgrestSingleResponse } from "@supabase/supabase-js"

import { useToast } from "@/hooks/use-toast"

import { createBlog } from "./action"
import BlogForm from "./BlogForm"
import { defaultCreateBlog } from "./data"
import { BlogFormSchemaType } from "./schema"

export default function CreateForm() {
  const { toast } = useToast()
  const router = useRouter()

  const onHandleSubmit = async (data: BlogFormSchemaType) => {
    const result = JSON.parse(await createBlog(data))

    const { error } = result as PostgrestSingleResponse<null>
    if (error?.message) {
      toast({
        title: "Fail to create a post 😢",
        description: (
          <pre className="mt-2 w-[340px] rounded-md p-4">
            <code className="text-white">{error.message}</code>
          </pre>
        ),
      })
    } else {
      toast({
        title: "Successfully create a post 🎉",
        description: data.title,
      })
      router.push("/dashboard")
    }
  }

  return (
    <div className="min-w-[300px] sm:min-w-[580px] md:min-w-[680px] lg:min-w-[900px] xl:min-w-[1200px]">
      <BlogForm
        onHandleSubmit={onHandleSubmit}
        defaultBlog={defaultCreateBlog}
      />
    </div>
  )
}
