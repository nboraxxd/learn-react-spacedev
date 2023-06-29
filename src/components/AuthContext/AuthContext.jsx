import { notification } from '@/utils/message'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PATH } from '../../config/path'
import { authenticationService } from '../../services/authentication.service'
import { userService } from '../../services/user.service'
import { clearToken, clearUser, getUser, setToken, setUser } from '../../utils/token'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  // const [render, renderCount] = useState(0)
  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     renderCount((render) => render + 1)
  //   }, 100)
  //   return () => {
  //     clearInterval(timerId)
  //   }
  // }, [])

  const [user, _setUser] = useState(getUser)
  const navigate = useNavigate()
  const { state } = useLocation()

  useEffect(() => {
    setUser(user || null)
  }, [user])

  const signIn = useCallback(async (data) => {
    try {
      const res = await authenticationService.signIn(data)
      if (res.data) {
        setToken(res.data)
        await getProfile()
      }
    } catch (err) {
      console.error(err)
      if (err?.response?.data?.message) {
        notification.error(err.response.data.message)
      }
    }
  }, [])

  const getProfile = useCallback(async () => {
    const user = await userService.getProfile()
    _setUser(user.data)
    notification.success('Đăng nhập tài khoản thành công')
    if (state?.redirect) {
      navigate(state.redirect)
    } else {
      navigate(PATH.home)
    }
  }, [])

  const logOut = useCallback(() => {
    _setUser(null)
    clearToken()
    clearUser()
    notification.success('Đăng xuất tài khoản thành công', 5)
  }, [])

  const value = useMemo(() => {
    return { user, signIn, logOut, setUser: _setUser, getProfile }
  }, [user, signIn, logOut, _setUser, getProfile])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
