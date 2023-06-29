import React, { memo } from 'react'

export const Field = memo(
  ({ label, required, type = 'text', renderInput, error, errorPosition = '230px', ...rest }) => {
    console.log('field re-render', rest.value)
    return (
      <label className="relative">
        <p>
          {label}
          {required && <span>*</span>}
        </p>
        {renderInput ? renderInput?.(rest) : <input {...rest} type={type} />}
        {error && (
          <span
            className={`absolute top-full text-red-600 italic text-[11px]`}
            style={{ left: errorPosition }}
          >
            {error}
          </span>
        )}
      </label>
    )
  },
  (oldProps, newProps) => {
    return oldProps.value === newProps.value && oldProps.error === newProps.error
  }
)
