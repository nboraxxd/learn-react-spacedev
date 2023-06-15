// rules = {
//  name: [{ required: true, message: 'Please enter your full name' }]
//  email: [
//    { required: true, message: 'Please enter your email address' },
//     { regexp: 'email' },
//  ]
// }

// forms = {
//  name: 'Đặng Thuyền Vương',
//  email: 'dangthuyenvuong@gmail.com'
// }

// return errorObject = {
//  email: 'Xin vui lòng nhập đúng địa chỉ email'
// }

/**
 *
 * @param {*} forms
 * @param {*} rules
 * @returns plan error object
 */

const REGEXP = {
  phone: /(84|0|[3|5|7|8|9])+([0-9]{8})\b/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  websiteUrl:
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
  username:
    /((84|0|[3|5|7|8|9])+([0-9]{8})\b)|(^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
}

const ERROR_MESSAGE = {
  required: 'This field is required',
  regexp: 'This field not like format',
}

export const validate = (rules, forms) => {
  const errorObject = {}
  for (let name in rules) {
    for (let rule of rules[name]) {
      if (rule.required && !forms[name]?.trim()) {
        errorObject[name] = rule.message || ERROR_MESSAGE.required
      }

      let regexp = rule.regexp
      if (forms[name]?.trim() && regexp) {
        if (regexp in REGEXP) {
          regexp = REGEXP[regexp]
        }

        if (!(regexp instanceof RegExp)) {
          regexp = new RegExp()
        }

        if (!regexp.test(forms[name])) {
          errorObject[name] = rule.message || ERROR_MESSAGE.regexp
        }
      }
    }
  }

  return errorObject
}

export const required = (message) => ({
  message,
  required: true,
})

export const regexp = (pattern, message) => ({
  regexp: pattern,
  message,
})
