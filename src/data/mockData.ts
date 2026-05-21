import type { User, Announcement, AttendanceRecord } from '../types'

export const USERS: User[] = [
  { login: 'arinaUsikova', password: 'gym123', name: 'Arina Usikova' },
  { login: 'dashaShulyakovskaya', password: 'gym123', name: 'Dasha Shulyakovskaya' },
]

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: '4',
    title: 'Поздравляем с 8 Марта! Скидка для женщин 15%',
    body: 'В честь Международного женского дня — скидка 15% на месячный абонемент для всех женщин до 25 марта.',
    date: '2026-03-01',
  },
  {
    id: '1',
    title: 'Обновление расписания групповых занятий с 15 марта',
    body: 'С 15 марта вступает в силу новое расписание групповых занятий. Проверьте раздел «Расписание» для актуальной информации.',
    date: '2026-03-10',
  },
  {
    id: '2',
    title: 'Технический перерыв в душевой 12–13 марта',
    body: '12 и 13 марта будет проводиться профилактика душевой. Просим учитывать это при планировании визитов.',
    date: '2026-03-09',
  },
  {
    id: '3',
    title: 'Акция: приведёшь друга — получи скидку 10%',
    body: 'Приведите друга в Gym Space и получите скидку 10% на следующий месяц абонемента!',
    date: '2026-03-05',
  },
]

export const ATTENDANCE_BY_USER: Record<string, AttendanceRecord[]> = {
  arinaUsikova: [
    {
      month: 'Январь',
      monthNum: 1,
      year: 2026,
      visits: 9,
      visitDates: ['2026-01-04', '2026-01-08', '2026-01-11', '2026-01-15', '2026-01-18', '2026-01-22', '2026-01-25', '2026-01-27', '2026-01-29'],
    },
    {
      month: 'Февраль',
      monthNum: 2,
      year: 2026,
      visits: 8,
      visitDates: ['2026-02-03', '2026-02-07', '2026-02-10', '2026-02-14', '2026-02-17', '2026-02-22', '2026-02-26', '2026-02-28'],
    },
    {
      month: 'Март',
      monthNum: 3,
      year: 2026,
      visits: 9,
      visitDates: ['2026-03-02', '2026-03-05', '2026-03-09', '2026-03-14', '2026-03-18', '2026-03-20', '2026-03-23', '2026-03-25', '2026-03-28'],
    },
    {
      month: 'Апрель',
      monthNum: 4,
      year: 2026,
      visits: 8,
      visitDates: ['2026-04-03', '2026-04-07', '2026-04-11', '2026-04-14', '2026-04-18', '2026-04-21', '2026-04-25', '2026-04-29'],
    },
    {
      month: 'Май',
      monthNum: 5,
      year: 2026,
      visits: 9,
      visitDates: ['2026-05-04', '2026-05-08', '2026-05-10', '2026-05-12', '2026-05-14', '2026-05-16', '2026-05-18', '2026-05-20', '2026-05-21'],
    },
  ],
  dashaShulyakovskaya: [
    {
      month: 'Январь',
      monthNum: 1,
      year: 2026,
      visits: 8,
      visitDates: ['2026-01-03', '2026-01-10', '2026-01-13', '2026-01-17', '2026-01-20', '2026-01-24', '2026-01-27', '2026-01-31'],
    },
    {
      month: 'Февраль',
      monthNum: 2,
      year: 2026,
      visits: 9,
      visitDates: ['2026-02-01', '2026-02-05', '2026-02-08', '2026-02-12', '2026-02-15', '2026-02-19', '2026-02-22', '2026-02-26', '2026-02-28'],
    },
    {
      month: 'Март',
      monthNum: 3,
      year: 2026,
      visits: 8,
      visitDates: ['2026-03-01', '2026-03-04', '2026-03-08', '2026-03-13', '2026-03-15', '2026-03-19', '2026-03-22', '2026-03-26'],
    },
    {
      month: 'Апрель',
      monthNum: 4,
      year: 2026,
      visits: 9,
      visitDates: ['2026-04-02', '2026-04-06', '2026-04-10', '2026-04-14', '2026-04-18', '2026-04-22', '2026-04-24', '2026-04-28', '2026-04-30'],
    },
    {
      month: 'Май',
      monthNum: 5,
      year: 2026,
      visits: 8,
      visitDates: ['2026-05-03', '2026-05-07', '2026-05-11', '2026-05-13', '2026-05-15', '2026-05-17', '2026-05-19', '2026-05-21'],
    },
  ],
}

export interface ScheduleItem {
  day: string
  time: string
  name: string
}

export const SCHEDULE: ScheduleItem[] = [
  { day: 'Понедельник', time: '09:00', name: 'Йога' },
  { day: 'Понедельник', time: '18:00', name: 'Фитнес' },
  { day: 'Вторник', time: '10:00', name: 'Пилатес' },
  { day: 'Вторник', time: '19:00', name: 'Степ-аэробика' },
  { day: 'Среда', time: '09:00', name: 'Стретчинг' },
  { day: 'Среда', time: '18:00', name: 'Силовые' },
  { day: 'Четверг', time: '10:00', name: 'Йога' },
  { day: 'Четверг', time: '19:00', name: 'Танцы' },
  { day: 'Пятница', time: '09:00', name: 'Фитнес' },
  { day: 'Пятница', time: '18:00', name: 'Йога' },
]

export const CONTACTS = {
  address: 'г. Москва, ул. Спортивная, д. 15',
  phone: '+7 (495) 123-45-67',
  email: 'krasnogorsk@gym-space.ru',
  hours: 'Пн–Вс: 07:00 — 23:00',
}

export interface MembershipInfo {
  type: string
  expiresAt: string
}

export const MEMBERSHIP_BY_USER: Record<string, MembershipInfo> = {
  arinaUsikova: { type: 'Безлимитный', expiresAt: '2026-04-15' },
  dashaShulyakovskaya: { type: 'Дневной (до 18:00)', expiresAt: '2026-03-28' },
}
