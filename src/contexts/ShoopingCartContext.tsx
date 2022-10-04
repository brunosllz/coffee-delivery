import { createContext, ReactNode, useState } from 'react'

interface AddItemtoShoopingCartData {
  id: string
  amount: number
  description: string
  name: string
  imageUrl: string
  price: number
}

interface ShoopingCartContextProps {
  addItemtoShoopingCart: (data: AddItemtoShoopingCartData) => void
  selectedCoffies: AddItemtoShoopingCartData[]
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
      searchCoffee!.amount += data.amount

      return setSelectedCoffies(addCoffee)
    }

    setSelectedCoffies((state) => [...state, data])
  }

  return (
    <ShoopingCartContext.Provider
      value={{ addItemtoShoopingCart, selectedCoffies }}
    >
      {children}
    </ShoopingCartContext.Provider>
  )
}
