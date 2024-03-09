import { api } from './api'

export const userApi = {
  async get(page: number, count: number) {
    const responseOne = await api.get<UsersType>(`users?page=${page}&count=${count}`)
    return responseOne.data

  },
  async getToken() {
    /* const response = await api.get<TokenType>('token')
    return response.data */
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
  users?: UserType[]
}

export type Links = {
  next_url?: string
  prev_url?: null
}

export type UserType = {
  id: number
  name?: string
  email?: string
  phone?: string
  position?: string
  position_id?: number
  registration_timestamp: number
  photo?: string
}
