import { WargaFormValues } from "./page"

export async function saveDataWarga(data: WargaFormValues) {
  // Call your API or database function here
  console.log("Saving data:", data)

  if (data) {
    return { success: false, error: "Warga ID sudah terdaftar" }
  }

  return { success: true }
}
