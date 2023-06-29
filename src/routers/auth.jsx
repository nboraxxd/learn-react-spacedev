import React, { lazy } from 'react'
import { AuthRouter } from '../components/AuthRouter/AuthRouter'
import { PATH } from '../config/path'

const SignUp = lazy(() => import('@/pages/signup'))
const SignIn = lazy(() => import('@/pages/signin'))
const ResetPassword = lazy(() => import('@/pages/reset-password'))

export const auth = {
  element: <AuthRouter redirect={PATH.home} />,
  children: [
    {
      path: PATH.signIn,
      element: <SignIn />,
    },
    {
      path: PATH.signUp,
      element: <SignUp />,
    },
    {
      path: PATH.resetPassword,
      element: <ResetPassword />,
    },
  ],
}
