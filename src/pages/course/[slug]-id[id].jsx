import React from 'react'
import { generatePath, Link, useParams } from 'react-router-dom'
import { CourseCard } from '../../components/CourseCard/CourseCard'
import { Skeleton } from '../../components/Skeleton/Skeleton'
import { PATH } from '../../config/path'
import { useFetch } from '../../hooks/useFetch'
import { useScrollTop } from '../../hooks/useScrollTop'
import { courseService } from '../../services/course.service'
import { currency } from '../../utils/currency'

export const CourseDetail = () => {
  const { id } = useParams()

  useScrollTop([id])
  const { data, loading } = useFetch(() => courseService.getCourseDetail(parseInt(id)), [id])
  const { data: related } = useFetch(() => courseService.getCourseRelated(parseInt(id)), [id])

  if (loading) {
    return <CourseDetailLoading />
  }

  const { data: detail } = data
  if (!detail) return <div style={{ margin: '100px 0' }}>Not Found...</div>

  const registerPath = generatePath(PATH.courseRegister, { slug: detail.slug, id: detail.id })

  return (
    <main className="course-detail" id="main">
      <section className="banner style2" style={{ '--background': '#cde6fb' }}>
        <div className="container">
          <div className="info">
            <h1>{detail.title}</h1>
            <div className="row">
              <div className="date">
                <strong>Khai giảng:</strong> 12/10/2020
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> 18 buổi
              </div>
            </div>
            <Link
              className="btn white round"
              style={{ '--color-btn': '#292929' }}
              to={registerPath}
            >
              đăng ký
            </Link>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="video">
              <div className="icon">
                <img src="/img/play-icon-white.png" alt="" />
              </div>{' '}
              <span>giới thiệu</span>
            </div>
            <div className="money">{currency(detail.money)} VND</div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="container">
          <p className="des">{detail.long_description}</p>
          <h2 className="title">giới thiệu về khóa học</h2>
          <div className="cover">
            <img src="/img/course-detail-img.png" alt="" />
          </div>
          <h3 className="title">nội dung khóa học</h3>
          <div className="accordion">
            <div className="accordion__title">
              <div className="date">Ngày 1</div>
              <h3>Giới thiệu HTML, SEO, BEM.</h3>
            </div>
            <div className="content">
              I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials”
              that offers some tangible benefits over alternatives like VueJS for simple page
              interactions.
            </div>
          </div>
          <div className="accordion">
            <div className="accordion__title">
              <div className="date">Ngày 2</div>
              <h3>CSS, CSS3, Flexbox, Grid</h3>
            </div>
            <div className="content">
              I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials”
              that offers some tangible benefits over alternatives like VueJS for simple page
              interactions.
            </div>
          </div>
          <div className="accordion">
            <div className="accordion__title">
              <div className="date">Ngày 3</div>
              <h3>Media Queries</h3>
            </div>
            <div className="content">
              I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials”
              that offers some tangible benefits over alternatives like VueJS for simple page
              interactions.
            </div>
          </div>
          <div className="accordion">
            <div className="accordion__title">
              <div className="date">Ngày 4</div>
              <h3>Boostrap 4</h3>
            </div>
            <div className="content">
              I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials”
              that offers some tangible benefits over alternatives like VueJS for simple page
              interactions.
            </div>
          </div>
          <div className="accordion">
            <div className="accordion__title">
              <div className="date">Ngày 5</div>
              <h3>Thực hành dự án website Landing Page</h3>
            </div>
            <div className="content">
              I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials”
              that offers some tangible benefits over alternatives like VueJS for simple page
              interactions.
            </div>
          </div>
          <div className="accordion">
            <div className="accordion__title">
              <div className="date">Ngày 6</div>
              <h3>Cài đặt Grunt và cấu trúc thư mục dự án</h3>
            </div>
            <div className="content">
              I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials”
              that offers some tangible benefits over alternatives like VueJS for simple page
              interactions.
            </div>
          </div>
          <h3 className="title">yêu cầu cần có</h3>
          <div className="row row-check">
            <div className="col-md-6">Đã từng học qua HTML, CSS</div>
            <div className="col-md-6">Cài đặt phần mềm Photoshop, Adobe illustrator, Skype</div>
          </div>
          <h3 className="title">hình thức học</h3>
          <div className="row row-check">
            <div className="col-md-6">
              Học offline tại văn phòng, cùng Vương Đặng và 3 đồng nghiệp.
            </div>
            <div className="col-md-6">Dạy và thực hành thêm bài tập online thông qua Skype.</div>
            <div className="col-md-6">
              Được các mentor và các bạn trong team Spacedev hổ trợ thông qua group Spacedev
              Facebook hoặc phần mềm điều khiển máy tính.
            </div>
            <div className="col-md-6">
              Thực hành 2 dự án thực tế với sự hướng dẫn của Spacedev Team.
            </div>
          </div>
          <h3 className="title">
            <div className="date-start">lịch học</div>
            <div className="sub">
              *Lịch học và thời gian có thể thống nhất lại theo số đông học viên.
            </div>
          </h3>
          <p>
            <strong>Ngày bắt đầu: </strong> 09/09/2020 <br />
            <strong>Thời gian học: </strong> Thứ 3 từ 18h45-21h45, Thứ 7 từ 12h-15h, Chủ nhật từ
            15h-18h
          </p>
          <h3 className="title">Người dạy</h3>
          <div className="teaches">
            <div className="teacher">
              <div className="avatar">
                <img src="/img/avt.png" alt="" />
              </div>
              <div className="info">
                <div className="name">Đặng Thuyền Vương</div>
                <div className="title">Founder Spacedev &amp; Fullstack developer</div>
                <p className="intro">
                  My education, career, and even personal life have been molded by one simple
                  principle; well designed information resonates with people and can change lives.I
                  have a passion for making information resonate. It all starts with how people
                  think. With how humans work. As humans we have learned how to read and write and
                  while that is incredible, we are also already hard-wired to do some things a bit
                  more "automatically"
                </p>
                <p>
                  <strong>Website:</strong>{' '}
                  <a href="#" target="_blank">
                    https://dangthuyenvuong.github.io/
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="user">
              <img src="/img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
            </div>
            <Link className="btn main btn-register round" to={registerPath}>
              đăng ký
            </Link>
            <div className="btn-share btn overlay round btn-icon">
              <img src="/img/facebook.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-4">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">Khóa học</h3>
            <h2 className="main-title">Liên quan</h2>
          </div>
          <div className="list row">
            {related &&
              related.data.map((item) => {
                return <CourseCard key={item.id} {...item} />
              })}
          </div>
        </div>
      </section>
    </main>
  )
}

const CourseDetailLoading = () => (
  <main className="course-detail" id="main">
    <section className="banner style2" style={{ '--background': '#cde6fb' }}>
      <div className="container">
        <div className="info">
          <h1>
            <Skeleton height={64} width={500} />
          </h1>
          <div className="row">
            <div className="date">
              <Skeleton height={24} width={200} />
            </div>
            <div className="time">
              <Skeleton height={24} width={200} />
            </div>
          </div>
          <Link className="btn white round" to="#">
            <Skeleton height={46} width={140} />
          </Link>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="video">
            <div className="icon">
              <Skeleton shap="circle" height={45} width={45} />
            </div>{' '}
            <Skeleton height={20} width={80} />
          </div>
          <div className="money mt-3">
            <Skeleton height={27} width={124} />
          </div>
        </div>
      </div>
    </section>

    <section className="section-2">
      <div className="container">
        <p className="des">
          {Array.from(Array(10)).map((_, i) => {
            return <Skeleton key={i} height={35} />
          })}
        </p>
      </div>
    </section>
  </main>
)
