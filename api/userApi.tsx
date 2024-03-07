import { api } from './api'

export const userApi = {
  async get(page: number, count: number) {
    const response = await api.get<UsersType[]>(`users?page=${page}&count=${count}`)
    return response.data
  },
  async getToken() {
    const response = await api.get<TokenType>('token')
    return response.data
  },
}

export type TokenType = {
  success?: boolean
  token?: string
}

export type UsersType = {
  success?: boolean
  total_pages?: number
  total_users?: number
  count?: number
  page?: number
  links?: Links
  users?: User[]
}

export type Links = {
  next_url?: string
  prev_url?: null
}

export type User = {
  id?: number
  name?: string
  email?: string
  phone?: string
  position?: string
  position_id?: number
  registration_timestamp?: number
  photo?: string
}
