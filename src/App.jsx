import { Route, Routes } from 'react-router-dom'

import { MainLayout, ProfileLayout } from './layouts'
import {
  Coin,
  Contact,
  FAQ,
  HomePage,
  Page404,
  Payment,
  Project,
  ResetPassword,
  SignIn,
  SignUp,
  Team,
} from './pages'
import { MyCoin, MyCourse, MyHistory, MyInfo, MyPayment, MyProject } from './pages/profile'
import { PATH } from './config/path'
import './assets/css/tailwind.css'
import { CourseDetail, Courses } from './pages/course'
import { Register } from './pages/register'
import { useEffect, useState } from 'react'
import { PrivateRouter } from './components/PrivateRouter'
import { AuthRouter } from './components/AuthRouter/AuthRouter'

function App() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user'))
    } catch (error) {
      return null
    }
  })
  const login = (username) => {
    setUser({
      username,
      avatar: '/img/avt.png',
    })
  }

  const logout = () => {
    setUser()
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <>
      <Routes>
        <Route element={<MainLayout user={user} logout={logout} />}>
          <Route index element={<HomePage />} />
          <Route path={PATH.contact} element={<Contact />} />

          <Route path={PATH.courses}>
            <Route index element={<Courses />} />
            <Route path={PATH.courseDetail} element={<CourseDetail />} />
          </Route>

          <Route path={PATH.courseRegister} element={<Register />} />
          <Route path={PATH.team} element={<Team />} />
          <Route path={PATH.project} element={<Project />} />
          <Route path={PATH.faq} element={<FAQ />} />
          <Route path={PATH.payment} element={<Payment />} />
          <Route path={PATH.coin} element={<Coin />} />

          <Route element={<AuthRouter user={user} redirect={PATH.home} />}>
            <Route path={PATH.signIn} element={<SignIn login={login} />} />
            <Route path={PATH.signUp} element={<SignUp />} />
            <Route path={PATH.resetPassword} element={<ResetPassword />} />
          </Route>

          <Route element={<PrivateRouter user={user} redirect={PATH.signIn} />}>
            <Route path={PATH.profile.index} element={<ProfileLayout />}>
              <Route index element={<MyInfo />} />
              <Route path={PATH.profile.course} element={<MyCourse />} />
              <Route path={PATH.profile.project} element={<MyProject />} />
              <Route path={PATH.profile.payment} element={<MyPayment />} />
              <Route path={PATH.profile.coin} element={<MyCoin />} />
              <Route path={PATH.profile.history} element={<MyHistory />} />
            </Route>
          </Route>

          <Route path={PATH.error404} element={<Page404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
