import { createContext, ReactNode, useState } from 'react'

interface Coffee {
  id: string
  description: string
  name: string
  imageUrl: string
  price: number
  amount: number
}

interface AddCoffeeToShoopingCartData {
  data: Coffee
}

interface UpdatedAmountCoffeeAtCheckout {
  data: Coffee[]
}

interface ShoopingCartContextProps {
  addCoffeetoShoopingCart: (data: AddCoffeeToShoopingCartData) => void
  selectedCoffies: Coffee[]
  updateAmountCoffeeAtCheckout: (data: UpdatedAmountCoffeeAtCheckout) => void
  removeCoffeeAtCheckout: (coffeeId: string) => void
}

export const ShoopingCartContext = createContext({} as ShoopingCartContextProps)

interface ShoopingCartProviderProps {
  children: ReactNode
}

export function ShoopingCartProvider({ children }: ShoopingCartProviderProps) {
  const [selectedCoffies, setSelectedCoffies] = useState<Coffee[]>([])

  function addCoffeetoShoopingCart({ data }: AddCoffeeToShoopingCartData) {
    const addCoffee = selectedCoffies.map((coffee) => {
      return { ...coffee }
    })

    const searchCoffee = addCoffee.find((coffee) => coffee.id === data.id)

    if (searchCoffee) {
      searchCoffee.amount += data.amount

      return setSelectedCoffies(addCoffee)
    }
    const NewCoffee = { ...data }

    setSelectedCoffies((state) => {
      return [...state, NewCoffee]
    })
  }

  function updateAmountCoffeeAtCheckout({
    data,
  }: UpdatedAmountCoffeeAtCheckout) {
    setSelectedCoffies(data)
  }

  function removeCoffeeAtCheckout(coffeeId: string) {
    const deleteCoffee = selectedCoffies.filter(
      (coffee) => coffee.id !== coffeeId,
    )

    setSelectedCoffies(deleteCoffee)
  }

  return (
    <ShoopingCartContext.Provider
      value={{
        addCoffeetoShoopingCart,
        selectedCoffies,
        updateAmountCoffeeAtCheckout,
        removeCoffeeAtCheckout,
      }}
    >
      {children}
    </ShoopingCartContext.Provider>
  )
}
