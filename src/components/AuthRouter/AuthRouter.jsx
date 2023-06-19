import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../AuthContext'

export const AuthRouter = ({ redirect = '/' }) => {
  const { user } = useAuth()

  if (user)
    return (
      <div className="h-[560px]">
        <Navigate to={redirect} />
      </div>
    )

  return <Outlet />
}
