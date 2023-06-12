import React, { useState } from 'react'
import { Field } from '../components/Field'
import { regexp, required, validate } from '../utils/validate'

const RegisterPage = () => {
  const [form, setForm] = useState({})
  const [error, setError] = useState({})

  const register = (name) => {
    return {
      error: error[name],
      value: form[name] || '',
      onChange: (event) => setForm({ ...form, [name]: event.target.value }),
    }
  }

  const onSubmit = () => {
    const errorObject = validate(
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
          required('Please enter your facebook'),
          regexp(
            /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/,
            'Your Facebook URL is not in the correct format'
          ),
        ],
      },
      form
    )

    setError(errorObject)
    if (Object.keys(errorObject).length === 0) {
      console.log('Validate success')
    } else {
      console.log('Validate error')
    }
  }

  return (
    <>
      <main id="main">
        <section className="register-course">
          <div className="container">
            <div className="wrap container">
              <div className="main-sub-title">ĐĂNG KÝ</div>
              <h1 className="main-title">Thực chiến ReactJS Advanced </h1>
              <div className="main-info">
                <div className="date">
                  <strong>Khai giảng:</strong> 15/11/2020
                </div>
                <div className="time">
                  <strong>Thời lượng:</strong> 18 buổi
                </div>
                <div className="time">
                  <strong>Học phí:</strong> 6,000,000 VND
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
                <Field label="Email" required placeholder="Email của bạn" {...register('email')} />

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
                    <div className="check-container">
                      Hiện có <strong>300 COIN</strong>
                      {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                      {/* Cần ít nhất 200 COIN để giảm giá */}
                      <input type="checkbox" {...props} />
                      <span className="checkmark" />
                    </div>
                  )}
                />

                {/* payment */}
                <Field
                  label="Hình thức thanh toán"
                  {...register('payment')}
                  renderInput={(props) => (
                    <div className="select" {...props}>
                      <div className="head">Chuyển khoản</div>
                      <div className="sub">
                        <a href="#">Chuyển khoản</a>
                        <a href="#">Thanh toán tiền mặt</a>
                      </div>
                    </div>
                  )}
                />

                {/* opinion */}
                <Field
                  label="Ý kiến cá nhân"
                  placeholder="Mong muốn cá nhân và lịch bạn có thể học"
                  {...register('opinion')}
                />

                <button onClick={onSubmit} className="btn main rect">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Vương Đặng đã trở thành thành viên mới của Spacedev Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khoá học tại <strong>Spacedev</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
      </main>
    </>
  )
}

export default RegisterPage
