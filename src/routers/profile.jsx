import { lazy } from 'react'
import { PATH } from '../config/path'
import { PrivateRouter } from '../components/PrivateRouter'
// import { ProfileLayout } from '../layouts'
// import { MyCoin, MyCourse, MyHistory, MyInfo, MyPayment, MyProject } from '../pages/profile'

const ProfileLayout = lazy(() => import('@/layouts/ProfileLayout'))
const MyCoin = lazy(() => import('@/pages/profile/coin'))
const MyCourse = lazy(() => import('@/pages/profile/course'))
const MyHistory = lazy(() => import('@/pages/profile/history'))
const MyInfo = lazy(() => import('@/pages/profile/info'))
const MyPayment = lazy(() => import('@/pages/profile/payment'))
const MyProject = lazy(() => import('@/pages/profile/project'))

export const profile = {
  element: <PrivateRouter redirect={PATH.signIn} />,
  children: [
    {
      path: PATH.profile.index,
      element: <ProfileLayout />,
      children: [
        {
          index: true,
          element: <MyInfo />,
        },
        {
          path: PATH.profile.course,
          element: <MyCourse />,
        },
        {
          path: PATH.profile.project,
          element: <MyProject />,
        },
        {
          path: PATH.profile.payment,
          element: <MyPayment />,
        },
        {
          path: PATH.profile.coin,
          element: <MyCoin />,
        },
        {
          path: PATH.profile.history,
          element: <MyHistory />,
        },
      ],
    },
  ],
}
