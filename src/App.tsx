import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ShoopingCartProvider } from './contexts/ShoopingCartContext'

import { Router } from './router'

import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <BrowserRouter>
      <ShoopingCartProvider>
        <Router />
        <ToastContainer />
      </ShoopingCartProvider>
    </BrowserRouter>
  )
}

export default App
