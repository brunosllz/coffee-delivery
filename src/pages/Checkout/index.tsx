import { useEffect } from 'react'
import { useContextSelector } from 'use-context-selector'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ShoopingCartContext } from '../../contexts/ShoopingCartContext'
import { useNavigate } from 'react-router-dom'
import z from 'zod'
import { cepInputMask } from '../../utils/cepInputMask'
import { stateInputMask } from '../../utils/stateInputMask'
import { priceFormatter } from '../../utils/priceFormatter'

import { PaymentMethodToggleGroup } from './components/PaymentMethodToggleGroup'
import { CoffeeCardCheckout } from './components/CoffeeCardCheckout'
import { NewCheckoutForm } from './components/NewCheckoutForm'

import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useCheckout } from '../../hooks/useCheckout'

const newCheckoutFormSchemaValidation = z.object({
  cep: z
    .string({ required_error: 'Informe o seu CEP' })
    .min(8, { message: 'Informe o seu CEP' }),
  street: z.string().min(1, 'Informe a sua rua da sua residência'),
  number: z.number({
    required_error: 'Informe o numero da sua residência',
    invalid_type_error: 'Informe o numero da sua residência',
  }),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, 'Irfome o seu bairro'),
  city: z.string().min(1, 'Informe a sua cidade'),
  state: z.string().min(1, 'Informe o seu estado'),
  paymentMethod: z.enum(['Cartão de crédito', 'Cartão de débito', 'Dinheiro'], {
    required_error: 'Você deve infomar um método de pagemento',
  }),
})

export type newCheckoutFormType = z.infer<
  typeof newCheckoutFormSchemaValidation
>

export function Checkout() {
  const { selectedCoffies, clearShoopingCart } = useContextSelector(
    ShoopingCartContext,
    (context) => {
      return context
    },
  )
  const checkoutForm = useForm<newCheckoutFormType>({
    resolver: zodResolver(newCheckoutFormSchemaValidation),
  })

  const { control, handleSubmit, watch, setValue, reset } = checkoutForm
  const checkoutValue = useCheckout()

  const navigate = useNavigate()

  function handleCheckoutForm(data: newCheckoutFormType) {
    const finishedCheckout = {
      ...data,
      selectedCoffies,
    }

    navigate('success', { state: finishedCheckout })
    reset()
    clearShoopingCart()
  }

  const cepValue = watch('cep')
  const stateValue = watch('state')

  useEffect(() => {
    setValue('cep', cepInputMask(cepValue))
    setValue('state', stateInputMask(stateValue))
  }, [cepValue, setValue, stateValue])

  return (
    <main className="flex h-screen w-full mt-10">
      <form
        onSubmit={handleSubmit(handleCheckoutForm)}
        className="flex w-full max-w-[1120px] mx-auto gap-8"
      >
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

            <FormProvider {...checkoutForm}>
              <NewCheckoutForm />
            </FormProvider>
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
              <PaymentMethodToggleGroup
                name="paymentMethod"
                control={control}
              />
            </div>
          </footer>
        </div>

        <div className="flex flex-col gap-3 flex-1">
          <strong className="font-baloo text-lg text-brown-700">
            Cafés selecionados
          </strong>

          <div className="bg-gray-200 rounded-md p-10 flex flex-col">
            <ul className="flex flex-col gap-6">
              {selectedCoffies.map((coffee) => {
                return <CoffeeCardCheckout key={coffee.id} data={coffee} />
              })}
            </ul>

            <footer className="flex flex-col mt-6 gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Total de itens</span>
                <span className="text-sm">
                  R$ {priceFormatter(checkoutValue.totalItens)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Entrega</span>
                <span className="text-sm">R$ 3,50</span>
              </div>
              <div className="flex items-center justify-between">
                <strong className="text-xl font-bold">Total</strong>
                <strong className="text-xl font-bold">
                  R$ {priceFormatter(checkoutValue.totalItens + 350)}
                </strong>
              </div>

              <button className="w-full bg-yellow-500 hover:bg-yellow-700 transition-colors text-white border-0 rounded-md py-3 mt-6 font-bold uppercase">
                Confirmar pedido
              </button>
            </footer>
          </div>
        </div>
      </form>
    </main>
  )
}
