import { Button } from '@/components/Button'
import { Field } from '@/components/Field'
import { useAsync } from '@/hooks/useAsync'
import { useForm } from '@/hooks/useForm'
import { userService } from '@/services/user.service'
import { setUserAction } from '@/stores/actions'
import { userSelector } from '@/stores/selectors'
import { handleError } from '@/utils/handleError'
import { notification } from '@/utils/message'
import { confirm, minMax, regexp, required } from '@/utils/validate'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MyInfo = () => {
  // const [isChangePassword, setIsChangePassword] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(userSelector)
  const { execute: updateInfoService, loading } = useAsync(userService.updateInfo)
  const { values, validate, register } = useForm(
    {
      name: [
        required('Please enter your name'),
        regexp(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/, 'Your name is not in the correct format'),
      ],
      phone: [regexp('phone', 'Your phone number is not in the correct format')],
      facebook: [
        regexp(
          /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/,
          'Your Facebook URL is not in the correct format'
        ),
      ],
      // oldPassword: [
      //   required('Please enter your old password'),
      //   minMax('Your password must be 8 chars at minimum', 8),
      //   regexp('password', 'Your password is not in the correct format'),
      // ],

      // newPassword: [
      //   required('Please enter your new password'),
      //   minMax('Your password must be 8 chars at minimum', 8),
      //   regexp('password', 'Your password is not in the correct format'),
      // ],

      // confirmNewPassword: [
      //   required('Please confirm your new password again'),
      //   confirm('newPassword'),
      // ],
    },
    user
  )

  const onSave = async () => {
    try {
      if (validate()) {
        const res = await updateInfoService(values)
        console.log(res)
        dispatch(setUserAction(res.data))
        notification.success('Bạn đã cập nhật thông tin tài khoản thành công')
      } else {
        console.log('Validate error')
      }
    } catch (err) {
      handleError(err)
    }
  }

  return (
    <div className="tab1">
      {/* name */}
      <Field
        label="Họ và tên"
        required
        errorPosition="210px"
        placeholder="Bruce Wayne"
        {...register('name')}
        // className=''
      />
      {/* email */}
      <Field label="Email" disabled {...register('username')} />
      {/* phone */}
      <Field
        label="Số điện thoại"
        errorPosition="210px"
        placeholder="0345******"
        {...register('phone')}
      />
      {/* facebook URL */}
      <Field
        label="Facebook"
        errorPosition="210px"
        placeholder="Facebook URL"
        {...register('fb')}
      />
      {/* change password checkbox */}
      {/* <label>
        <p />
        <div className="checkcontainer">
          Thay đổi mật khẩu
          <input
            type="checkbox"
            checked={isChangePassword}
            onChange={() => setIsChangePassword(!isChangePassword)}
          />
          <span className="checkmark" />
        </div>
      </label> */}
      {/* {isChangePassword && (
        <>
          <Field
            type="password"
            label="Mật khẩu cũ"
            required
            errorPosition="210px"
            placeholder="Mật khẩu cũ"
            {...register('oldPassword')}
          />
          <Field
            type="password"
            label="Mật khẩu mới"
            required
            errorPosition="210px"
            placeholder="Mật khẩu mới"
            {...register('newPassword')}
          />
          <Field
            type="password"
            label="Xác nhận"
            required
            errorPosition="210px"
            placeholder="Xác nhận mật khẩu"
            {...register('confirmNewPassword')}
          />
        </>
      )} */}
      <Button loading={loading} onClick={onSave}>
        LƯU LẠI
      </Button>
    </div>
  )
}

export default MyInfo
