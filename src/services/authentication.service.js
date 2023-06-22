import { api, AUTHENTICATION_API } from '../config/api'

export const authenticationService = {
  signIn(data) {
    return api.post(`${AUTHENTICATION_API}/login`, data)
  },

  refeshToken(data) {
    return api.post(`${AUTHENTICATION_API}/refresh-token`, data)
  },
}
