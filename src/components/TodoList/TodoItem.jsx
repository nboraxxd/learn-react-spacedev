import React from 'react'

import styled from 'styled-components'
import { HiOutlineCheck } from 'react-icons/hi'
import { RiArrowGoBackLine } from 'react-icons/ri'

const ListWrapperStyle = styled.section`
  width: 50%;
  padding: 15px 10px;

  .list__title {
    font-size: 24px;
    letter-spacing: 0.1rem;
    text-align: center;
  }

  .list__main {
    margin-top: 20px;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-top: 15px;
    border: 1px solid #eee;
    border-radius: 4px;
    color: #666;
  }

  .item__task {
    font-size: 18px;
  }

  .item__icon {
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 4px;
    background: #eee;
    cursor: pointer;
  }

  .completed {
    background: #eee;

    .item__task {
      text-decoration: line-through;
    }

    .item__icon {
      background: #fff;
    }
  }
`

const TodoItem = ({ title, todoList, setTodoList }) => {
  function _handleOnClickIconTask(idTask) {
    if (!idTask) return

    setTodoList((prevTodoList) =>
      prevTodoList.map((todoItem) => {
        console.log(prevTodoList)
        if (todoItem.id === idTask) {
          return {
            ...todoItem,
            isCompleted: !todoItem.isCompleted,
          }
        }
        return todoItem
      })
    )
  }

  return (
    <>
      <ListWrapperStyle>
        <h2 className="list__title">{title}</h2>
        <ul className="list__main">
          {todoList.map((item) => (
            <li key={item.id} className="item">
              <p className="item__task">{item.task}</p>
              {!item.isCompleted ? (
                <HiOutlineCheck
                  className="item__icon"
                  onClick={() => _handleOnClickIconTask(item.id)}
                />
              ) : (
                <RiArrowGoBackLine
                  className="item__icon"
                  onClick={() => _handleOnClickIconTask(item.id)}
                />
              )}
            </li>
          ))}
        </ul>
      </ListWrapperStyle>
    </>
  )
}

export default TodoItem
