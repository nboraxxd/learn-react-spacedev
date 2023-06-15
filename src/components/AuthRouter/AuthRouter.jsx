import React from 'react'
import { Navigate, Outlet } from 'react-router'

export const AuthRouter = ({ user, redirect = '/' }) => {
  if (user)
    return (
      <div className="h-[560px]">
      <Navigate to={redirect} />
      </div>
    )

  return <Outlet />
}
