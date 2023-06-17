import React from 'react'
import { ButtonStyle } from './style'

export const Button = ({ loading, children }) => {
  return (
    <ButtonStyle disabled={loading} className="btn main rect">
      {loading && (
        <span class=" inline-block w-[20px] h-[20px] mr-2 border-[3px] border-solid border-white border-b-transparent rounded-[50%] animate-spin"></span>
      )}
      {children}
    </ButtonStyle>
  )
}