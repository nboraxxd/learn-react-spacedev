import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { styled } from 'styled-components'

const ErrorSpan = styled.span`
  position: absolute;
  left: 230px;
  top: 100%;
  color: red;
  font-style: italic;
  font-size: 11px;
`

export const Field = forwardRef(
  ({ label, required, type = 'text', renderInput, error, ...props }, ref) => {
    const inputRef = useRef()
    useImperativeHandle(
      ref,
      () => {
        return {
          setValue: (value) => {
            inputRef.current.value = value
          },
        }
      },
      []
    )

    return (
      <label className="relative">
        <p>
          {label}
          {required && <span>*</span>}
        </p>
        {renderInput ? renderInput?.(props) : <input ref={inputRef} {...props} type={type} />}
        {error && <ErrorSpan>{error}</ErrorSpan>}
      </label>
    )
  }
)
