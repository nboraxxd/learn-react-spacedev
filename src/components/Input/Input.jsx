import React from 'react'

export const Input = ({ type = 'text', error, ...props }) => {
  return (
    <div className="relative mb-[30px]">
      <input type={type} {...props} />
      {error && <span className="absolute top-full left-0 text-red-600 text-xs">{error}</span>}
    </div>
  )
}
