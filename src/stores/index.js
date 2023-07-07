import { combineReducers, createStore } from 'redux'
import authReducer from './authReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  auth: authReducer,
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
