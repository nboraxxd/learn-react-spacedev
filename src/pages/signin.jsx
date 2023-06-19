import React from 'react'
import { message } from 'antd'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { PATH } from '../config/path'
import { useForm } from '../hooks/useForm'
import { authenticationService } from '../services/authentication.service'
import { regexp, required } from '../utils/validate'
import { useAsync } from '../hooks/useAsync'
import { Input } from '../components/Input'
import { useAuth } from '../components/AuthContext'

export const SignIn = () => {
  const { signIn } = useAuth()
  const { execute: SignInService, loading } = useAsync(signIn)

  const form = useForm({
    username: [
      required('Please enter your email address'),
      regexp('email', 'Your email address is not correct format'),
    ],

    password: [
      required('Please enter your password'),
      regexp('password', 'Your password is not correct format'),
    ],
  })
  const { values, validate, register, errors } = form

  const _onSubmit = (event) => {
    event.preventDefault()

    if (validate()) {
      const form = {
        username: values.username.toLowerCase(),
        password: values.password,
      }

      SignInService(form)
    } else {
      console.log('Validate error')
    }
  }

  return (
    <main id="main">
      <div className="auth">
        <div className="wrap">
          {/* login-form */}
          <form className="ct_login" onSubmit={_onSubmit}>
            <h2 className="title">Đăng nhập</h2>

            <Input placeholder="Email" {...register('username')} error={errors.username} />

            <Input
              type="password"
              placeholder="Mật khẩu"
              {...register('password')}
              error={errors.password}
            />

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
