import { Clock, CreditCard, LogOut, Mail, MapPin, Phone, User } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { CONTACTS, MEMBERSHIP_BY_USER } from '@/data/mockData'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function Settings() {
  const { user, logout } = useAuth()
  const membership = user ? MEMBERSHIP_BY_USER[user.login] : null
  if (!membership) return null

  return (
    <div className="px-4 py-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold text-gray-900 mb-2">Настройки</h1>
      <p className="text-gray-600 text-sm mb-6">Управление аккаунтом</p>
      <div className="space-y-4">

      <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard size={24} />
          <span className="font-semibold">JimGym</span>
        </div>
        <p className="text-2xl font-bold mb-1">{membership.type}</p>
        <p className="text-primary-200 text-sm">Действует до {formatDate(membership.expiresAt)}</p>
      </div>

        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(CONTACTS.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
            <MapPin className="text-primary-600" size={24} />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Адрес</p>
            <p className="text-gray-600">{CONTACTS.address}</p>
          </div>
        </a>

        <a
          href={`tel:${CONTACTS.phone.replace(/\D/g, '')}`}
          className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
            <Phone className="text-primary-600" size={24} />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Телефон</p>
            <p className="text-gray-600">{CONTACTS.phone}</p>
          </div>
        </a>

        <a
          href={`mailto:${CONTACTS.email}`}
          className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
            <Mail className="text-primary-600" size={24} />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Email</p>
            <p className="text-gray-600">{CONTACTS.email}</p>
          </div>
        </a>

        <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
            <Clock className="text-primary-600" size={24} />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Часы работы</p>
            <p className="text-gray-600">{CONTACTS.hours}</p>
          </div>
        </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
            <User className="text-primary-600" size={28} />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{user?.name ?? user?.login}</p>
            <p className="text-gray-500 text-sm">@{user?.login}</p>
          </div>
        </div>

        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 py-4 text-red-600 font-medium hover:bg-red-50 active:bg-red-100 transition-colors border-t border-gray-100"
          >
          <LogOut size={20} />
          Выйти
        </button>
      </div>
          </div>
    </div>
  )
}
