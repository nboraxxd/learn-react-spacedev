import { useState } from 'react'
import { validate } from '../utils/validate'

/**
 * @param {*} rules
 * @returns values, errors, register, validate
 */
export const useForm = (rules, initialValues = {}) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setError] = useState({})

  const register = (name) => {
    return {
      error: errors[name],
      value: values[name] || '',
      onChange: (event) => setValues({ ...values, [name]: event.target.value }),
    }
  }

  const _validate = () => {
    const errorObject = validate(rules, values)
    setError(errorObject)

    return Object.keys(errorObject).length === 0
  }

  const reset = () => {
    setValues({})
  }

  return {
    values,
    errors,
    register,
    validate: _validate,
    reset,
  }
}
