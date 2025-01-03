export type IBlog = {
  id: string
  title: string
  image_url: string
  created_at: string
  is_premium: boolean
  content: string
  is_published: boolean
}

export type IBlogDetial = {
  created_at: string
  id: string
  image_url: string
  is_premium: boolean
  is_published: boolean
  title: string
  blog_content: {
    blog_id: string
    content: string
    created_at: string
  }
} | null

export type IBlogForm = {
  created_at: string
  id: string
  image_url: string
  is_premium: boolean
  is_published: boolean
  title: string
  blog_content: {
    blog_id: string
    content: string
    created_at: string
  }
}
