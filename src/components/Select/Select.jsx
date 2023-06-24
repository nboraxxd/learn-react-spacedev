import React, { useEffect, useState } from 'react'

export const Select = ({ value, onChange, error, placeholder, options }) => {
  const [open, setOpen] = useState(false)
  const [label, setLabel] = useState(() => {
    return options.find((e) => e.value === value)
  })

  useEffect(() => {
    const onClose = () => setOpen(false)
    window.addEventListener('click', onClose)

    return () => {
      window.removeEventListener('click', onClose)
    }
  }, [])

  const onOpen = (ev) => {
    ev.stopPropagation()
    setOpen(true)
  }

  const _onChange = (index) => (ev) => {
    ev.preventDefault()
    setLabel(options[index].label)
    onChange?.({ target: { value: options[index].value } })
  }

  return (
    <>
      <div className="select">
        <div className="head" onClick={onOpen}>
          {label || placeholder}
        </div>
        <div className="sub" style={{ display: open ? 'block' : 'none' }}>
          {options.map((item, index) => (
            <a key={item.value} href="#" onClick={_onChange(index)}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
      {error && <span className="absolute top-full left-0 text-red-600 text-xs">{error}</span>}
    </>
  )
}
