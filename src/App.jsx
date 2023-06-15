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

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
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
          <Route path={PATH.signIn} element={<SignIn />} />
          <Route path={PATH.signUp} element={<SignUp />} />
          <Route path={PATH.resetPassword} element={<ResetPassword />} />

          <Route path={PATH.profile.index} element={<ProfileLayout />}>
            <Route index element={<MyInfo />} />
            <Route path={PATH.profile.course} element={<MyCourse />} />
            <Route path={PATH.profile.project} element={<MyProject />} />
            <Route path={PATH.profile.payment} element={<MyPayment />} />
            <Route path={PATH.profile.coin} element={<MyCoin />} />
            <Route path={PATH.profile.history} element={<MyHistory />} />
          </Route>

          <Route path={PATH.error404} element={<Page404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
