import { api } from '../config/api'

export const authenticationService = {
  signIn(data) {
    return api.post(`${AUTHENTICATION_API}/login`, data)
  },
}
