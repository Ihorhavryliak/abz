import generalConst from '@/constants/generalConst'
import axios from 'axios'
const URL_API = process.env.NEXT_PUBLIC_URL_API || generalConst.URL_API

export const api = axios.create({
  baseURL: URL_API,
})
