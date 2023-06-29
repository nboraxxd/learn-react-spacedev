import React, { forwardRef } from 'react'

export const Input = forwardRef(({ type = 'text', error, ...props }, ref) => {
  return (
    <div className={`relative mb-[30px] ${props.className}  ?? ''`}>
      <input ref={ref} type={type} {...props} />
      {error && <span className="absolute top-full left-0 text-red-600 text-xs">{error}</span>}
    </div>
  )
})
