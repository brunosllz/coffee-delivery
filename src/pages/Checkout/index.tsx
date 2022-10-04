import { useForm } from 'react-hook-form'

import { PaymentMethodToggleGroup } from './components/PaymentMethodToggleGroup'

import CoffeeImage from '../../assets/coffies/americano.png'
import { CurrencyDollar, MapPinLine, Trash } from 'phosphor-react'

export function Checkout() {
  const { control } = useForm({})

  return (
    <main className="flex h-screen w-full mt-10">
      <form className="flex w-full max-w-[1120px] mx-auto gap-8">
        <div className="flex flex-col gap-3 max-w-[640px]">
          <strong className="font-baloo text-lg text-brown-700">
            Complete seu pedido
          </strong>

          <div className="bg-gray-200 rounded-md p-10 flex flex-col ">
            <header className="flex items-start justify-start gap-2">
              <MapPinLine size={20} className="text-yellow-700" />
              <div className="flex flex-col">
                <span className="block text-brown-700">
                  Endereço de Entrega
                </span>
                <span className="block text-brown-700 text-sm">
                  Informe o endereço onde deseja receber seu pedido
                </span>
              </div>
            </header>

            <div className="flex flex-col mt-8 gap-4">
              <input
                placeholder="CEP"
                className="h-[42px] rounded-md bg-gray-300 p-3 w-[200px]"
              />
              <input
                placeholder="Rua"
                className="h-[42px] rounded-md bg-gray-300 p-3 "
              />
              <div className="flex items-center gap-3">
                <input
                  placeholder="Número"
                  className="h-[42px] rounded-md bg-gray-300 p-3 "
                />
                <input
                  placeholder="Complemento"
                  className="h-[42px] rounded-md bg-gray-300 p-3 flex-1"
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  placeholder="Bairro"
                  className="h-[42px] rounded-md bg-gray-300 p-3 "
                />
                <input
                  placeholder="Cidade"
                  className="h-[42px] rounded-md bg-gray-300 p-3 flex-1"
                />
                <input
                  placeholder="UF"
                  className="h-[42px] rounded-md bg-gray-300 p-3 w-[60px]"
                />
              </div>
            </div>
          </div>
          <footer className="bg-gray-200 rounded-md p-10 flex flex-col">
            <div className="flex items-start justify-start gap-2">
              <CurrencyDollar size={20} className="text-purple-500" />
              <div className="flex flex-col">
                <span className="block text-brown-700">Pagamento</span>
                <span className="block text-brown-700 text-sm">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>

            <div className="mt-8">
              <PaymentMethodToggleGroup name="teste" control={control} />
            </div>
          </footer>
        </div>

        <div className="flex flex-col gap-3 flex-1">
          <strong className="font-baloo text-lg text-brown-700">
            Cafés selecionados
          </strong>

          <div className="bg-gray-200 rounded-md p-10 flex flex-col">
            <ul className="flex flex-col gap-6">
              <li className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-6">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={CoffeeImage}
                      alt=""
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <span>Expresso Tradicional</span>
                    <div className="flex items-center justify-start gap-4">
                      <input className="h-8 w-[72px] rounded-md bg-gray-300 p-3" />
                      <button className="flex items-center justify-center p-2 gap-1 rounded-lg bg-purple-300">
                        <Trash size={16} className="text-purple-500" />
                        Remover
                      </button>
                    </div>
                  </div>
                </div>

                <strong>R$ 9,90</strong>
              </li>
              <li className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-6">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={CoffeeImage}
                      alt=""
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <span>Expresso Tradicional</span>
                    <div className="flex items-center justify-start gap-4">
                      <input className="h-8 w-[72px] rounded-md bg-gray-300 p-3" />
                      <button className="flex items-center justify-center p-2 gap-1 rounded-lg bg-purple-300">
                        <Trash size={16} className="text-purple-500" />
                        Remover
                      </button>
                    </div>
                  </div>
                </div>

                <strong>R$ 9,90</strong>
              </li>
            </ul>

            <footer className="flex flex-col mt-6 gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Total de itens</span>
                <span className="text-sm">R$ 29,70</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Entrega</span>
                <span className="text-sm">R$ 3,50</span>
              </div>
              <div className="flex items-center justify-between">
                <strong className="text-xl font-bold">Total</strong>
                <strong className="text-xl font-bold">R$ 33,20</strong>
              </div>

              <button className="w-full bg-yellow-700 text-white border-0 rounded-md py-3 mt-6 font-bold uppercase">
                Confirmar pedido
              </button>
            </footer>
          </div>
        </div>
      </form>
    </main>
  )
}