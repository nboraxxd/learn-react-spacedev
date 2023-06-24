import { message } from 'antd'

const SECOND_SHOWING_NOTI = 5
export const notification = {
  success(_message = 'success', timer = SECOND_SHOWING_NOTI) {
    return message.success(_message, timer)
  },

  warning(_message = 'warning', timer = SECOND_SHOWING_NOTI) {
    return message.warning(_message, timer)
  },

  error(_message = 'error', timer = SECOND_SHOWING_NOTI) {
    return message.error(_message, timer)
  },
}
