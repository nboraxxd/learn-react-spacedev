import React, { useState } from 'react'
import { Field } from '../components/Field'
import { useForm } from '../hooks/useForm'
import { regexp, required, validate } from '../utils/validate'

const ContactPage = () => {
  const { values, validate, register } = useForm({
    name: [required('Please enter your full name')],

    phone: [
      required('Please enter your phone number'),
      regexp('phone', 'Your phone number is not in the correct format'),
    ],

    email: [
      required('Please enter your email address'),
      regexp('email', 'Your email address is not in the correct format'),
    ],

    website: [regexp('websiteUrl', 'Your website URL is not in the correct format')],

    title: [required('Please enter your contact title')],

    content: [required('Please fill in the content field')],
  })

  const onSubmit = (e) => {
    e.preventDefault()

    if (validate()) {
      console.log(values)
    } else {
      console.log('Validate error')
    }
  }

  return (
    <>
      <main id="main">
        <div className="register-course">
          <section className="section-1 wrap container">
            {/* <div class="main-sub-title">liên hệ</div> */}
            <h2 className="main-title">HỢP TÁC CÙNG SPACEDEV</h2>
            <p className="top-des">
              Đừng ngần ngại liên hệ với <strong>Spacedev</strong> để cùng nhau tạo ra những sản
              phẩm giá trị, cũng như việc hợp tác với các đối tác tuyển dụng và công ty trong và
              ngoài nước.
            </p>
            <form className="form" onSubmit={onSubmit}>
              {/* name */}
              <Field label="Họ và tên" required placeholder="Họ và tên bạn" {...register('name')} />

              {/* phone */}
              <Field
                label="Số điện thoại"
                required
                placeholder="Số điện thoại"
                {...register('phone')}
              />

              {/* email */}
              <Field label="Email" required placeholder="Email của bạn" {...register('email')} />

              {/* website */}
              <Field
                label="Website"
                placeholder="Đường dẫn website http://"
                {...register('website')}
              />

              {/* title */}
              <Field
                label="Tiêu đề"
                required
                placeholder="Tiêu đề liên hệ"
                {...register('title')}
              />

              {/* content */}
              <Field
                label="Nội dung"
                required
                {...register('content')}
                renderInput={(props) => <textarea {...props} cols={30} rows={10} />}
              />

              <button className="btn main rect">đăng ký</button>
            </form>
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
        </div>
      </main>
    </>
  )
}

export default ContactPage
