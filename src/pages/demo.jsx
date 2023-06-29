import React, { createContext, useContext, useState } from 'react'
import { styled } from 'styled-components'
import { Button } from '../components/Button'

const CountContext = createContext({})

const Demo = () => {
  const [count, setCount] = useState(0)

  const onIncre = () => {
    setCount(count + 1)
  }

  const onDecre = () => {
    if (count === 0) return

    setCount(count - 1)
  }

  return (
    <CountContext.Provider value={{ count: 10, onIncre, onDecre }}>
      <div className="p-[100px]">
        <Count />

        <CountContext.Provider value={{ count, onIncre, onDecre }}>
          <Count />
        </CountContext.Provider>
      </div>
    </CountContext.Provider>
  )
}

const CountStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  width: 500px;
  height: 500px;
  padding: 40px;
  border: 1px solid #ccc;
  font-size: 100px;
`

const Count = () => {
  const { count, onIncre, onDecre } = useContext(CountContext)

  const formattedCount = `0${count}`.slice(-2)

  return (
    <CountStyle>
      <Button
        className="flex justify-center items-center pb-2 text-4xl mt-[25px]"
        onClick={onDecre}
      >
        -
      </Button>
      {formattedCount}
      <Button
        className="flex justify-center items-center pb-2 text-4xl mt-[25px]"
        onClick={onIncre}
      >
        +
      </Button>
    </CountStyle>
  )
}

export default Demo
