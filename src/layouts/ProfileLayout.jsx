import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../components/AuthContext'
import { avatarDefault } from '../config'
import { PATH } from '../config/path'

export const ProfileLayout = () => {
  const { user } = useAuth()

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
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
