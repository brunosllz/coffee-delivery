import { createContext, ReactNode, useState } from 'react'

interface CoffeeAmount {
  id: string
  amount: number
}

interface AddItemtoShoopingCartData {
  id: string
  description: string
  name: string
  imageUrl: string
  price: number
  coffeeAmount: CoffeeAmount
}

interface UpdateCoffeeCheckout {
  id: string
  description: string
  name: string
  imageUrl: string
  price: number
  coffeeAmount: CoffeeAmount
}

interface ShoopingCartContextProps {
  addItemtoShoopingCart: (data: AddItemtoShoopingCartData) => void
  selectedCoffies: AddItemtoShoopingCartData[]
  updateAmountCoffeeAtCheckout: (data: UpdateCoffeeCheckout[]) => void
  removeCoffeeatCheckout: (coffeeId: string) => void
}

export const ShoopingCartContext = createContext({} as ShoopingCartContextProps)

interface ShoopingCartProviderProps {
  children: ReactNode
}

export function ShoopingCartProvider({ children }: ShoopingCartProviderProps) {
  const [selectedCoffies, setSelectedCoffies] = useState<
    AddItemtoShoopingCartData[]
  >([])

  function addItemtoShoopingCart(data: AddItemtoShoopingCartData) {
    const addCoffee = selectedCoffies.map((coffee) => {
      return { ...coffee }
    })

    const searchCoffee = addCoffee.find((coffee) => coffee.id === data.id)

    if (searchCoffee) {
      searchCoffee!.coffeeAmount.amount += data.coffeeAmount.amount

      return setSelectedCoffies(addCoffee)
    }

    setSelectedCoffies((state) => [...state, data])
  }

  function updateAmountCoffeeAtCheckout(data: UpdateCoffeeCheckout[]) {
    setSelectedCoffies(data)
  }

  function removeCoffeeatCheckout(coffeeId: string) {
    const deleteCoffee = selectedCoffies.filter(
      (coffee) => coffee.id !== coffeeId,
    )

    setSelectedCoffies(deleteCoffee)
  }

  return (
    <ShoopingCartContext.Provider
      value={{
        addItemtoShoopingCart,
        selectedCoffies,
        updateAmountCoffeeAtCheckout,
        removeCoffeeatCheckout,
      }}
    >
      {children}
    </ShoopingCartContext.Provider>
  )
}
