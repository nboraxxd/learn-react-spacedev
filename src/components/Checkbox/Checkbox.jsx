import React from 'react'

export const Checkbox = ({ onChange, value, error, children }) => {
  const _onChange = (ev) => {
    onChange({ target: { value: ev.target.checked } })
  }

  return (
    <>
      <div className="check-container">
        {children}
        {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
        {/* Cần ít nhất 200 COIN để giảm giá */}
        <input onChange={_onChange} checked={value} type="checkbox" />
        <span className="checkmark" />
      </div>
      {error && <span className="absolute top-full left-0 text-red-600 text-xs">{error}</span>}
    </>
  )
}
