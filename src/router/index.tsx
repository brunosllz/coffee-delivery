import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { DefaultLayout } from '../layout/DefaultLayout'
import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { SuccessCheckout } from '../pages/SuccessCheckout'
import { PrivateCheckout } from './PrivateCheckout'

export function Router() {
  const { state } = useLocation()

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateCheckout />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route
          path="/checkout/success"
          element={!state ? <Navigate to="/" replace /> : <SuccessCheckout />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
