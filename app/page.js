import dynamic from 'next/dynamic'
import Search from './components/Search'
export default function Home() {
  return (
    <main className="min-h-screen bg-sky-50 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Weather App</h1>
        <Search />
      </div>
    </main>
  )
}
