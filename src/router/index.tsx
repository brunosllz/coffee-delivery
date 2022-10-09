import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layout/DefaultLayout'
import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'
import { SuccessCheckout } from '../pages/SuccessCheckout'
import { PrivateCheckout } from './PrivateCheckout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateCheckout />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/checkout/success" element={<SuccessCheckout />} />
        <Route path="*" />
      </Route>
    </Routes>
  )
}
