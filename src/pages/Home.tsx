import { Megaphone } from 'lucide-react'
import { ANNOUNCEMENTS } from '../data/mockData'

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function Home() {
  return (
    <div className="px-4 py-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold text-gray-900 mb-2">Объявления</h1>
      <p className="text-gray-600 text-sm mb-6">Новости зала</p>

      <div className="space-y-4">
        {ANNOUNCEMENTS.map(a => (
          <article
            key={a.id}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex gap-3">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                <Megaphone className="text-primary-600" size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-semibold text-gray-900 mb-1">{a.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{a.body}</p>
                <time className="text-primary-600 text-xs font-medium mt-2 block">
                  {formatDate(a.date)}
                </time>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
