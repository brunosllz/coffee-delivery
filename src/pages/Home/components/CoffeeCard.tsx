import { useContextSelector } from 'use-context-selector'
import { useForm, FormProvider } from 'react-hook-form'
import { ShoopingCartContext } from '../../../contexts/ShoopingCartContext'
import z from 'zod'

import { AmountInput } from './AmountInput'

import { ShoppingCartSimple } from 'phosphor-react'
import { priceFormatter } from '../../../utils/priceFormatter'

interface Tag {
  id: string
  name: string
}

interface Coffee {
  id: string
  description: string
  name: string
  imageUrl: string
  price: number
}

interface CoffeeCardProps {
  coffee: Coffee
  tags: Tag[]
}

const addCoffeeToCardSchema = z.object({
  amount: z.number(),
})

type addCoffeeToCardType = z.infer<typeof addCoffeeToCardSchema>

export function CoffeeCard({ coffee, tags }: CoffeeCardProps) {
  const addCoffeetoShoopingCart = useContextSelector(
    ShoopingCartContext,
    (context) => {
      return context.addCoffeetoShoopingCart
    },
  )
  const addCoffeeToCard = useForm<addCoffeeToCardType>({
    defaultValues: { amount: 1 },
  })

  const { register, handleSubmit, reset } = addCoffeeToCard

  function handleAddCoffeeToCart({ amount }: addCoffeeToCardType) {
    const selectedCoffee = { ...coffee, amount }

    addCoffeetoShoopingCart({ data: selectedCoffee })

    reset()
  }

  return (
    <div className="flex flex-col w-[256px] bg-gray-200 px-6 py-5 rounded-bl-[32px] rounded-br-md rounded-tl-md rounded-tr-[32px] ">
      <div className=" flex items-center justify-center -mt-[38px] ">
        <img
          src={coffee.imageUrl}
          alt=""
          width={120}
          height={120}
          className="object-cover"
        />
      </div>

      <div className="w-full flex gap-1 items-center justify-center mt-3">
        {tags.map((tag) => {
          return (
            <div
              key={tag.id}
              className="py-1 px-2 bg-yellow-300 rounded-full flex items-center justify-center"
            >
              <strong className="text-[0.625rem] text-yellow-700 uppercase">
                {tag.name}
              </strong>
            </div>
          )
        })}
      </div>

      <div className="flex flex-col items-center justify-center mt-4">
        <strong className="font-baloo font-bold text-xl">{coffee.name}</strong>
        <span className="text-sm text-center text-brown-300">
          {coffee.description}
        </span>
      </div>

      <footer className="flex items-center justify-between mt-8">
        <span className="text-sm">
          R${' '}
          <strong className="text-2xl font-baloo font-extrabold">
            {priceFormatter(coffee.price)}
          </strong>
        </span>
        <form
          onSubmit={handleSubmit(handleAddCoffeeToCart)}
          className="flex items-center gap-2 group-focus:ring-1 group-focus:ring-yellow-500"
        >
          <FormProvider {...addCoffeeToCard}>
            <AmountInput {...register('amount')} />
          </FormProvider>

          <button className="flex h-[38px] w-[38px]  text-white items-center justify-center rounded-md bg-purple-700 hover:bg-purple-500 transition-colors">
            <ShoppingCartSimple size={18} weight="fill" />
          </button>
        </form>
      </footer>
    </div>
  )
}
