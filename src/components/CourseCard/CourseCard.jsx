import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import { PATH } from '../../config/path'
import { currency } from '../../utils/currency'

export const CourseCard = (props) => {
  const { id, money, long_description, short_description, slug, title, thumbnailUrl } = props
  const pathDetail = generatePath(PATH.courseDetail, { slug, id })
  const pathRegister = generatePath(PATH.courseRegister, { slug, id })
  // console.log(PATH.courseDetail, pathDetail)

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
          <p className="des">{short_description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src="img/avt.png" alt="" />
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
