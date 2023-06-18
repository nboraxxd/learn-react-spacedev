import { PATH } from '../config/path'
import { MainLayout } from '../layouts'
import { Coin, Contact, Demo, FAQ, HomePage, Page404, Payment, Project, Team } from '../pages'
import { Register } from '../pages/register'
import { auth } from './auth'
import { courses } from './courses'
import { profile } from './profile'

export const routers = (user, login, logout) => [
  {
    element: <MainLayout user={user} logout={logout} />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      { path: '/demo', element: <Demo /> },

      {
        path: PATH.contact,
        element: <Contact />,
      },

      courses,

      {
        path: PATH.courseRegister,
        element: <Register />,
      },

      {
        path: PATH.team,
        element: <Team />,
      },

      {
        path: PATH.project,
        element: <Project />,
      },

      {
        path: PATH.faq,
        element: <FAQ />,
      },

      {
        path: PATH.payment,
        element: <Payment />,
      },

      {
        path: PATH.coin,
        element: <Coin />,
      },

      auth(user, login),

      profile(user),

      {
        path: PATH.error404,
        element: <Page404 />,
      },
    ],
  },
]
