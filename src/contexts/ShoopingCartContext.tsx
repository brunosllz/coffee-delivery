import { createContext, ReactNode, useState } from 'react'

interface AddItemtoShoopingCartData {
  id: string
  amount: number
  name: string
  imageUrl: string
  price: number
}

interface ShoopingCartContextProps {
  addItemtoShoopingCart: (data: any) => void
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
  console.log(selectedCoffies)

  function addItemtoShoopingCart(data: any) {
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
