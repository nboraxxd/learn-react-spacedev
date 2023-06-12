import './assets/css/tailwind.css'
import Footer from './components/Footer/Footer'
import { Header } from './components/Header'
import { ContactPage, RegisterPage } from './pages'

function App() {
  return (
    <>
      <Header />
      {/* <ContactPage /> */}
      <RegisterPage />
      <Footer />
    </>
  )
}

export default App
