"use server"

import { revalidatePath, unstable_noStore } from "next/cache"
import { createClient } from "@/utils/supabase/server"

import { IBlog } from "@/types/blog"
import { BlogFormSchemaType } from "@/app/(dashboard)/dashboard/berita-artikel/schema"

const DASHBOARD = "/dashboard/blog"

export async function createBlog(data: {
  content: string
  title: string
  image_url: string
  is_premium: boolean
  is_published: boolean
}) {
  const { ["content"]: excludedKey, ...blog } = data

  const supabase = await createClient()
  const blogResult = await supabase
    .from("blog")
    .insert(blog)
    .select("id")
    .single()

  if (blogResult.error?.message && !blogResult.data) {
    return JSON.stringify(blogResult)
  } else {
    const result = await supabase
      .from("blog_content")
      .insert({ blog_id: blogResult?.data?.id!, content: data.content })

    revalidatePath(DASHBOARD)
    return JSON.stringify(result)
  }
}

export async function readBlog() {
  const supabase = await createClient()
  return supabase
    .from("blog")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: true })
}

export async function readBlogAdmin() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const supabase = await createClient()
  return supabase
    .from("blog")
    .select("*")
    .order("created_at", { ascending: true })
}

export async function readBlogById(blogId: string) {
  const supabase = await createClient()
  return supabase.from("blog").select("*").eq("id", blogId).single()
}
export async function readBlogIds() {
  const supabase = await createClient()
  return supabase.from("blog").select("id")
}

export async function readBlogDeatailById(blogId: string) {
  const supabase = await createClient()
  return await supabase
    .from("blog")
    .select("*,blog_content(*)")
    .eq("id", blogId)
    .single()
}

export async function readBlogContent(blogId: string) {
  unstable_noStore()
  const supabase = await createClient()
  return await supabase
    .from("blog_content")
    .select("content")
    .eq("blog_id", blogId)
    .single()
}

export async function updateBlogById(blogId: string, data: IBlog) {
  const supabase = await createClient()
  const result = await supabase.from("blog").update(data).eq("id", blogId)
  revalidatePath(DASHBOARD)
  revalidatePath("/blog/" + blogId)
  return JSON.stringify(result)
}

export async function updateBlogDetail(
  blogId: string,
  data: BlogFormSchemaType
) {
  const { ["content"]: excludedKey, ...blog } = data

  const supabase = await createClient()
  const resultBlog = await supabase.from("blog").update(blog).eq("id", blogId)
  if (resultBlog.error) {
    return JSON.stringify(resultBlog)
  } else {
    const result = await supabase
      .from("blog_content")
      .update({ content: data.content })
      .eq("blog_id", blogId)
    revalidatePath(DASHBOARD)
    revalidatePath("/blog/" + blogId)

    return JSON.stringify(result)
  }
}

export async function deleteBlogById(blogId: string) {
  const supabase = await createClient()
  const result = await supabase.from("blog").delete().eq("id", blogId)
  revalidatePath(DASHBOARD)
  revalidatePath("/blog/" + blogId)
  return JSON.stringify(result)
}
