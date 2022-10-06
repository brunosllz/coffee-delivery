import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { SuccessCheckout } from './pages/SuccessCheckout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success/:id" element={<SuccessCheckout />} />
      </Route>
    </Routes>
  )
}
