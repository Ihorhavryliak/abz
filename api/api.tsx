import generalConst from '@/constants/generalConst'
import storage from '@/utils/storage'
import axios from 'axios'
const URL_API = process.env.NEXT_PUBLIC_URL_API || generalConst.URL_API
const TOKEN = generalConst.TOKEN

const token = storage.getStorage(TOKEN)

export const api = axios.create({
  withCredentials: true,
  baseURL: URL_API,
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
