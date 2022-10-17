import { useContextSelector } from 'use-context-selector'
import { ShoopingCartContext } from '../../../contexts/ShoopingCartContext'

import { Minus, Plus } from 'phosphor-react'
import { useCallback } from 'react'

interface AmountInputCheckoutProps {
  coffeeId: string
  amount: number
}

export function AmountInputCheckout({
  coffeeId,
  amount,
}: AmountInputCheckoutProps) {
  const { selectedCoffies, updateAmountCoffeeAtCheckout } = useContextSelector(
    ShoopingCartContext,
    (context) => {
      return context
    },
  )

  const handleIncrementAmount = useCallback(() => {
    const updateCoffee = selectedCoffies.map((coffee) => {
      return { ...coffee }
    })
    const searchCoffee = updateCoffee.find((coffee) => coffee.id === coffeeId)

    if (searchCoffee) {
      searchCoffee.amount += 1

      updateAmountCoffeeAtCheckout({ data: updateCoffee })
    }
  }, [coffeeId, selectedCoffies, updateAmountCoffeeAtCheckout])

  const handleDecrementAmount = useCallback(() => {
    const updateCoffee = selectedCoffies.map((coffee) => {
      return { ...coffee }
    })
    const searchCoffee = updateCoffee.find((coffee) => coffee.id === coffeeId)

    if (searchCoffee) {
      if (searchCoffee.amount !== 1) {
        searchCoffee.amount -= 1
        updateAmountCoffeeAtCheckout({ data: updateCoffee })
      }
    }
  }, [coffeeId, selectedCoffies, updateAmountCoffeeAtCheckout])

  return (
    <div className="w-[72px] h-[38px] rounded-md bg-gray-300 flex items-center">
      <button
        type="button"
        onClick={handleDecrementAmount}
        className="w-full flex items-center justify-center text-purple-500 hover:text-purple-700 transition-colors focus:ring-0"
      >
        <Minus />
      </button>
      <span className="w-[20px] h-[38px] bg-gray-300 leading-none flex items-center">
        {amount}
      </span>
      <button
        type="button"
        onClick={handleIncrementAmount}
        className="w-full flex items-center justify-center text-purple-500 hover:text-purple-700 transition-colors focus:ring-0"
      >
        <Plus />
      </button>
    </div>
  )
}
