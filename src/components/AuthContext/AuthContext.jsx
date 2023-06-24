import { notification } from '@/utils/message'
import { message } from 'antd'
import { createContext, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PATH } from '../../config/path'
import { authenticationService } from '../../services/authentication.service'
import { userService } from '../../services/user.service'
import { clearToken, clearUser, getUser, setToken, setUser } from '../../utils/token'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, _setUser] = useState(getUser)
  const navigate = useNavigate()
  const { state } = useLocation()

  useEffect(() => {
    setUser(user || null)
  }, [user])

  const signIn = async (data) => {
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
  }

  const getProfile = async () => {
    const user = await userService.getProfile()
    _setUser(user.data)
    notification.success('Đăng nhập tài khoản thành công')
    if (state?.redirect) {
      navigate(state.redirect)
    } else {
      navigate(PATH.home)
    }
  }

  const logOut = () => {
    _setUser(null)
    clearToken()
    clearUser()
    notification.success('Đăng xuất tài khoản thành công', 5)
  }

  return (
    <AuthContext.Provider value={{ user, signIn, logOut, setUser: _setUser, getProfile }}>
      {children}
    </AuthContext.Provider>
  )
}
