import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ShoopingCartContext } from '../../../contexts/ShoopingCartContext'
import { priceFormatter } from '../../../utils/priceFormatter'
import { AmountInputCheckout } from './AmountInputCheckout'

interface Coffee {
  id: string
  description: string
  name: string
  imageUrl: string
  price: number
  amount: number
}

interface CoffeeCardCheckoutProps {
  data: Coffee
}

export function CoffeeCardCheckout({ data }: CoffeeCardCheckoutProps) {
  const { removeCoffeeAtCheckout } = useContext(ShoopingCartContext)

  function handleRemoveCoffee(coffeeId: string) {
    removeCoffeeAtCheckout(coffeeId)
  }

  return (
    <li
      key={data.id}
      className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-6"
    >
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src={data.imageUrl}
            alt=""
            width={64}
            height={64}
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span>{data.name}</span>
          <div className="flex items-center justify-start gap-4">
            <AmountInputCheckout coffeeId={data.id} amount={data.amount} />

            <button
              onClick={() => handleRemoveCoffee(data.id)}
              className="flex items-center justify-center p-2 gap-1 rounded-lg bg-gray-400 hover:bg-gray-500"
            >
              <Trash size={16} className="text-purple-500" />
              Remover
            </button>
          </div>
        </div>
      </div>

      <strong>{priceFormatter(data.price)}</strong>
    </li>
  )
}
