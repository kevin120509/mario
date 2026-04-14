'use client'

interface StatsCardProps {
  label: string
  value: string | number
  icon: string
  trend?: string
  color?: string
}

export function StatsCard({ label, value, icon, trend, color = 'mosque' }: StatsCardProps) {
  return (
    <div className="bg-white dark:bg-neutral-dark-surface p-5 rounded-xl border border-mosque/10 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-nordic-muted">{label}</p>
        <p className="text-2xl font-bold text-nordic-dark dark:text-white mt-1">{value}</p>
        {trend && <p className="text-[10px] text-mosque font-bold mt-1 uppercase tracking-wider">{trend}</p>}
      </div>
      <div className={`h-10 w-10 rounded-full flex items-center justify-center bg-${color}/10 text-${color}`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
    </div>
  )
}
