import CoffeImage from '../assets/coffee-image.png'
import ExpressCoffee from '../assets/coffiies/expresso.svg'
import {
  ShoppingCart,
  Timer,
  Package,
  Coffee,
  ShoppingCartSimple,
} from 'phosphor-react'

export function Home() {
  return (
    <div className="flex flex-col h-screen w-full ">
      <section className="flex items-center bg-gradient-background bg-cover bg-no-repeat mt-[144px]">
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
            <div className="grid grid-cols-2 gap-5">
              <div className="flex items-center justify-start gap-3">
                <div className="w-8 h-8 bg-yellow-700  rounded-full text-white flex items-center justify-center">
                  <ShoppingCart weight="fill" size={16} />
                </div>
                <span>Compra simples e segura</span>
              </div>
              <div className="flex items-center justify-start gap-3">
                <div className="w-8 h-8 bg-yellow-500  rounded-full text-white flex items-center justify-center">
                  <Timer weight="fill" size={16} />
                </div>
                <span>Compra simples e segura</span>
              </div>
              <div className="flex items-center justify-start gap-3">
                <div className="w-8 h-8 bg-brown-500  rounded-full text-white flex items-center justify-center">
                  <Package weight="fill" size={16} />
                </div>
                <span>Compra simples e segura</span>
              </div>
              <div className="flex items-center justify-start gap-3">
                <div className="w-8 h-8 bg-purple-500  rounded-full text-white flex items-center justify-center">
                  <Coffee weight="fill" size={16} />
                </div>
                <span>Compra simples e segura</span>
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
          <div className="flex flex-col w-[256px] bg-gray-200 px-6 py-5 rounded-bl-[32px] rounded-br-md rounded-tl-md rounded-tr-[32px] ">
            <div className=" flex items-center justify-center -mt-[38px] ">
              <div className="w-[120px] h-[120px]">
                <img src={ExpressCoffee} alt="" className="bg-cover" />
              </div>
            </div>

            <div className="w-full flex gap-1 items-center justify-center mt-3">
              <div className="py-1 px-2 bg-yellow-300 rounded-full flex items-center justify-center">
                <strong className="text-[0.625rem] text-yellow-700">
                  TRADICONAL
                </strong>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-4">
              <strong className="font-baloo font-bold text-xl">
                Expresso Tradicional
              </strong>
              <span className="text-sm text-center text-brown-300">
                O tradicional café feito com água quente e grãos moídos
              </span>
            </div>

            <footer className="flex items-center justify-between mt-8">
              <span className="text-sm">
                R${' '}
                <strong className="text-2xl font-baloo font-extrabold">
                  9,90
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

          <div className="flex flex-col w-[256px] bg-gray-200 px-6 py-5 rounded-bl-[32px] rounded-br-md rounded-tl-md rounded-tr-[32px] ">
            <div className=" flex items-center justify-center -mt-[38px] ">
              <div className="w-[120px] h-[120px]">
                <img src={ExpressCoffee} alt="" className="bg-cover" />
              </div>
            </div>

            <div className="w-full flex gap-1 items-center justify-center mt-3">
              <div className="py-1 px-2 bg-yellow-300 rounded-full flex items-center justify-center">
                <strong className="text-[0.625rem] text-yellow-700">
                  TRADICONAL
                </strong>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-4">
              <strong className="font-baloo font-bold text-xl">
                Expresso Tradicional
              </strong>
              <span className="text-sm text-center text-brown-300">
                O tradicional café feito com água quente e grãos moídos
              </span>
            </div>

            <footer className="flex items-center justify-between mt-8">
              <span className="text-sm">
                R${' '}
                <strong className="text-2xl font-baloo font-extrabold">
                  9,90
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
        </div>
      </section>
    </div>
  )
}
