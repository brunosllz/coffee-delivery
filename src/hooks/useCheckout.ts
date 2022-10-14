import { useContext, useMemo } from 'react'
import { ShoopingCartContext } from '../contexts/ShoopingCartContext'

export function useCheckout() {
  const { selectedCoffies } = useContext(ShoopingCartContext)

  const checkoutValue = useMemo(() => {
    return selectedCoffies.reduce(
      (acc, coffee) => {
        acc.totalItens += coffee.price * coffee.amount

        return acc
      },
      {
        totalItens: 0,
      },
    )
  }, [selectedCoffies])

  return checkoutValue
}
