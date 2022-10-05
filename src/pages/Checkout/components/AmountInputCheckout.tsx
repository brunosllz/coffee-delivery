import { useContext } from 'react'

import { Minus, Plus } from 'phosphor-react'
import { ShoopingCartContext } from '../../../contexts/ShoopingCartContext'

// interface InputUncontrollerProps extends ComponentPropsWithoutRef<'input'> {
//   name: string
// }

interface InputProps {
  coffeeId: string
  amount: number
}

export function AmountInputCheckout({ coffeeId, amount }: InputProps) {
  const { selectedCoffies, updateAmountCoffeeAtCheckout } =
    useContext(ShoopingCartContext)

  function handleIncrementAmount() {
    const updateCoffee = selectedCoffies.map((coffee) => {
      return { ...coffee }
    })
    const searchCoffee = updateCoffee.find((coffee) => coffee.id === coffeeId)

    if (searchCoffee) {
      searchCoffee.coffeeAmount.amount += 1

      updateAmountCoffeeAtCheckout(updateCoffee)
    }
  }

  function handleDecrementAmount() {
    const updateCoffee = selectedCoffies.map((coffee) => {
      return { ...coffee }
    })
    const searchCoffee = updateCoffee.find((coffee) => coffee.id === coffeeId)

    if (searchCoffee) {
      if (searchCoffee.coffeeAmount.amount !== 1) {
        searchCoffee.coffeeAmount.amount -= 1
        updateAmountCoffeeAtCheckout(updateCoffee)
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
