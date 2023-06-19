import { message } from 'antd'
import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { PATH } from '../config/path'
import { useAsync } from '../hooks/useAsync'
import { useForm } from '../hooks/useForm'
import { useScrollTop } from '../hooks/useScrollTop'
import { userService } from '../services/user.service'
import { confirm, minMax, regexp, required } from '../utils/validate'

export const SignUp = () => {
  const { execute: signUpService, loading, status } = useAsync(userService.signUp)
  const { execute: resendEmailService, loading: resendEmailLoading } = useAsync(
    userService.resendEmail
  )
  useScrollTop()

  const { values, validate, register, errors } = useForm({
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

  async function _onSubmit(event) {
    try {
      event.preventDefault()
      if (validate()) {
        const form = {
          username: values.username.toLowerCase(),
          name: values.name,
          password: values.password,
        }

        const res = await signUpService(form)
        if (res.success) {
          message.success(res.message, 5)
        }
      } else {
        console.log('Validate error')
      }
    } catch (err) {
      console.error(err)
      if (err.response?.data?.message) {
        message.error(err.response.data.message, 5)
      }
    }
  }

  const _onResendEmail = async (ev) => {
    ev.preventDefault()
    console.log(values.username)

    try {
      const response = await resendEmailService({ username: values.username.toLowerCase() })
      message.success(response.message)
    } catch (err) {
      console.error(err)
      if (err.response?.data?.message) {
        message.error(err.response.data.message, 5)
      }
    }
  }

  return (
    <main id="main">
      <div className="auth">
        {status === 'success' ? (
          <div className="register-success max-w-[690px] my-[150px] mx-auto bg-white">
            <div className="contain p-[50px] text-center">
              <h1 className="main-title mb-[20px] capitalize">Tạo tài khoản thành công</h1>
              <p className="mb-[20px]">
                <strong>Chào mừng bạn đã trở thành thành viên mới của Spacedev Team.</strong> <br />
                Bạn vui lòng kiểm tra email để kích hoạt tài khoản.
              </p>
              <a
                href="#"
                className={classNames('link inline-block select-none', {
                  'opacity-50 pointer-events-none': resendEmailLoading,
                })}
                disabled
                onClick={_onResendEmail}
              >
                {resendEmailLoading && (
                  <span className=" inline-block w-[15px] h-[15px] mr-2 border-[3px] border-solid border-b-transparent rounded-[50%] animate-spin"></span>
                )}
                Gửi lại email kích hoạt
              </a>
            </div>
            <Link to={PATH.signIn} className="btn main rect w-full">
              Đăng nhập
            </Link>
          </div>
        ) : (
          <div className="wrap">
            <h2 className="title">Đăng ký</h2>

            <form onSubmit={_onSubmit}>
              {/* Email */}
              <Input placeholder="Email" {...register('username')} error={errors.username} />
              {/* Name */}
              <Input placeholder="Họ và tên" {...register('name')} error={errors.name} />
              {/* Password */}
              <Input
                type="password"
                placeholder="Mật khẩu"
                {...register('password')}
                error={errors.password}
              />
              {/* Confirm password */}
              <Input
                type="password"
                placeholder="Nhập lại mật khẩu"
                {...register('confirmPassword')}
                error={errors.confirmPassword}
              />

              <p className="policy">
                Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của Spacedev
              </p>
              <Button loading={loading} className="mt-[30px]">
                Đăng ký
              </Button>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}
