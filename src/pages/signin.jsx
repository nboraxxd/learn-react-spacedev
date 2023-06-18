import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { PATH } from '../config/path'
import { useForm } from '../hooks/useForm'
import { regexp, required } from '../utils/validate'

export const SignIn = ({ login }) => {
  const navigate = useNavigate()
  const { values, validate, register, errors } = useForm({
    username: [
      required('Please enter your email address'),
      regexp('username', 'Your email address is not correct'),
    ],

    password: [
      required('Please enter your password'),
      regexp('password', 'Your password is not correct'),
    ],
  })

  function onSubmit(event) {
    event.preventDefault()

    if (validate()) {
      console.log(values)
      login(values.username)
      // navigate(PATH.home)
    } else {
      console.log('Validate error')
    }
  }

  return (
    <main id="main">
      <div className="auth">
        <div className="wrap">
          {/* login-form */}
          <form className="ct_login" onSubmit={onSubmit}>
            <h2 className="title">Đăng nhập</h2>
            <div className="relative mb-[30px]">
              <input type="text" placeholder="Email" {...register('username')} />
              {errors.name && (
                <span className="absolute top-full left-0 text-red-600 text-xs">{errors.name}</span>
              )}
            </div>

            <div className="relative mb-[30px]">
              <input type="password" placeholder="Mật khẩu" {...register('password')} />
              {errors.name && (
                <span className="absolute top-full left-0 text-red-600 text-xs">{errors.name}</span>
              )}
            </div>

            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input type="checkbox" />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <Link to={PATH.resetPassword} className="forget">
                Quên mật khẩu?
              </Link>
            </div>

            <Button loading={loading} className="mt-[20px]">
              Đăng nhập
            </Button>

            <div className="text-register">
              <span>Nếu bạn chưa có tài khoản?</span>{' '}
              <Link className="link" to={PATH.signUp}>
                Đăng ký
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
