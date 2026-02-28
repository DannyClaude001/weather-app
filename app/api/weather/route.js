export async function GET(req){
  const { searchParams } = new URL(req.url)
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')
  if(!lat||!lon) return new Response('Missing', { status:400 })
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
  const r = await fetch(url)
  const data = await r.json()
  return new Response(JSON.stringify(data), { headers: { 'Content-Type':'application/json' }})
}
