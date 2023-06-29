// import {
//   Coin,
//   Contact,
//   Demo,
//   DemoRef,
//   FAQ,
//   HomePage,
//   Page404,
//   Payment,
//   Project,
//   Team,
// } from '@/pages'
// import { Register } from '../pages/register'
import { Debounce, Memo, Transition } from '@/pages'
import { lazy } from 'react'
import { PATH } from '../config/path'
import { auth } from './auth'
import { courses } from './courses'
import { profile } from './profile'

const MainLayout = lazy(() => import('@/layouts/MainLayout'))
const HomePage = lazy(() => import('@/pages/home'))
const Demo = lazy(() => import('@/pages/demo'))
const DemoRef = lazy(() => import('@/pages/demo-ref'))
const Contact = lazy(() => import('@/pages/contact'))
const Register = lazy(() => import('@/pages/register/[slug]-id[id]'))
const Team = lazy(() => import('@/pages/team'))
const Project = lazy(() => import('@/pages/project'))
const FAQ = lazy(() => import('@/pages/faq'))
const Payment = lazy(() => import('@/pages/payment'))
const Coin = lazy(() => import('@/pages/coin'))
const Page404 = lazy(() => import('@/pages/404'))

export const routers = [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      { path: '/demo', element: <Demo /> },

      { path: '/demo-ref', element: <DemoRef /> },

      { path: '/debounce', element: <Debounce /> },

      { path: '/transition', element: <Transition /> },

      { path: '/memo', element: <Memo /> },

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

      auth,

      profile,

      {
        path: PATH.error404,
        element: <Page404 />,
      },
    ],
  },
]
