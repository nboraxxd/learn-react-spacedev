import { userSelector } from '@/stores/selectors'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

export const PrivateRouter = ({ redirect = '/' }) => {
  const user = useSelector(userSelector)

  if (!user) return <Navigate to={redirect} />

  return <Outlet />
}
