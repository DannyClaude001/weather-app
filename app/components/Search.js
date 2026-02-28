'use client'
import { useState } from 'react'
import useSWR from 'swr'
const fetcher = (url)=> fetch(url).then(r=>r.json())
export default function Search(){
  const [q,setQ]=useState('')
  const [coords,setCoords]=useState(null)
  const {data:weather}=useSWR(coords?`/api/weather?lat=${coords.lat}&lon=${coords.lon}`:null,fetcher)
  const onSearch=async(e)=>{
    e.preventDefault()
    if(!q) return
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=5`)
    const json = await res.json()
    if(json && json.results && json.results[0]){
      const r = json.results[0]
      setCoords({lat:r.latitude,lon:r.longitude, name:r.name})
    }
  }
  return (
    <div>
      <form onSubmit={onSearch} className="mb-4 flex gap-2">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search city" className="flex-1 p-2 border rounded" />
        <button className="bg-sky-600 text-white px-4 rounded">Search</button>
      </form>
      {coords && <div className="mb-4">Location: {coords.name} ({coords.lat.toFixed(2)}, {coords.lon.toFixed(2)})</div>}
      {weather && (
        <div className="bg-white p-4 rounded shadow">
          <div className="text-xl font-semibold">Current: {weather.current_weather.temperature}°C</div>
          <div>Wind: {weather.current_weather.windspeed} km/h</div>
          <div className="mt-2">Forecast (next days):</div>
          <ul className="mt-2 list-disc list-inside">
            {weather.daily.time.map((t,i)=> (
              <li key={t}>{t}: {weather.daily.temperature_2m_max[i]}° / {weather.daily.temperature_2m_min[i]}°</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
