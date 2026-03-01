import Search from './components/Search'
import ResultCard from './components/ResultCard'

export default function Home() {
  // placeholder data; real data will be fetched client-side
  const sample = {
    current: { temp: 18, desc: 'Partly cloudy', icon: '⛅' },
    forecast: [
      { day: 'Mon', temp: 17, desc: 'Rain showers', icon: '🌧️' },
      { day: 'Tue', temp: 19, desc: 'Sunny', icon: '☀️' },
      { day: 'Wed', temp: 16, desc: 'Cloudy', icon: '☁️' }
    ]
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Weather — Beautifully presented</h1>
          <p className="text-slate-300 max-w-xl">Fast, accurate weather with a clean, client-ready design. Search any city and get live conditions plus a short forecast.</p>
        </header>

        <section className="mb-8">
          <Search />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-gradient-to-b from-slate-800/60 to-slate-700/40 p-6 rounded-3xl border border-white/6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-sm text-slate-300">Current location</div>
                <div className="text-3xl font-bold">San Francisco</div>
              </div>
              <div className="text-right">
                <div className="text-6xl">{sample.current.icon}</div>
                <div className="text-lg font-semibold">{sample.current.temp}°C</div>
                <div className="text-sm text-slate-400">{sample.current.desc}</div>
              </div>
            </div>

            <div className="space-y-3">
              {sample.forecast.map((f) => (
                <ResultCard key={f.day} day={f.day} temp={f.temp} icon={f.icon} description={f.desc} />
              ))}
            </div>
          </div>

          <aside className="bg-slate-800/40 p-6 rounded-3xl border border-white/6">
            <h3 className="text-lg font-semibold mb-3">Quick facts</h3>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>Humidity: 72%</li>
              <li>Wind: 8 km/h</li>
              <li>Sunrise: 07:12</li>
              <li>Sunset: 18:25</li>
            </ul>
          </aside>
        </section>

        <footer className="mt-12 text-center text-slate-400">
          Built with ❤️ · Open‑Meteo · Tailwind
        </footer>
      </div>
    </main>
  )
}
