import { getUser } from '@/utils/token'
import actionTypes from './actionTypes'

const INITIAL_STATE = {
  user: getUser(),
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_ACTION:
      return { ...state, user: action.payload }

    case actionTypes.LOGOUT_ACTION:
      return { ...state, user: null }

    default:
      return state
  }
}

export default authReducer
