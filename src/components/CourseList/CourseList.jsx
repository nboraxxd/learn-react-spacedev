import React, { useState } from 'react'
import { courseService } from '../../services/course'
import { CourseCard } from '../CourseCard/CourseCard'

export const CourseList = () => {
  const [course, setCourse] = useState(() => courseService.getCourse())
  
  return (
    <div className="list row">
      {course.map((item) => (
        <CourseCard key={item.id} {...item} />
      ))}
    </div>
  )
}
