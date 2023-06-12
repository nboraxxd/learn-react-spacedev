import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { v4 as uuidv4 } from 'uuid'
import { TodoItem } from './'

const InputFormStyle = styled.section`
  padding: 20px 0;
  h1 {
    font-size: 28px;
    letter-spacing: 0.3rem;
    text-align: center;
  }

  .input__group {
    position: relative;
    display: flex;
    max-width: 400px;
    margin: 40px auto 0;

    input {
      flex: 1;
      padding: 10px 20px;
      outline: none;
      border: 1px solid #eee;
      border-radius: 8px;
    }

    button {
      min-width: 70px;
      padding: 10px 20px;
      margin-left: 10px;
      outline: none;
      border-radius: 8px;
      background: #eee;
      color: #666;
      transition: all 0.25s ease-in-out;
    }

    button:hover {
      background: #ddd;
    }

    button:disabled {
      background: #ebebeb;
    }
  }
`

const TodoMainStyle = styled.div`
  display: flex;
  gap: 15px;
  max-width: 700px;
  margin: 0 auto;
`

const TodoList = () => {
  const STORE_KEY = 'TO_DO_APP'

  const [todoList, setTodoList] = useState(() => {
    const storedTodoList = localStorage.getItem(STORE_KEY)
    return storedTodoList ? JSON.parse(storedTodoList) : []
  })
  const inputRef = useRef(null)

  const FormSchema = Yup.object().shape({
    inputTask: Yup.string().required('This field is required'),
  })

  function handleOnSubmit(values, actions) {
    const inputValue = values.inputTask
    const newTodoItem = {
      id: uuidv4(),
      task: inputValue,
      isCompleted: false,
    }

    setTodoList([...todoList, newTodoItem])
    actions.resetForm({ values: { inputTask: '' } })
    inputRef.current.blur()
  }

  useEffect(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(todoList))
  }, [todoList])

  console.log(todoList)

  return (
    <>
      <InputFormStyle>
        <h1>TODO LIST</h1>
        <Formik
          initialValues={{ inputTask: '' }}
          validationSchema={FormSchema}
          onSubmit={(values, actions) => handleOnSubmit(values, actions)}
        >
          {({ values }) => {
            return (
              <Form className="input__group">
                <Field
                  type="text"
                  placeholder="What are you going to do today?"
                  name="inputTask"
                  innerRef={inputRef}
                  autoComplete="off"
                />
                <ErrorMessage
                  name="inputTask"
                  component="p"
                  className="absolute left-[5px] -bottom-[18px] h-4 px-1 mt-[2px] text-[#E74C3C] font-normal text-xs"
                />

                <button type="submit" disabled={!values.inputTask.trim()}>
                  Add
                </button>
              </Form>
            )
          }}
        </Formik>
      </InputFormStyle>

      <TodoMainStyle>
        <TodoItem
          title="DOING"
          todoList={todoList.filter((item) => !item.isCompleted)}
          setTodoList={setTodoList}
        />
        <TodoItem
          title="DONE"
          todoList={todoList.filter((item) => item.isCompleted)}
          setTodoList={setTodoList}
        />
      </TodoMainStyle>
    </>
  )
}

export default TodoList
