import actionTypes from './actionTypes'
import { authenticationService } from '@/services/authentication.service'
import { userService } from '@/services/user.service'
import { clearToken, clearUser, setToken, setUser } from '@/utils/token'

export const signInAction = (data) => {
  return async (dispatch) => {
    try {
      const res = await authenticationService.signIn(data.form)
      setToken(res.data)

      const user = await userService.getProfile()
      dispatch(setUserAction(user.data))
      setUser(user.data)

      data?.success(user.data)
    } catch (err) {
      data?.error(err)
    } finally {
      data?.finally()
    }
  }
}

export const setUserAction = (data) => ({
  type: actionTypes.SET_USER_ACTION,
  payload: data,
})

export const logoutAction = (data) => {
  return (dispatch) => {
    clearToken()
    clearUser()
    dispatch({ type: actionTypes.LOGOUT_ACTION })
    data?.success()
  }
}
