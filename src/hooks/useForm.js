import { useState } from 'react'
import { validate } from '../utils/validate'

/**
 * @param {*} rules
 * @returns values, errors, register, validate
 */
export const useForm = (rules) => {
  const [values, setForm] = useState({})
  const [errors, setError] = useState({})

  const register = (name) => {
    return {
      error: errors[name],
      value: values[name] || '',
      onChange: (event) => setForm({ ...values, [name]: event.target.value }),
    }
  }

  const _validate = () => {
    const errorObject = validate(rules, values)
    setError(errorObject)

    return Object.keys(errorObject).length === 0
  }

  return {
    values,
    errors,
    register,
    validate: _validate,
  }
}
