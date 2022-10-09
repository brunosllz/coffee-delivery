import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useLocation } from 'react-router-dom'

import DeliveryImage from '../assets/delivery-image.png'

export function SuccessCheckout() {
  const { state } = useLocation()

  return (
    <main className="flex w-full ">
      <div className="flex  max-w-[1120px] w-full mx-auto gap-[102px] py-20">
        <div className="flex flex-col justify-end">
          <h1 className="font-baloo text-[2rem]  text-yellow-700">
            Uhu! Pedido confirmado
          </h1>
          <span className="block text-xl">
            Agora é só aguardar que logo o café chegará até você
          </span>
          <ul className="flex flex-col p-10 mt-10 border-[1px] border-yellow-700  rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md max-w-[526px] gap-8">
            <li className="flex items-center justify-start gap-3">
              <div className="w-8 h-8 bg-brown-500  rounded-full text-white flex items-center justify-center">
                <MapPin weight="fill" size={16} />
              </div>
              <div className="flex flex-col">
                <span>
                  Entrega em{' '}
                  <strong>
                    {state.street}, {state.number}
                  </strong>
                </span>
                <span>
                  {state.neighborhood} - {state.city}, {state.state}
                </span>
              </div>
            </li>

            <li className="flex items-center justify-start gap-3">
              <div className="w-8 h-8 bg-brown-500  rounded-full text-white flex items-center justify-center">
                <Clock weight="fill" size={16} />
              </div>
              <div className="flex flex-col">
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min </strong>
              </div>
            </li>

            <li className="flex items-center justify-start gap-3">
              <div className="w-8 h-8 bg-brown-500  rounded-full text-white flex items-center justify-center">
                <CurrencyDollar weight="fill" size={16} />
              </div>
              <div className="flex flex-col">
                <span>Pagamento na entrega</span>
                <strong>{state.paymentMethod}</strong>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex items-baseline justify-end flex-col flex-1">
          <div className="w-full flex flex-col ">
            <img
              src={DeliveryImage}
              alt=""
              className="object-cover"
              height={293}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
