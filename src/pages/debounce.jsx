import { Input } from '@/components/Input'
import { useDebounce } from '@/hooks/useDebounce'
import React, { useEffect } from 'react'

const Debounce = () => {
  const [value, setValue] = useDebounce('', 500)

  useEffect(() => {
    console.log('call API', value)
  }, [value])

  return (
    <main className="auth register-course">
      <div className="wrap">
        <div className="ct_login">
          <h2 className="title">Search</h2>
          <Input
            onChange={(ev) => setValue(ev.target.value)}
            className="mb-5"
            placeholder="Search..."
          />
        </div>
      </div>
    </main>
  )
}

export default Debounce
