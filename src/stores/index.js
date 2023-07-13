import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  auth: authReducer,
})

const logMiddleware = (store) => (next) => (action) => {
  // console.log(store, next, action)
  next(action)
}

const thunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch)
  }

  next(action)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logMiddleware, thunk)))

export default store
