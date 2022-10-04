import { BrowserRouter } from 'react-router-dom'
import { ShoopingCartProvider } from './contexts/ShoopingCartContext'

import { Router } from './Router'

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
