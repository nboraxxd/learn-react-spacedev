import React from 'react'

const ResetPassword = () => {
  return (
    <main id="main">
      <div className="auth">
        <div className="wrap">
          <h2 className="title">Đặt lại mật khẩu</h2>
          <input type="text" placeholder="Email" />
          <button className="btn rect main">Đặt lại mật khẩu</button>
        </div>
        <div className="wrap">
          <h2 className="title">Đặt lại mật khẩu</h2>
          <input type="password" placeholder="Mật khẩu " />
          <input type="password" placeholder="Nhập lại mật khẩu" />
          <button className="btn rect main">Đặt lại mật khẩu</button>
        </div>
      </div>
    </main>
  )
}

export default ResetPassword
