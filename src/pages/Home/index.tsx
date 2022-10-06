import { useEffect, useState } from 'react'
import axios from 'axios'

import { CoffeeCard } from './components/CoffeeCard'
import { InfoSummary } from './components/InfoSummary'

import CoffeImage from '../../assets/coffee-image.png'

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

            <InfoSummary />
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
            return (
              <CoffeeCard key={coffee.id} coffee={coffee} tags={coffee.tags} />
            )
          })}
        </div>
      </section>
    </main>
  )
}
