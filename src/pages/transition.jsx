import { Input } from '@/components/Input'
import { useDebounce } from '@/hooks/useDebounce'
import React, {
  startTransition,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from 'react'

const Transition = () => {
  // const [value, setValue] = useDebounce('', 500)
  // useEffect(() => {
  //   console.log('call API', value)
  // }, [value])
  const [value, setValue] = useState('')
  // const [isPending, startTransition] = useTransition()

  return (
    <main className="auth register-course">
      <div className="wrap">
        <div className="ct_login">
          <h2 className="title">Search</h2>
          <Input
            value={value}
            onChange={
              (ev) =>
                // startTransition(() => {
                setValue(ev.target.value)
              // })
            }
            className="mb-5"
            placeholder="Search..."
          />
        </div>
        {/* {isPending && <div>Rendering...</div>} */}
        <List value={value} />
      </div>
    </main>
  )
}

const List = ({ value }) => {
  const _value = useDeferredValue(value)

  const list = useMemo(() => {
    const _list = []
    for (let i = 0; i < 10000; i++) {
      _list.push(<div key={i}>{value}</div>)
    }
    return _list
  }, [_value])

  return list
}

export default Transition
