import React, { lazy } from 'react'
import { PATH } from '../config/path'
// import { CourseDetail, Courses } from '../pages/course'

const Courses = lazy(() => import('@/pages/course/courses'))
const CourseDetail = lazy(() => import('@/pages/course/[slug]-id[id]'))

export const courses = {
  path: PATH.courses,
  children: [
    {
      index: true,
      element: <Courses />,
    },
    {
      path: PATH.courseDetail,
      element: <CourseDetail />,
    },
  ],
}
