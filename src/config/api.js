import { authenticationService } from '@/services/authentication.service'
import axios from 'axios'
import { getToken, setToken } from '../utils/token'

export const COURSE_API = import.meta.env.VITE_COURSE_API
export const ORGANIZATION_API = import.meta.env.VITE_ORGANIZATION_API
export const USER_API = import.meta.env.VITE_USER_API
export const AUTHENTICATION_API = import.meta.env.VITE_AUTHENTICATION_API

export const api = axios.create()
api.interceptors.response.use(
  (res) => {
    return res.data
  },
  async (error) => {
    try {
      if (error.response.status === 403 && error.response.data.error_code === 'TOKEN_EXPIRED') {
        const token = getToken()
        const res = await authenticationService.refeshToken({
          refreshToken: token.refreshToken,
        })
        setToken(res.data)

        return api(error.config)
      }
    } catch (error) {
      console.log(error)
    }

    throw error
  }
)

api.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers['Authorization'] = `Bearer ${token.accessToken}`
  }

  return config
})
