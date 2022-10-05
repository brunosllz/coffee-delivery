import { useContext } from 'react'
import { ShoopingCartContext } from '../../../contexts/ShoopingCartContext'

import { Minus, Plus } from 'phosphor-react'

interface AmountInputCheckoutProps {
  coffeeId: string
  amount: number
}

export function AmountInputCheckout({
  coffeeId,
  amount,
}: AmountInputCheckoutProps) {
  const { selectedCoffies, updateAmountCoffeeAtCheckout } =
    useContext(ShoopingCartContext)

  function handleIncrementAmount() {
    const updateCoffee = selectedCoffies.map((coffee) => {
      return { ...coffee }
    })
    const searchCoffee = updateCoffee.find((coffee) => coffee.id === coffeeId)

    if (searchCoffee) {
      searchCoffee.amount += 1

      updateAmountCoffeeAtCheckout({ data: updateCoffee })
    }
  }

  function handleDecrementAmount() {
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
  }

  return (
    <div className="w-[72px] h-[38px] rounded-md bg-gray-300 flex items-center">
      <button
        type="button"
        onClick={handleDecrementAmount}
        className="w-full flex items-center justify-center text-purple-500 hover:text-purple-700 transition-colors focus:ring-0"
      >
        <Minus />
      </button>
      <input
        readOnly
        value={amount}
        className="w-[20px] h-[38px] bg-gray-300 text-center"
        type="number"
      />
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
