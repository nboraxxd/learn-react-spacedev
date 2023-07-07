import { useRoutes } from 'react-router-dom'
import { routers } from './routers'
import './assets/css/tailwind.css'
import './assets/css/custom.css'
import { Suspense } from 'react'
import '@/stores'

function App() {
  const element = useRoutes(routers)

  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
}

export default App
