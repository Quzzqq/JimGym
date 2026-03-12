export interface User {
  login: string
  password: string
  name?: string
}

export interface Announcement {
  id: string
  title: string
  body: string
  date: string
}

export interface AttendanceRecord {
  month: string
  monthNum: number
  year: number
  visits: number
  visitDates: string[]
}
