import { useAuth } from '@/components/AuthContext'
import { Button } from '@/components/Button'
import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { Field } from '../components/Field'

/**
 *
 * Cách 1: Lưu trữ giá trị không bị thay đổi sau mỗi component re-render
 *
 * Cách 2: Selector HTML DOM
 *
 * Cách 3: forwardRef
 *
 * Cách 4: forwardRef và useImperativeHandle -> Trả ra 1 thể hiện khác của Ref
 *
 */
const fibonacci = (n) => {
  console.log('expensiveCalculation')
  if (n < 3) return 1
  return fibonacci(n - 2) + fibonacci(n - 1)
}

const DemoRef = () => {
  const {} = useAuth()
  console.log('re-render')

  // const [render, setRender] = useState(0)
  const [count, setCount] = useState(0)

  const fi = useMemo(() => {
    return fibonacci(count)
  }, [count])

  const onClick = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setRender((prev) => prev + 1)
  //   }, 100)
  //   return () => {
  //     clearInterval(timerId)
  //   }
  // }, [])

  return (
    <main id="main">
      <div className="register-course">
        <section className="section-1 wrap container">
          {/* <div class="main-sub-title">liên hệ</div> */}
          <h2 className="main-title">HỢP TÁC CÙNG Spacedev</h2>
          {/* Render: {render} <br /> */}
          Count: {count} <br />
          Fibonacci: {fi} <br />
          <Button onClick={onClick}>Increase</Button>
        </section>
      </div>
    </main>
  )
}

export default DemoRef
