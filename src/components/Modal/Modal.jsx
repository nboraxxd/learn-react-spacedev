import React from 'react'
import { createPortal } from 'react-dom'

export const Modal = ({ maskCloseTable, visible, onClose, children }) => {
  if (!visible) return null

  const onMaskClick = () => {
    if (maskCloseTable) onClose?.()
  }

  return createPortal(
    <div className="popup-video" onClick={onMaskClick}>
      <div className="wrap">{children}</div>

      <div className="close" onClick={onClose} />
    </div>,
    document.body
  )
}
