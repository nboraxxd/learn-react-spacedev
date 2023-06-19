import { PATH } from '../config/path'
import { PrivateRouter } from '../components/PrivateRouter'
import { ProfileLayout } from '../layouts'
import { MyCoin, MyCourse, MyHistory, MyInfo, MyPayment, MyProject } from '../pages/profile'

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
