import { userSelector } from '@/stores/selectors'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router'

export const AuthRouter = ({ redirect = '/' }) => {
  const user = useSelector(userSelector)
  const { state } = useLocation()

  if (user && !state?.redirect)
    return (
      <div className="h-[560px]">
        <Navigate to={redirect} />
      </div>
    )

  return <Outlet />
}
