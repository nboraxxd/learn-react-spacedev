import React from 'react'
import { Navigate, Outlet } from 'react-router'

export const PrivateRouter = ({ user, redirect = '/' }) => {
  if (!user) return <Navigate to={redirect} />

  return <Outlet />
}
