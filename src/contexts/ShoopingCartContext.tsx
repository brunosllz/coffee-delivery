import { createContext, ReactNode, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

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
  clearShoopingCart: () => void
}

export const ShoopingCartContext = createContext({} as ShoopingCartContextProps)

interface ShoopingCartProviderProps {
  children: ReactNode
}

export function ShoopingCartProvider({ children }: ShoopingCartProviderProps) {
  const [selectedCoffies, setSelectedCoffies] = useState<Coffee[]>(() => {
    const selectedCoffiesStorage = localStorage.getItem(
      '@coffee-delivery:selectedCoffies',
    )

    if (selectedCoffiesStorage) {
      return JSON.parse(selectedCoffiesStorage)
    }

    return []
  })

  function addCoffeetoShoopingCart({ data }: AddCoffeeToShoopingCartData) {
    const addCoffee = selectedCoffies.map((coffee) => {
      return { ...coffee }
    })

    const searchCoffee = addCoffee.find((coffee) => coffee.id === data.id)

    if (searchCoffee) {
      searchCoffee.amount += data.amount

      toast.success('Item adionado ao carrinho', { autoClose: 500 })
      return setSelectedCoffies(addCoffee)
    }
    const NewCoffee = { ...data }

    setSelectedCoffies((state) => {
      return [...state, NewCoffee]
    })
    toast.success('Item adionado ao carrinho', { autoClose: 500 })
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

  function clearShoopingCart() {
    setSelectedCoffies([])
  }

  useEffect(() => {
    const selectedCoffiesJSON = JSON.stringify(selectedCoffies)

    localStorage.setItem(
      '@coffee-delivery:selectedCoffies',
      selectedCoffiesJSON,
    )
  }, [selectedCoffies])

  return (
    <ShoopingCartContext.Provider
      value={{
        addCoffeetoShoopingCart,
        selectedCoffies,
        updateAmountCoffeeAtCheckout,
        removeCoffeeAtCheckout,
        clearShoopingCart,
      }}
    >
      {children}
    </ShoopingCartContext.Provider>
  )
}
