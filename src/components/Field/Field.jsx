import React from 'react'
import { styled } from 'styled-components'

const ErrorSpan = styled.span`
  position: absolute;
  left: 230px;
  top: 100%;
  color: red;
  font-style: italic;
  font-size: 11px;
`

const Field = ({ label, required, type = 'text', renderInput, error, ...props }) => {
  return (
    <label className="relative">
      <p>
        {label}
        {required && <span>*</span>}
      </p>
      {renderInput ? renderInput?.(props) : <input {...props} type={type} />}
      {error && <ErrorSpan>{error}</ErrorSpan>}
    </label>
  )
}

export default Field
