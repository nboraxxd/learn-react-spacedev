import { userSelector } from '@/stores/selectors'
import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { avatarDefault } from '../config'
import { PATH } from '../config/path'

const ProfileLayout = () => {
  const user = useSelector(userSelector)

  return (
    <main id="main" className="profile">
      <section>
        <div className="top-info">
          <div className="avatar">
            {/* <span class="text">H</span> */}
            <img src={user.avatar ? user.avatar : avatarDefault} alt="" />
            <div className="camera" />
          </div>
          <div className="name">{user.name}</div>
          <p className="des">Thành viên của spacedev từ ngày 20 tháng 10 năm 2022</p>
        </div>
        <div className="container">
          <div className="tab">
            <div className="tab-title">
              <NavLink end to={PATH.profile.index}>
                Thông tin tài khoản
              </NavLink>
              <NavLink to={PATH.profile.course}>Khóa học của bạn</NavLink>
              <NavLink to={PATH.profile.project}>Dự án đã làm</NavLink>
              <NavLink to={PATH.profile.payment}>Lịch sử thanh toán</NavLink>
              <NavLink to={PATH.profile.coin}>Quản lý COIN của tôi</NavLink>
              <NavLink to={PATH.profile.history}>Khóa học đã xem</NavLink>
            </div>
            <div className="tab-content">
              <Suspense fallback={<div>Profile loading...</div>}>
                <Outlet />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProfileLayout
