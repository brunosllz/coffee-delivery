import { BrowserRouter } from 'react-router-dom'
import { ShoopingCartProvider } from './contexts/ShoopingCartContext'

import { Router } from './router'

function App() {
  return (
    <BrowserRouter>
      <ShoopingCartProvider>
        <Router />
      </ShoopingCartProvider>
    </BrowserRouter>
  )
}

export default App
