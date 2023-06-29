import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Page loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default MainLayout
