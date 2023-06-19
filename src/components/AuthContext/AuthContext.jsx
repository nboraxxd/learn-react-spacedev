import { message } from 'antd'
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../config/path'
import { authenticationService } from '../../services/authentication.service'
import { userService } from '../../services/user.service'
import { clearToken, clearUser, getUser, setToken, setUser } from '../../utils/token'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, _setUser] = useState(getUser)
  const navigate = useNavigate()

  const signIn = async (data) => {
    try {
      const res = await authenticationService.signIn(data)
      if (res.data) {
        setToken(res.data)
        const user = await userService.getProfile()
        setUser(user.data)
        _setUser(user.data)
        message.success('Đăng nhập tài khoản thành công', 5)
        navigate(PATH.home)
      }
    } catch (err) {
      console.log(err)
      if (err?.response?.data?.message) {
        message.error(err.response.data.message)
      }
    }
  }
  const logOut = () => {
    _setUser(null)
    clearToken()
    clearUser()
    message.success('Đăng xuất tài khoản thành công', 5)
  }

  return <AuthContext.Provider value={{ user, signIn, logOut }}>{children}</AuthContext.Provider>
}