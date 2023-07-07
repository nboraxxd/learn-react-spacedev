import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useAsync } from '@/hooks/useAsync'
import { useForm } from '@/hooks/useForm'
import { userService } from '@/services/user.service'
import { regexp, required, confirm } from '@/utils/validate'
import React, { useCallback } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { handleError } from '@/utils/handleError'
import { message } from 'antd'
import { PATH } from '@/config/path'
import { setToken, setUser } from '@/utils/token'
import { useDispatch } from 'react-redux'
import { setUserAction } from '@/stores/actions'
import { notification } from '@/utils/message'

const ResetPassword = () => {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { state } = useLocation()

  const {
    execute: sendEmailResetPasswordService,
    loading: sendEmailResetPasswordLoading,
    status: sendEmailResetPasswordStatus,
  } = useAsync(userService.sendEmailResetPassword)

  const { execute: resetPasswordByCodeService, loading: resetPasswordByCodeLoading } = useAsync(
    userService.resetPasswordByCode
  )

  const sendEmailForm = useForm({
    username: [
      required('Please enter your email address'),
      regexp('email', 'Your email address is not correct format'),
    ],
  })

  const resetPasswordByCodeForm = useForm({
    password: [
      required('Please enter your password'),
      regexp('password', 'Your password is not correct format'),
    ],
    confirmPassword: [required('Please enter your password again'), confirm('password')],
  })

  const onSendEmailResetPassword = async () => {
    try {
      if (sendEmailForm.validate()) {
        await sendEmailResetPasswordService(sendEmailForm.values)
      }
    } catch (error) {
      handleError(error)
    }
  }

  const getProfile = async () => {
    try {
      const user = await userService.getProfile()

      dispatch(setUserAction(user.data))
      setUser(user.data)
      notification.success('Đăng nhập tài khoản thành công')
      if (state?.redirect) {
        navigate(state.redirect)
      } else {
        navigate(PATH.home)
      }
    } catch (error) {
      handleError(error)
    }
  }

  const onResetPasswordByCode = async () => {
    try {
      if (resetPasswordByCodeForm.validate()) {
        const res = await resetPasswordByCodeService({
          password: resetPasswordByCodeForm.values.password,
          code,
        })
        setToken(res.data)
        await getProfile()
      }
    } catch (error) {
      handleError(error)
    }
  }

  return (
    <main id="main">
      <div className="auth">
        {!code && sendEmailResetPasswordStatus !== 'success' && (
          <div className="wrap">
            <h1 className="title">Đặt lại mật khẩu</h1>
            <Input
              {...sendEmailForm.register('username')}
              error={sendEmailForm.errors.username}
              placeholder="Email"
            />
            <Button loading={sendEmailResetPasswordLoading} onClick={onSendEmailResetPassword}>
              Đặt lại mật khẩu
            </Button>
          </div>
        )}

        {!code && sendEmailResetPasswordStatus === 'success' && (
          <div className="wrap !max-w-[620px] !my-[47px]">
            <h1 className="title">Gửi email lấy lại mật khẩu thành công</h1>
            <p className="text-center">
              Chúng tôi đã gửi cho bạn email lấy lại mật khẩu, xin vui lòng kiểm tra email và làm
              theo hướng dẫn
            </p>
          </div>
        )}

        {code && (
          <div className="wrap">
            <h1 className="title">Đặt lại mật khẩu</h1>
            <Input
              type="password"
              placeholder="Mật khẩu"
              {...resetPasswordByCodeForm.register('password')}
              error={resetPasswordByCodeForm.errors.password}
            />
            <Input
              type="password"
              placeholder="Nhập lại mật khẩu"
              {...resetPasswordByCodeForm.register('confirmPassword')}
              error={resetPasswordByCodeForm.errors.confirmPassword}
            />
            <Button loading={resetPasswordByCodeLoading} onClick={onResetPasswordByCode}>
              Đặt lại mật khẩu
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}

export default ResetPassword
