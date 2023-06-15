import React from 'react'

const SignIn = () => {
  return (
    <main id="main">
      <div className="auth">
        <div className="wrap">
          {/* login-form */}
          <div className="ct_login">
            <h2 className="title">Đăng nhập</h2>
            <input type="text" placeholder="Email / Số điện thoại" />
            <input type="password" placeholder="Mật khẩu" />
            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input type="checkbox" />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <a href="./reset-password.html" className="forget">
                Quên mật khẩu?
              </a>
            </div>
            <button className="btn rect main btn-login">đăng nhập</button>
            <div className="text-register">
              <span>Nếu bạn chưa có tài khoản?</span>{' '}
              <a className="link" href="./signup.html">
                Đăng ký
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignIn
