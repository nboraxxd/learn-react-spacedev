import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/AuthContext'
import { Provider } from 'react-redux'
import store from '@/stores'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      {/* <AuthProvider> */}
      <App />
      {/* </AuthProvider> */}
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>,
)
