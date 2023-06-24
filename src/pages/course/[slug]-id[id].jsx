import { Modal } from '@/components/Modal'
import { Teacher } from '@/components/Teacher'
import moment from 'moment/moment'
import React, { useState } from 'react'
import { generatePath, Link, useParams } from 'react-router-dom'
import { Accordion } from '../../components/Accordion'
import { CourseCard } from '../../components/CourseCard'
import { Skeleton } from '../../components/Skeleton'
import { PATH } from '../../config/path'
import { useFetch } from '../../hooks/useFetch'
import { useScrollTop } from '../../hooks/useScrollTop'
import { courseService } from '../../services/course.service'
import { currency } from '../../utils/currency'
import { Page404 } from '../404'

export const CourseDetail = () => {
  const [isOpenVideoModal, setIsOpenVideoModal] = useState(false)
  const { id } = useParams()

  useScrollTop([id])
  const { data, loading } = useFetch(() => courseService.getCourseDetail(parseInt(id)), [id])
  const { data: related } = useFetch(() => courseService.getCourseRelated(parseInt(id)), [id])

  if (loading) {
    return <CourseDetailLoading />
  }

  const { data: detail } = data
  if (!detail) return <Page404>Không tìm thấy khoá học</Page404>

  const registerPath = generatePath(PATH.courseRegister, { slug: detail.slug, id: detail.id })
  const openingTime = moment(detail.opening_time).format('DD/MM/YYYY')

  return (
    <main className="course-detail" id="main">
      <section
        className="banner style2"
        style={{ '--background': detail.template_color_banner || '#cde6fb' }}
      >
        <div className="container">
          <div className="info">
            <h1>{detail.title}</h1>
            <div className="row">
              <div className="date">
                <strong>Khai giảng:</strong> {openingTime}
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> {detail.content.length} buổi
              </div>
            </div>
            <Link
              className="btn white round"
              style={{ '--color-btn': detail.template_color_btn || '#292929' }}
              to={registerPath}
            >
              đăng ký
            </Link>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="video" onClick={() => setIsOpenVideoModal(true)}>
              <div className="icon">
                <img src="/img/play-icon-white.png" alt="" />
              </div>{' '}
              <span>giới thiệu</span>
            </div>
            <div className="money">{currency(detail.money)} VND</div>
          </div>
        </div>
        <Modal maskCloseTable visible={isOpenVideoModal} onClose={() => setIsOpenVideoModal(false)}>
          <iframe
            width="840"
            height="472.5"
            src="https://www.youtube.com/embed/FN7ALfpGxiI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Modal>
      </section>
      <section className="section-2">
        <div className="container">
          <p className="des">{detail.long_description}</p>
          <h2 className="title">giới thiệu về khóa học</h2>
          <div className="cover">
            <img src="/img/course-detail-img.png" alt="" />
          </div>
          <h3 className="title">nội dung khóa học</h3>
          <Accordion.Group>
            {detail.content.map((e, i) => (
              <Accordion key={i} date={i + 1} {...e}>
                {e.content}
              </Accordion>
            ))}
          </Accordion.Group>
          <h3 className="title">yêu cầu cần có</h3>
          <div className="row row-check">
            {detail.required.map((item, index) => (
              <div className="col-md-6" key={index}>
                {item.content}
              </div>
            ))}
          </div>
          <h3 className="title">hình thức học</h3>
          <div className="row row-check">
            {detail.benefits.map((item, index) => (
              <div className="col-md-6" key={index}>
                {item.content}
              </div>
            ))}
          </div>
          <h3 className="title">
            <div className="date-start">lịch học</div>
            <div className="sub">{detail.schedule}</div>
          </h3>
          <p>
            <strong>Ngày bắt đầu: </strong> {openingTime} <br />
            <strong>Thời gian học: </strong> {detail.schedule}
          </p>
          <h3 className="title">Người dạy</h3>
          <Teacher {...detail.teacher} />

          {detail.mentor.length > 0 && (
            <>
              <h3 className="title">Người hướng dẫn</h3>
              {detail.mentor.map((item) => {
                console.log(item)
                return <Teacher key={item.id} {...item} />
              })}
            </>
          )}

          <div className="bottom">
            <div className="user">
              <img src="/img/user-group-icon.png" alt="" /> {detail.number_student_default} bạn đã
              đăng ký
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
