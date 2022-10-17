import { useContextSelector } from 'use-context-selector'
import { Outlet, Navigate } from 'react-router-dom'
import { ShoopingCartContext } from '../contexts/ShoopingCartContext'

export function PrivateCheckout() {
  const selectedCoffies = useContextSelector(ShoopingCartContext, (context) => {
    return context.selectedCoffies
  })

  const hasCoffieAtShoopingCart = selectedCoffies.length > 0

  return hasCoffieAtShoopingCart ? <Outlet /> : <Navigate to="/" />
}
