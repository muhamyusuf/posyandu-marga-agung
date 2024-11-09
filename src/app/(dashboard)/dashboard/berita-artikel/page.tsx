export default function BeritaArtikelPage() {
  return (
    <main className="flex min-h-screen flex-col justify-start">
      <h1 className="text-2xl font-bold">Berita Artikel Page</h1>

      <div className="mt-10">
        <h2 className="font-bold">Tambah Berita & Artikel</h2>
      </div>
      <div className="min-h-screen bg-white p-6">
        {/* Tombol Aksi */}
        <div className="mb-4 flex justify-between">
          <button className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600">
            Hapus Semua Artikel & Berita
          </button>
          <button className="rounded-lg bg-gray-200 px-4 py-2 text-black hover:bg-gray-300">
            Tambah
          </button>
        </div>

        {/* Tabel Artikel */}
        <div className="rounded-lg bg-gray-100 p-4">
          {/* Header Tabel */}
          <div className="grid grid-cols-3 gap-4 py-2 font-semibold">
            <div className="text-center">Urutan</div>
            <div className="text-center">Judul</div>
            <div className="text-center">Aksi</div>
          </div>

          {/* Item Artikel 1 */}
          <div className="grid grid-cols-3 items-center gap-4 border-b py-3">
            <div className="flex flex-col items-center">
              <span>1</span>
              <span className="text-lg">⬇️</span>
            </div>
            <div className="text-center">
              <p>Hamil dapat menyebabkan lingkaran perut melebar 1</p>
            </div>
            <div className="flex justify-center gap-2">
              <button className="rounded-lg bg-gray-200 px-4 py-1 text-black hover:bg-gray-300">
                Edit
              </button>
              <button className="rounded-lg bg-red-500 px-4 py-1 text-white hover:bg-red-600">
                Hapus
              </button>
            </div>
          </div>

          {/* Item Artikel 2 */}
          <div className="grid grid-cols-3 items-center gap-4 border-b py-3">
            <div className="flex flex-col items-center">
              <span className="text-lg">⬆️</span>
              <span>2</span>
              <span className="text-lg">⬇️</span>
            </div>
            <div className="text-center">
              <p>Hamil dapat menyebabkan lingkaran perut melebar 2</p>
            </div>
            <div className="flex justify-center gap-2">
              <button className="rounded-lg bg-gray-200 px-4 py-1 text-black hover:bg-gray-300">
                Edit
              </button>
              <button className="rounded-lg bg-red-500 px-4 py-1 text-white hover:bg-red-600">
                Hapus
              </button>
            </div>
          </div>

          {/* Item Artikel 3 */}
          <div className="grid grid-cols-3 items-center gap-4 py-3">
            <div className="flex flex-col items-center">
              <span className="text-lg">⬆️</span>
              <span>3</span>
            </div>
            <div className="text-center">
              <p>Hamil dapat menyebabkan lingkaran perut melebar 3</p>
            </div>
            <div className="flex justify-center gap-2">
              <button className="rounded-lg bg-gray-200 px-4 py-1 text-black hover:bg-gray-300">
                Edit
              </button>
              <button className="rounded-lg bg-red-500 px-4 py-1 text-white hover:bg-red-600">
                Hapus
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm">Website Posyandu ©2024</div>
      </div>
    </main>
  )
}
