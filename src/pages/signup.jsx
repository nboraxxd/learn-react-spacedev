import { message } from 'antd'
import React from 'react'
import { Button } from '../components/Button'
import { useAsync } from '../hooks/useAsync'
import { useForm } from '../hooks/useForm'
import { useScrollTop } from '../hooks/useScrollTop'
import { userService } from '../services/user.service'
import { confirm, minMax, regexp, required } from '../utils/validate'

export const SignUp = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const { execute: signUp, loading, status } = useAsync(userService.signUp)
  useScrollTop()

  const { values, validate, register, errors, reset } = useForm({
    username: [
      required('Please enter your email address'),
      regexp('username', 'Your email address is not in the correct format'),
    ],

    name: [
      required('Please enter your name'),
      regexp(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/, 'Your name is not in the correct format'),
    ],

    password: [
      required('Please enter your password'),
      minMax('Your password must be 8 chars at minimum', 8),
      regexp('password', 'Your password is not in the correct format'),
    ],

    confirmPassword: [required('Please confirm your password again'), confirm('password')],
  })

  const success = (message) => {
    messageApi.open({
      type: 'success',
      content: message,
      duration: 5,
      className: 'ant-message',
    })
  }

  const error = (message) => {
    messageApi.open({
      type: 'error',
      content: message,
      duration: 5,
      className: 'ant-message',
    })
  }

  async function onSubmit(event) {
    try {
      event.preventDefault()
      if (validate()) {
        const form = {
          username: values.username.toLowerCase(),
          name: values.name,
          password: values.password,
        }

        const res = await signUp(form)
        if (res.success) {
          success(res.message)
        }
      } else {
        console.log('Validate error')
      }
    } catch (err) {
      if (err.response?.data?.message) {
        error(err.response?.data?.message)
      }
    }
  }

  return (
    <>
      {contextHolder}
      <main id="main">
        <div className="auth">
          <div className="wrap">
            <h2 className="title">Đăng ký</h2>

            <form onSubmit={onSubmit}>
              <div className="relative mb-[30px]">
                <input type="text" placeholder="Email" {...register('username')} />
                {errors.username && (
                  <span className="absolute top-full left-0 text-red-600 text-xs">
                    {errors.username}
                  </span>
                )}
              </div>

              <div className="relative mb-[30px]">
                <input placeholder="Họ và tên" {...register('name')} />
                {errors.name && (
                  <span className="absolute top-full left-0 text-red-600 text-xs">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="relative mb-[30px]">
                <input type="password" placeholder="Mật khẩu" {...register('password')} />
                {errors.password && (
                  <span className="absolute top-full left-0 text-red-600 text-xs">
                    {errors.password}
                  </span>
                )}
              </div>

              <div className="relative mb-[5px]">
                <input
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <span className="absolute top-full left-0 text-red-600 text-xs">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>

              <p className="policy">
                Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của Spacedev
              </p>
              <Button loading={loading} className="mt-[30px]">
                Đăng ký
              </Button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
