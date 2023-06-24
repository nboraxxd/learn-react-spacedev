import { api, COURSE_API } from '../config/api'

export const courseService = {
  getCourse(query = '') {
    return api.get(`${COURSE_API}/courses${query}`)
  },

  getCourseDetail(id) {
    return api.get(`${COURSE_API}/courses/${id}`)
  },

  getCourseRelated(id) {
    return api.get(`${COURSE_API}/courses/related/${id}`)
  },

  registerCourse(id, data) {
    return api.post(`${COURSE_API}/courses/register/${id}`, data)
  },

  getMyCourse() {
    return api.get(`${COURSE_API}/courses/my-course`)
  },
}
