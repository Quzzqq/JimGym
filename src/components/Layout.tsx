import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Home, BarChart3, Settings, Calendar } from 'lucide-react'

const mainNav = [
  { to: '/', icon: Home, label: 'Главная' },
  { to: '/attendance', icon: BarChart3, label: 'Посещаемость' },
  { to: '/schedule', icon: Calendar, label: 'Расписание' },
  { to: '/settings', icon: Settings, label: 'Настройки' },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `flex flex-col items-center gap-0.5 py-2 px-3 min-w-[4rem] rounded-lg transition-colors ${
    isActive ? 'bg-primary-100 text-primary-700' : 'text-gray-600 hover:bg-gray-100'
  }`

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="hidden md:flex bg-white border-b border-gray-200 px-4 py-3 gap-2">
        {mainNav.map(({ to, icon: Icon, label }) => (
          <NavLink key={to} to={to} className={linkClass}>
            <Icon size={20} strokeWidth={2} />
            <span className="text-sm font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>

      <main className="flex-1 pb-20 md:pb-6">
        <Outlet />
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 px-2 safe-area-inset-bottom">
        {mainNav.map(({ to, icon: Icon, label }) => (
          <NavLink key={to} to={to} className={linkClass}>
            <Icon size={22} strokeWidth={2} />
            <span className="text-xs font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
