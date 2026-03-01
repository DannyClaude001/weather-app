export default function ResultCard({ day, temp, icon, description }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/6 rounded-2xl p-4 flex items-center gap-4 shadow-md">
      <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-yellow-400/20 to-red-400/10 rounded-lg">
        <div className="text-2xl">{icon}</div>
      </div>
      <div className="flex-1">
        <div className="text-sm font-medium text-slate-200">{day}</div>
        <div className="text-xs text-slate-400">{description}</div>
      </div>
      <div className="text-right">
        <div className="text-xl font-semibold text-slate-100">{temp}°</div>
      </div>
    </div>
  )
}
