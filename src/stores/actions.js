import actionTypes from './actionTypes'

export const setUserAction = (data) => ({
  type: actionTypes.SET_USER_ACTION,
  payload: data,
})

export const logoutAction = () => ({
  type: actionTypes.LOGOUT_ACTION,
})
