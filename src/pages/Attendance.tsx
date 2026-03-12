import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { ATTENDANCE_BY_USER } from '../data/mockData'
import { TrendingUp, ChevronDown, ChevronUp, Calendar } from 'lucide-react'
import type { AttendanceRecord } from '../types'

const MONTH_NAMES = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']

function MiniCalendar({ record }: { record: AttendanceRecord }) {
  const visitSet = new Set(record.visitDates)
  const year = record.year
  const month = record.monthNum - 1
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startPadding = (firstDay.getDay() + 6) % 7
  const daysInMonth = lastDay.getDate()

  const weeks: (number | null)[][] = []
  let week: (number | null)[] = []
  for (let i = 0; i < startPadding; i++) week.push(null)
  for (let d = 1; d <= daysInMonth; d++) {
    week.push(d)
    if (week.length === 7) {
      weeks.push(week)
      week = []
    }
  }
  if (week.length) {
    while (week.length < 7) week.push(null)
    weeks.push(week)
  }

  return (
    <div className="mt-4">
      <div className="grid grid-cols-7 gap-0.5 text-center text-xs">
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(d => (
          <div key={d} className="text-gray-500 font-medium py-1">
            {d}
          </div>
        ))}
        {weeks.flat().map((d, i) => {
          if (d === null) return <div key={i} />
          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
          const visited = visitSet.has(dateStr)
          return (
            <div
              key={i}
              className={`aspect-square flex items-center justify-center rounded-full ${
                visited ? 'bg-primary-600 text-white font-semibold' : 'text-gray-400'
              }`}
            >
              {d}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function formatVisitDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', weekday: 'short' })
}

function MonthCard({ record }: { record: AttendanceRecord }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 active:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
            <Calendar className="text-primary-600" size={20} />
          </div>
          <div>
            <span className="font-semibold text-gray-900">{record.month}</span>
            <span className="text-gray-500 ml-1">{record.year}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-primary-600 font-bold">{record.visits}</span>
          {expanded ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
        </div>
      </button>
      {expanded && (
        <div className="px-4 pb-4 border-t border-gray-100 pt-3">
          <MiniCalendar record={record} />
          <div className="mt-4 pt-3 border-t border-gray-100">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Даты посещений</p>
            <ul className="space-y-1.5">
              {record.visitDates.sort().map(dateStr => (
                <li key={dateStr} className="text-sm text-gray-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                  {formatVisitDate(dateStr)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export function Attendance() {
  const { user } = useAuth()
  const records = user ? ATTENDANCE_BY_USER[user.login] ?? [] : []
  const total = records.reduce((sum, r) => sum + r.visits, 0)
  const maxVisits = Math.max(...records.map(r => r.visits), 1)

  return (
    <div className="px-4 py-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold text-gray-900 mb-2">Посещаемость</h1>
      <p className="text-gray-600 text-sm mb-6">Ваши посещения по месяцам</p>

      <div className="bg-primary-600 rounded-2xl p-6 text-white mb-6">
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp size={24} />
          <span className="font-semibold">{records[0]?.year ?? 2026} год</span>
        </div>
        <p className="text-3xl font-bold">{total}</p>
        <p className="text-primary-200 text-sm">всего посещений</p>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
        <p className="text-sm font-medium text-gray-700 mb-4">Динамика по месяцам</p>
        <div className="flex items-end gap-3 h-28">
          {records.map(r => (
            <div key={`${r.month}-${r.year}`} className="flex-1 flex flex-col items-center justify-end gap-1.5 h-full">
              <span className="text-xs font-bold text-primary-600">{r.visits}</span>
              <div
                className="w-full max-w-[32px] mx-auto rounded-t-lg bg-primary-500 min-h-[4px] transition-all"
                style={{ height: `${(r.visits / maxVisits) * 64}px` }}
              />
              <span className="text-xs text-gray-600 font-medium">{MONTH_NAMES[r.monthNum - 1]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-700">По месяцам</p>
        {records.map(r => (
          <MonthCard key={`${r.month}-${r.year}`} record={r} />
        ))}
      </div>
    </div>
  )
}
