import React, { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { avatarDefault } from '../../config'
import { PATH } from '../../config/path'
import { useAuth } from '../AuthContext'

export const Header = () => {
  const { pathname } = useLocation()
  const { user, logOut } = useAuth()

  function onToggleMenu() {
    document.body.classList.toggle('menu-is-show')
  }

  function onCloseMenu() {
    document.body.classList.remove('menu-is-show')
  }

  function _logout(e) {
    e.preventDefault()

    logOut()
  }

  useEffect(() => {
    onCloseMenu()
  }, [pathname])

  return (
    <>
      <header id="header">
        <div className="wrap">
          <div className="menu-hamburger" onClick={onToggleMenu}>
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">menu</span>
          </div>
          <Link to="/" className="logo">
            <img src="/img/logo.svg" alt="Spacedev" />
            <h1>Spacedev</h1>
          </Link>
          <div className="right">
            {user ? (
              <div className="have-login">
                <div className="account">
                  <Link to={PATH.profile.index} className="info">
                    <div className="name">{user.name}</div>
                    <div className="avatar">
                      <img src={user.avatar ? user.avatar : avatarDefault} alt="" />
                    </div>
                  </Link>
                </div>
                <div className="hamburger"></div>
                <div className="sub">
                  <Link to={PATH.profile.course}>Khoá học của tôi</Link>
                  <Link to={PATH.profile.index}>Thông tin tài khoản</Link>
                  <a href="#" onClick={_logout}>
                    Đăng xuất
                  </a>
                </div>
              </div>
            ) : (
              <div className="not-login bg-none">
                <Link to={PATH.signIn} className="btn-register">
                  Đăng nhập
                </Link>
                <Link to={PATH.signUp} className="btn main btn-open-login">
                  Đăng ký
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="progress" />
      </header>
      <nav className="nav">
        <ul>
          {/* <li>
            <a href="./sign-in.html">Đăng ký/Đăng nhập</a>
          </li> */}
          <li>
            <NavLink to={PATH.profile.index} className="account">
              <div className="avatar">
                <img src="/img/avt.png" alt="" />
              </div>
              <div className="name">Đặng Thuyền Vương</div>
            </NavLink>
          </li>
          <li>
            <NavLink to={PATH.home}>Trang chủ</NavLink>
          </li>
          <li>
            <NavLink to={PATH.team}>Spacedev Team</NavLink>
          </li>
          <li>
            <NavLink to={PATH.courses}>Khoá Học</NavLink>
          </li>
          <li>
            <NavLink to={PATH.project}>Dự Án</NavLink>
          </li>
          <li>
            <NavLink to={PATH.contact}>Liên hệ</NavLink>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav" onClick={onCloseMenu} />
    </>
  )
}
