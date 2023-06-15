import React from 'react';
import { PATH } from '../config/path';
import { CourseDetail, Courses } from '../pages/course';

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