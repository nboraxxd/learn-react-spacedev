import React from 'react'
import { AuthRouter } from '../components/AuthRouter/AuthRouter'
import { PATH } from '../config/path'
import { ResetPassword, SignIn, SignUp } from '../pages'

export const auth = (user, login) => {
  return {
    element: <AuthRouter user={user} redirect={PATH.home} />,
    children: [
      {
        path: PATH.signIn,
        element: <SignIn login={login} />,
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
}
