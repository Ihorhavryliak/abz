import { api } from './api'

export const userApi = {
  async get(page: number, count: number) {
    const responseOne = await api.get<UsersType>(`users?page=${page}&count=${count}`)
    return responseOne.data
  },
  async getToken() {
    const response = await api.get<GetTokenResponseType>('token')
    return response.data
  },
  async getPositions() {
    const response = await api.get<ApiPositionType>('positions')
    return response.data
  },
  async create(data: DataUserCreateType, token?: string) {
    const headers = token ? { Token: `${token}` } : {}
    const formData = new FormData()

    // Append other data to the FormData
    Object.keys(data).forEach((key) => {
      if (key !== 'photo') {
        const validKey = key as keyof DataUserCreateType
        const value = data[validKey]
        if (value !== undefined) {
          formData.append(validKey, String(value)) // Convert values to string if necessary
        }
      }
    })

    // Append photo file to the FormData
    const photoFiles = data.photo
    if (photoFiles && photoFiles.length > 0) {
      formData.append('photo', photoFiles[0]) // Assuming you want to send only the first file
    }

    try {
      const response = await api.post<ApiPositionType>('users', formData, { headers })
      return response.data
    } catch (error) {
      console.error('Error creating user:', error)
      throw error
    }
  },
}

type DataUserCreateType = {
  name: string
  email: string
  phone: string
  position_id: string
  photo: FileList
}

export type ApiPositionType = {
  success?: boolean
  positions?: PositionType[]
}

export type PositionType = {
  id?: number
  name?: string
}

export type GetTokenResponseType = {
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
