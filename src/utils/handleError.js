import { notification } from "./message"

export const handleError = (err) => {
  console.log(err)
  if (err.response?.data?.message) {
    notification.error(err.response.data.message)
  }
}
