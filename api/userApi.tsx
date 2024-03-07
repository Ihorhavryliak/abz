import { api } from './api'

export const userApi = {
  async get(page: number, count: number) {
    const response = /* await api.get<UsersType[]>(`users?page=${page}&count=${count}`) */ {
      success: true,
      page: 1,
      total_pages: 10,
      total_users: 47,
      count: 5,
      links: {
        next_url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=2&count=5',
        prev_url: null,
      },
      users: [
        {
          id: '30',
          name: 'Angel',
          email: 'angel.williams@example.com',
          phone: '+380496540023',
          position: 'Designer',
          position_id: '4',
          registration_timestamp: 1537777441,
          photo: 'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba13fb3330.jpeg',
        },
        {
          id: '29',
          name: 'Mattie',
          email: 'mattie.lee@example.com',
          phone: '+380204819073',
          position: 'Designer',
          position_id: '4',
          registration_timestamp: 1537691099,
          photo: 'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba1245cc29.jpeg',
        },
        {
          id: '36',
          name: 'Joshua',
          email: 'joshua.dean@example.com',
          phone: '+380542161925',
          position: 'Designer',
          position_id: '4',
          registration_timestamp: 1537661281,
          photo: 'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba1e527036.jpeg',
        },
        {
          id: '37',
          name: 'Lisa',
          email: 'lisa.medina@example.com',
          phone: '+380564753087',
          position: 'Security',
          position_id: '3',
          registration_timestamp: 1537639019,
          photo: 'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba20bd9537.jpeg',
        },
        {
          id: '42',
          name: 'Lorraine',
          email: 'lorraine.morris@example.com',
          phone: '+380945198009',
          position: 'Designer',
          position_id: '4',
          registration_timestamp: 1537629182,
          photo: 'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba293d2f42.jpeg',
        },
      ],
    }
    return response as any
    /* return response.data */
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
  id?: number
  name?: string
  email?: string
  phone?: string
  position?: string
  position_id?: number
  registration_timestamp?: number
  photo?: string
}
