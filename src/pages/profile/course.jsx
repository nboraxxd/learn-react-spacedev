import { Skeleton } from '@/components/Skeleton'
import { PATH } from '@/config/path'
import { useFetch } from '@/hooks/useFetch'
import { courseService } from '@/services/course.service'
import moment from 'moment/moment'
import React from 'react'
import { generatePath, Link } from 'react-router-dom'

const MyCourse = () => {
  const { data: courses, loading } = useFetch(courseService.getMyCourse)

  if (loading)
    return Array.from(Array(3)).map((_, i) => (
      <div key={i} className="mb-5">
        <Skeleton height={250} />
      </div>
    ))

  return (
    <div className="tab2">
      {courses.data.map((e) => {
        console.log(e)
        return (
          <div key={e.course.id} className="item">
            <div className="cover">
              <img src={e.course.thumbnailUrl} alt="" />
            </div>
            <div className="info">
              <Link
                to={generatePath(PATH.courseDetail, { slug: e.course.slug, id: e.course.id })}
                className="name"
              >
                {e.course.title}
              </Link>
              <div className="date">
                Khai giảng ngày {moment(e.course.opening_time).format('DD/MM/YYYY')}
              </div>
              <div className="row">
                <div>
                  <img src="/img/clock.svg" alt="" className="icon" />
                  {e.total_hours} giờ
                </div>
                <div>
                  <img src="/img/play.svg" alt="" className="icon" />
                  {e.video} video
                </div>
                <div>
                  <img src="/img/user.svg" alt="" className="icon" />
                  {e.student} học viên
                </div>
              </div>
              <div className="process">
                <div className="line">
                  <div className="rate" style={{ width: `${e.process}%` }} />
                </div>
                {e.process}%
              </div>
              <Link
                to={generatePath(PATH.courseDetail, { slug: e.course.slug, id: e.course.id })}
                className="btn overlay round btn-continue"
              >
                Tiếp tục học
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MyCourse
