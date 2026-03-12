import { SCHEDULE } from '../data/mockData'
import { Calendar } from 'lucide-react'

export function Schedule() {
  const byDay = SCHEDULE.reduce<Record<string, typeof SCHEDULE>>((acc, item) => {
    if (!acc[item.day]) acc[item.day] = []
    acc[item.day].push(item)
    return acc
  }, {})

  return (
    <div className="px-4 py-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold text-gray-900 mb-2">Расписание</h1>
      <p className="text-gray-600 text-sm mb-6">Групповые занятия</p>

      <div className="space-y-6">
        {Object.entries(byDay).map(([day, items]) => (
          <div key={day} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-4 py-3 bg-primary-50 border-b border-primary-100 flex items-center gap-2">
              <Calendar className="text-primary-600" size={18} />
              <span className="font-semibold text-gray-900">{day}</span>
            </div>
            <ul className="divide-y divide-gray-100">
              {items.map((s, i) => (
                <li key={`${day}-${i}`} className="flex items-center gap-4 px-4 py-3">
                  <span className="text-primary-600 font-mono text-sm shrink-0">{s.time}</span>
                  <span className="font-medium text-gray-900">{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
