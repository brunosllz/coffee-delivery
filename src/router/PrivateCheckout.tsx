import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { ShoopingCartContext } from '../contexts/ShoopingCartContext'

export function PrivateCheckout() {
  const { selectedCoffies } = useContext(ShoopingCartContext)

  const hasCoffieAtShoopingCart = selectedCoffies.length > 0

  return hasCoffieAtShoopingCart ? <Outlet /> : <Navigate to="/" />
}
