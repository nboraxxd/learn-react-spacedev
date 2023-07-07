import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
import { Select } from '@/components/Select'
import { PATH } from '@/config/path'
import { useAsync } from '@/hooks/useAsync'
import { userSelector } from '@/stores/selectors'
import { handleError } from '@/utils/handleError'
import { notification } from '@/utils/message'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Field } from '../../components/Field'
import { Skeleton } from '../../components/Skeleton/Skeleton'
import { useFetch } from '../../hooks/useFetch'
import { useForm } from '../../hooks/useForm'
import { useScrollTop } from '../../hooks/useScrollTop'
import { courseService } from '../../services/course.service'
import { currency } from '../../utils/currency'
import { regexp, required } from '../../utils/validate'
import Page404 from '../404'

const Register = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const user = useSelector(userSelector)

  useScrollTop()

  useEffect(() => {
    if (!user) {
      notification.warning('Vui lòng đăng nhập để đăng ký khoá học')
      navigate(PATH.signIn, { state: { redirect: pathname } })
    }
  }, [user])

  const { values, register, validate } = useForm(
    {
      name: [required('Please enter your full name')],
      phone: [
        required('Please enter your phone number'),
        regexp('phone', 'Your phone number is not in the correct format'),
      ],
      email: [
        required('Please enter your email address'),
        regexp('email', 'Your email address is not in the correct format'),
      ],
      facebook: [
        required('Please enter your Facebook URL'),
        regexp(
          /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/,
          'Your Facebook URL is not in the correct format'
        ),
      ],
      // coin: [required('Please select coin checkbox to get discount')],
      payment: [required('Please choose a payment method')],
    },
    {
      email: user?.username,
      name: user?.name,
      phone: user?.phone,
      facebook: user?.fb,
    }
  )

  const {
    execute: registerCourseService,
    loading: registerCourseLoading,
    status: registerCourseServiceStatus,
  } = useAsync(courseService.registerCourse)

  const onSubmit = async () => {
    try {
      if (validate()) {
        await registerCourseService(detail.id, values)
      } else {
        console.log('Validate error')
      }
    } catch (error) {
      handleError(error)
    }
  }

  const { data, loading } = useFetch(() => courseService.getCourseDetail(parseInt(id)))

  if (loading) {
    return <RegisterLoading />
  }

  const { data: detail } = data

  if (!detail) {
    return <Page404 />
  }

  return (
    <main className="register-course" id="main">
      {registerCourseServiceStatus === 'success' ? (
        <div className="register-success" style={{ margin: '40px auto' }}>
          <div className="contain">
            <div className="main-title">đăng ký thành công</div>
            <p>
              <strong>
                Chào mừng {values.name} đã trở thành thành viên mới của khoá học {detail.title}.
              </strong>
              <br />
              Cảm ơn bạn đã đăng ký khoá học tại <strong>Spacedev</strong>, chúng tôi sẽ chủ động
              liên lạc với bạn thông qua facebook hoặc số điện thoại của bạn.
            </p>
          </div>
          <Link to={PATH.profile.course} className="btn main rect">
            về trang khoá học của tôi
          </Link>
        </div>
      ) : (
        <section>
          <div className="container">
            <div className="wrap container">
              <div className="main-sub-title">ĐĂNG KÝ</div>
              <h1 className="main-title">{detail.title}</h1>
              <div className="main-info">
                <div className="date">
                  <strong>Khai giảng:</strong> {moment(detail.opening_time).format('DD/MM/YYYY')}
                </div>
                <div className="time">
                  <strong>Thời lượng:</strong> {detail.content.length} buổi
                </div>
                <div className="time">
                  <strong>Học phí:</strong> {currency(detail.money)} VND
                </div>
              </div>
              <div className="form">
                {/* name */}
                <Field
                  label="Họ và tên"
                  required
                  placeholder="Họ và tên bạn"
                  {...register('name')}
                />

                {/* phone */}
                <Field
                  label="Số điện thoại"
                  required
                  placeholder="Số điện thoại"
                  {...register('phone')}
                />

                {/* email */}
                <Field
                  label="Email"
                  required
                  placeholder="Email của bạn"
                  {...register('email')}
                  disabled
                />

                {/* facebook */}
                <Field
                  label="Facebook"
                  required
                  placeholder="https://facebook.com"
                  {...register('facebook')}
                />

                {/* coin */}
                <Field
                  label="Sử dụng COIN"
                  {...register('coin')}
                  renderInput={(props) => (
                    <Checkbox {...props}>
                      Hiện có <strong>300 COIN</strong>
                    </Checkbox>
                  )}
                />

                {/* payment */}
                <Field
                  label="Hình thức thanh toán"
                  required
                  {...register('payment')}
                  renderInput={(props) => (
                    <Select
                      {...props}
                      placeholder="Hình thức thanh toán"
                      options={[
                        { value: 'chuyen-khoan', label: 'Chuyển khoản' },
                        { value: 'thanh-toan-tien-mat', label: 'Thanh toán tiền mặt' },
                      ]}
                    />
                  )}
                />

                {/* opinion */}
                <Field
                  label="Ý kiến cá nhân"
                  placeholder="Mong muốn cá nhân và lịch bạn có thể học"
                  {...register('opinion')}
                  renderInput={(props) => <textarea {...props} cols={30} rows={10} />}
                />

                <Button loading={registerCourseLoading} onClick={onSubmit}>
                  Đăng ký
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

const RegisterLoading = () => {
  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">
              <Skeleton height={21} />
            </div>
            <h1 className="main-title">
              <Skeleton height={53} />
            </h1>
            <div className="main-info">
              <Skeleton height={21} />
            </div>

            <div className="form text-center">
              {Array.from(Array(7)).map((_, i) => {
                return <Skeleton key={i} className="mb-[25px]" height={55} width="80%" />
              })}
            </div>
            <Skeleton height={54} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Register
