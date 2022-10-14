import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { ShoopingCartContext } from '../contexts/ShoopingCartContext'

export function useCheckout() {
  const selectedCoffies = useContextSelector(ShoopingCartContext, (context) => {
    return context.selectedCoffies
  })

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
