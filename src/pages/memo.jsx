import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import React, { useMemo, useRef, useState } from 'react'

const Memo = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [productList, setProductList] = useState([
    {
      name: 'computer',
      price: 300,
    },
  ])
  const nameRef = useRef()

  const total = useMemo(() => {
    const _total = productList.reduce((result, productItem) => {
      console.log('total run')
      return result + productItem.price
    }, 0)

    return _total
  }, [productList])

  const onSubmit = () => {
    setProductList([...productList, { name, price: parseInt(price) }])
    setName('')
    setPrice('')
    nameRef.current.focus()
  }

  return (
    <main className="auth register-course pb-[80px]">
      <div className="wrap">
        <h1 className="text-2xl text-center">UseMemo</h1>

        <ul className="p-5">
          {productList.map((productItem, index) => (
            <li
              key={index}
              className="lowercase first-letter:uppercase"
            >{`${productItem.name} - ${productItem.price}$`}</li>
          ))}
        </ul>
        <p className="px-5 mb-5 text-red-600">Total: {total}$</p>
        <div>
          <Input ref={nameRef} value={name} onChange={(e) => setName(e.target.value)} />
          <Input value={price} onChange={(e) => setPrice(e.target.value)} />
          <Button onClick={onSubmit}>Submit</Button>
        </div>
      </div>
    </main>
  )
}

export default Memo
