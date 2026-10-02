export default function App() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-sidebar text-white p-4">
        Sidebar
      </aside>

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <button className="bg-primary text-white px-4 py-2 rounded-lg">
            + Add Job
          </button>
        </div>
      </main>
    </div>
  )
}