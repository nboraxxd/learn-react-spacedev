import { authenticationService } from '@/services/authentication.service'
import { userService } from '@/services/user.service'
import { handleError } from '@/utils/handleError'
import { getUser, setToken } from '@/utils/token'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
