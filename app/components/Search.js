import { useState } from 'react'

export default function Search() {
  const [q, setQ] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    // simple client-side fetch; real implementation should handle errors/loading
    if (!q) return
    fetch(`/api/weather?q=${encodeURIComponent(q)}`)
      .then((r) => r.json())
      .then((data) => {
        console.log('weather', data)
        alert('Search complete — open console for data (demo)')
      })
      .catch((err) => {
        console.error(err)
        alert('Failed to fetch weather — check console')
      })
  }

  return (
    <form onSubmit={onSubmit} className="max-w-2xl">
      <label className="sr-only">Search city</label>
      <div className="flex gap-2 items-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="flex-1 bg-white/5 border border-white/6 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Search city — e.g., Amsterdam"
        />
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl font-semibold">Search</button>
      </div>
    </form>
  )
}
