import { ShoppingCartSimple, Plus, Minus } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ShoopingCartContext } from '../contexts/ShoopingCartContext'
import z from 'zod'

interface Tag {
  id: string
  name: string
}

interface Coffee {
  id: string
  name: string
  imageUrl: string
  description: string
  price: number
  tags: Tag[]
}

interface CoffeeCardProps {
  data: Coffee
}

const addCoffeeToCardSchema = z.object({
  amount: z.number(),
})

type addCoffeeToCardType = z.infer<typeof addCoffeeToCardSchema>

export function CoffeeCard({ data }: CoffeeCardProps) {
  const { addItemtoShoopingCart } = useContext(ShoopingCartContext)
  const { handleSubmit, register } = useForm<addCoffeeToCardType>({
    defaultValues: { amount: 1 },
  })

  async function handleAddCoffeeToCart(dataInput: addCoffeeToCardType) {
    const { amount } = dataInput
    const coffeeSelected = { ...data, amount }

    addItemtoShoopingCart(coffeeSelected)
  }

  return (
    <div className="flex flex-col w-[256px] bg-gray-200 px-6 py-5 rounded-bl-[32px] rounded-br-md rounded-tl-md rounded-tr-[32px] ">
      <div className=" flex items-center justify-center -mt-[38px] ">
        <img
          src={data.imageUrl}
          alt=""
          width={120}
          height={120}
          className="object-cover"
        />
      </div>

      <div className="w-full flex gap-1 items-center justify-center mt-3">
        {data.tags.map((tag) => {
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
        <strong className="font-baloo font-bold text-xl">{data.name}</strong>
        <span className="text-sm text-center text-brown-300">
          {data.description}
        </span>
      </div>

      <footer className="flex items-center justify-between mt-8">
        <span className="text-sm">
          R${' '}
          <strong className="text-2xl font-baloo font-extrabold">
            {data.price}
          </strong>
        </span>
        <form
          onSubmit={handleSubmit(handleAddCoffeeToCart)}
          className="flex items-center gap-2 group-focus:ring-1 group-focus:ring-yellow-500"
        >
          <div className="w-[72px] h-[38px] rounded-md bg-gray-300 flex items-center group">
            <button className="w-full group" type="button">
              <Plus />
            </button>
            <input
              className="w-[20px] h-[38px] bg-gray-300 group-focus:ring-1 group-focus:ring-yellow-500"
              type="number"
              {...register('amount', { valueAsNumber: true })}
            />
            <button className="w-full" type="button">
              <Minus />
            </button>
          </div>

          <button className="flex h-[38px] w-[38px]  text-white items-center justify-center rounded-md bg-purple-700">
            <ShoppingCartSimple size={18} weight="fill" />
          </button>
        </form>
      </footer>
    </div>
  )
}
