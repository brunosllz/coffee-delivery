import { ShoppingCartSimple } from 'phosphor-react'

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

export function CoffeeCard({ data }: CoffeeCardProps) {
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
        <div className="flex items-center gap-2">
          <input className="w-[72px] h-[38px] rounded-md bg-gray-300" />

          <button className="flex h-[38px] w-[38px]  text-white items-center justify-center rounded-md bg-purple-700">
            <ShoppingCartSimple size={18} weight="fill" />
          </button>
        </div>
      </footer>
    </div>
  )
}
