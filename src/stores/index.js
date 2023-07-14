import { ENV } from '@/config'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './authReducer'

const rootReducer = combineReducers({
  auth: authReducer,
})

const logMiddleware = (store) => (next) => (action) => {
  next(action)
}

const thunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch)
  }

  next(action)
}

const store = configureStore({
  reducer: { auth: authReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logMiddleware),
  dcevTools: ENV === 'development',
})

export default store
