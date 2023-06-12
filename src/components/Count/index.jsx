import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const CountStyle = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin: 10px auto;
  background: #6a5af9;
  color: #fff;
  font-size: 50px;
`

const CountButtonStyle = styled.button`
  width: 80px;
  height: 80px;
  background: #20e3b2;
`

export const Count = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('interval', count)
      setCount(count + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [count])

  return (
    <CountStyle>
      <CountButtonStyle onClick={() => setCount(count - 1)}>-</CountButtonStyle>
      <div className="count">{count}</div>
      <CountButtonStyle onClick={() => setCount(count + 1)}>+</CountButtonStyle>
    </CountStyle>
  )
}
