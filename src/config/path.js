const PROFILE_PATH = '/profile'
const COURSES_PATH = '/courses'

export const PATH = {
  home: '/',
  team: '/team',
  project: '/project',
  courses: COURSES_PATH,
  courseDetail: COURSES_PATH + '/:slug-id:id',
  courseRegister: '/register/:slug-id:id',
  contact: '/contact',
  faq: '/faq',
  payment: '/payment',
  coin: '/coin',
  signIn: '/signin',
  signUp: '/signup',
  resetPassword: '/reset-password',
  profile: {
    index: PROFILE_PATH,
    course: PROFILE_PATH + '/course',
    project: PROFILE_PATH + '/project',
    payment: PROFILE_PATH + '/payment',
    coin: PROFILE_PATH + '/coin',
    history: PROFILE_PATH + '/history',
  },
  error404: '*',
}
