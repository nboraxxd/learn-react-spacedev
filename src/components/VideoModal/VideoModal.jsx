import React from 'react'
import { createPortal } from 'react-dom'

export const VideoModal = ({ maskCloseTable, visible, onClose }) => {
  if (!visible) return null

  const onMaskClick = () => {
    if (maskCloseTable) onClose?.()
  }

  return createPortal(
    <div className="popup-video" onClick={onMaskClick}>
      <div className="wrap">
        <iframe
          width="840"
          height="472.5"
          src="https://www.youtube.com/embed/FN7ALfpGxiI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>

      <div className="close" onClick={onClose} />
    </div>,
    document.body
  )
}
