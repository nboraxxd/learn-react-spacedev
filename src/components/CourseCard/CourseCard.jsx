import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import { PATH } from '../../config/path'
import { currency } from '../../utils/currency'
import { Skeleton } from '../Skeleton/Skeleton'

export const CourseCard = (props) => {
  const { id, money, short_description, slug, title, thumbnailUrl } = props
  const pathDetail = generatePath(PATH.courseDetail, { slug, id })
  const pathRegister = generatePath(PATH.courseRegister, { slug, id })

  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <Link className="cover" to={pathDetail}>
          <img src={thumbnailUrl} alt={title} />
        </Link>
        <div className="info">
          <Link className="name" to={pathDetail}>
            {title}
          </Link>
          <p className="des line-clamp-4">{short_description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src="/img/avt.png" alt="" />
            </div>
            <div className="name">Vương Đặng</div>
          </div>
          <Link to={pathRegister} className="register-btn">
            {currency(money)} VND
          </Link>
        </div>
      </div>
    </div>
  )
}

export const CourseCardLoading = () => (
  <div className="col-md-4 course">
    <div className="wrap">
      <Link className="cover" to="#">
        <Skeleton height="100%" />
      </Link>
      <div className="info">
        <Link className="name" to="#">
          <Skeleton height={30} />
        </Link>
        <p className="des">
          <Skeleton height={22} />
          <Skeleton height={22} />
          <Skeleton height={22} />
        </p>
      </div>
      <div className="bottom" style={{ borderColor: 'transparent' }}>
        <div className="teacher">
          <div className="avatar">
            <Skeleton shap="circle" height={36} width={36} />
          </div>
          <div className="name mt-1">
            <Skeleton height={24} width={120} />
          </div>
        </div>
      </div>
    </div>
  </div>
)
