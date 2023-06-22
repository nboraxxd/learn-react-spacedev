import React from 'react'

export const Field = ({
  label,
  required,
  type = 'text',
  renderInput,
  error,
  errorPosition = '230px',
  ...props
}) => (
  <label className="relative">
    <p>
      {label}
      {required && <span>*</span>}
    </p>
    {renderInput ? renderInput?.(props) : <input {...props} type={type} />}
    {error && <span className={`absolute left-[${errorPosition}] top-full text-red-600 italic text-[11px]`}>{error}</span>}
  </label>
)
