import { PATH } from '@/config/path'
import React from 'react'
import { Link } from 'react-router-dom'

export const Page404 = ({ children }) => {
  console.log('🥴 ~ Page404 ~ children:', children)
  return (
    <main id="main">
      <div className="notfound">
        <div className="container">
          <section>
            <h2 className="main-title">404</h2>
            <p>{children || 'Không tìm thấy trang'}</p>
            <Link to={PATH.home} className="btn main round">
              Trang chủ
            </Link>
          </section>
        </div>
      </div>
    </main>
  )
}
