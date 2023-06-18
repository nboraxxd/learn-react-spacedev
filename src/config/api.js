import axios from 'axios'

export const COURSE_API = import.meta.env.VITE_COURSE_API
export const ORGANIZATION_API = import.meta.env.VITE_ORGANIZATION_API
export const USER_API = import.meta.env.VITE_USER_API
export const AUTHENTICATION_API = import.meta.env.VITE_AUTHENTICATION_API

export const api = axios.create()
api.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    throw error
  }
)
