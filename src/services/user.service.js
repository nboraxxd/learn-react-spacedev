import { api, USER_API } from '../config/api'

export const userService = {
  signUp(data) {
    return api.post(`${USER_API}/register`, data)
  },
}
