import { useEffect, useState } from 'react'
import axios from 'axios'

import { CoffeeCard } from './components/CoffeeCard'

import CoffeImage from '../../assets/coffee-image.png'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

interface Tag {
  id: string
  name: string
}
interface CoffeeData {
  id: string
  name: string
  imageUrl: string
  description: string
  price: number
  tags: Tag[]
}

export function Home() {
  const [coffies, setCoffies] = useState<CoffeeData[]>([])

  async function fetchCoffiesData() {
    const response = await axios.get('http://localhost:3333/coffies')

    setCoffies(response.data)
  }

  useEffect(() => {
    fetchCoffiesData()
  }, [])

  return (
    <main className="flex flex-col h-screen w-full">
      <section className="flex items-center bg-gradient-background bg-cover bg-no-repeat">
        <div className="flex max-w-[1120px] mx-auto py-[5.75rem] gap-14">
          <div className="flex flex-col gap-[4.125rem] max-w-[567px] ">
            <div className="flex flex-col gap-4">
              <h1 className="font-extrabold text-5xl font-baloo leading-[130%]">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className="text-xl text-left leading-[130%]">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>
            <div className="grid grid-cols-[236px_331px] gap-5">
              <div className="flex items-center justify-start gap-3">
                <div className="w-8 h-8 bg-yellow-700  rounded-full text-white flex items-center justify-center">
                  <ShoppingCart weight="fill" size={16} />
                </div>
                <span>Compra simples e segura</span>
              </div>
              <div className="flex items-center justify-start gap-3">
                <div className="w-8 h-8 bg-brown-500  rounded-full text-white flex items-center justify-center">
                  <Package weight="fill" size={16} />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div className="flex items-center justify-start gap-3">
                <div className="w-8 h-8 bg-yellow-500  rounded-full text-white flex items-center justify-center">
                  <Timer weight="fill" size={16} />
                </div>
                <span>Entrega rápida e rastreada</span>
              </div>
              <div className="flex items-center justify-start gap-3">
                <div className="w-8 h-8 bg-purple-500  rounded-full text-white flex items-center justify-center">
                  <Coffee weight="fill" size={16} />
                </div>
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-[476px] h-[360px] ">
            <img
              src={CoffeImage}
              alt=""
              width={476}
              height={360}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col h-screen max-w-[1120px] mx-auto bg-gray-100 py-8">
        <strong className="font-baloo text-[2rem] font-extrabold">
          Nossos cafés
        </strong>

        <div className="grid grid-cols-4 gap-8 w-full mt-[2.125rem]">
          {coffies.map((coffee) => {
            return <CoffeeCard key={coffee.id} data={coffee} />
          })}
        </div>
      </section>
    </main>
  )
}
