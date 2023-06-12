import React, { useState } from 'react'
import { Field } from '../components/Field'

const ContactPage = () => {
  const [form, setForm] = useState({})
  const [error, setError] = useState({})

  const register = (name) => {
    return {
      error: error[name],
      value: form[name] || '',
      onChange: (event) => setForm({ ...form, [name]: event.target.value }),
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const errorObject = {}

    // validate
    if (!form.name?.trim()) {
      errorObject.name = 'Please fill in your full name'
    }

    if (!form.phone?.trim()) {
      errorObject.phone = 'Please fill in your phone number'
    } else if (!/(84|0|[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone?.trim())) {
      errorObject.phone = 'Your phone number is not in the correct format'
    }

    if (!form.email?.trim()) {
      errorObject.email = 'Please fill in your email address'
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email?.trim())) {
      errorObject.email = 'Your email address is not in the correct format'
    }

    if (
      form.website?.trim() &&
      !/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
        form.website?.trim()
      )
    ) {
      errorObject.website = 'Your website URL is not in the correct format'
    }

    if (!form.title?.trim()) {
      errorObject.title = 'Please fill in contact title'
    }

    if (!form.content?.trim()) {
      errorObject.content = 'Please fill in the content field'
    }

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
