import { NextApiRequest, NextApiResponse } from "next"

import db from "@/lib/db"

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const { id, is_published } = req.body

  if (!id || typeof is_published !== "boolean") {
    return res.status(400).json({ message: "Invalid request body" })
  }

  try {
    await db.blog.update({
      where: { id },
      data: { is_published },
    })

    return res.status(200).json({ success: true, id, is_published })
  } catch (error) {
    console.error("Gagal mengubah status posting:", error)
    return res.status(500).json({ message: "Gagal mengubah status posting" })
  }
}
