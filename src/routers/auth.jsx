import React from 'react'
import { AuthRouter } from '../components/AuthRouter/AuthRouter'
import { PATH } from '../config/path'
import { ResetPassword, SignIn, SignUp } from '../pages'

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
