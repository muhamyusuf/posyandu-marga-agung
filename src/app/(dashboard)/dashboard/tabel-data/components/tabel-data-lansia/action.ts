import db from "@/lib/db"

// Function to fetch LayananLansia data
export async function getLayananLansiaData() {
  try {
    const data = await db.layananLansia.findMany({
      include: {
        warga: true, // Assuming 'Warga' is related and needed
      },
    })
    return data
  } catch (error) {
    console.error("Error fetching LayananLansia data:", error)
    return []
  } finally {
    await db.$disconnect() // Ensure to disconnect after query
  }
}
