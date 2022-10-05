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
    <div className="w-[72px] h-[38px] rounded-md bg-gray-300 flex items-center group">
      <button
        type="button"
        onClick={handleDecrementAmount}
        className="w-full group"
      >
        <Minus />
      </button>
      <input
        readOnly
        value={amount}
        className="w-[20px] h-[38px] bg-gray-300 group-focus:ring-1 group-focus:ring-yellow-500"
        type="number"
      />
      <button type="button" onClick={handleIncrementAmount} className="w-full">
        <Plus />
      </button>
    </div>
  )
}
