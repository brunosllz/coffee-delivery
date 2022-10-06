import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ShoopingCartContext } from '../../contexts/ShoopingCartContext'
import z from 'zod'

import { PaymentMethodToggleGroup } from './components/PaymentMethodToggleGroup'
import { CurrencyDollar, MapPinLine, Trash } from 'phosphor-react'

import { AmountInputCheckout } from './components/AmountInputCheckout'
import { Input } from '../../components/Input'

const userAddressInfoSchema = z.object({
  cep: z
    .number({
      required_error: 'Você deve informar o seu CEP',
      invalid_type_error: 'Você deve informar o seu CEP',
    })
    .min(8, { message: 'O cep deve conter 8 dígitos' }),
  street: z.string().min(1, 'Informe a sua rua da sua residência'),
  number: z
    .number({
      required_error: 'Informe o numero da sua residência',
      invalid_type_error: 'Informe o numero da sua residência',
    })
    .min(1, 'Informe o numero da sua residência'),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, 'Irfome o seu bairro'),
  city: z.string().min(1, 'Informe a sua cidade'),
  state: z.string().min(1, 'Informe o seu estado'),
  paymentMethod: z.enum(['Cartão de crédito', 'Cartão de débito', 'Dinheiro'], {
    required_error: 'Você deve infomar um método de pagemento',
  }),
})

type UserAddressInfoType = z.infer<typeof userAddressInfoSchema>

export function Checkout() {
  const { selectedCoffies, removeCoffeeAtCheckout } =
    useContext(ShoopingCartContext)
  const checkoutForm = useForm<UserAddressInfoType>({
    resolver: zodResolver(userAddressInfoSchema),
  })

  const { control, register, handleSubmit, formState } = checkoutForm
  const { errors } = formState
  console.log(errors)

  function handleCheckoutForm(data: any) {
    console.log(data)
  }

  function handleRemoveCoffee(coffeeId: string) {
    removeCoffeeAtCheckout(coffeeId)
  }

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

            <div className="flex flex-col mt-8 gap-4">
              <div className="max-w-[200px]">
                <Input
                  placeholder="CEP"
                  type="number"
                  errorMesssage={errors.cep?.message}
                  {...register('cep', { valueAsNumber: true })}
                />
              </div>
              <Input
                placeholder="Rua"
                type="number"
                errorMesssage={errors.street?.message}
                {...register('street')}
              />

              <div className="flex items-center gap-3">
                <Input
                  placeholder="Número"
                  type="number"
                  errorMesssage={errors.number?.message}
                  {...register('number')}
                />
                <Input
                  placeholder="Complemento"
                  errorMesssage={errors.complement?.message}
                  {...register('complement')}
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="max-w-[200px]">
                  <Input
                    placeholder="Bairro"
                    errorMesssage={errors.neighborhood?.message}
                    {...register('neighborhood')}
                  />
                </div>
                <Input
                  placeholder="Cidade"
                  errorMesssage={errors.city?.message}
                  {...register('city')}
                />
                <div className="max-w-[60px]">
                  <Input
                    placeholder="UF"
                    errorMesssage={errors.state?.message}
                    {...register('state')}
                  />
                </div>
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
                return (
                  <li
                    key={coffee.id}
                    className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-6"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <img
                          src={coffee.imageUrl}
                          alt=""
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <span>{coffee.name}</span>
                        <div className="flex items-center justify-start gap-4">
                          <AmountInputCheckout
                            coffeeId={coffee.id}
                            amount={coffee.amount}
                          />

                          <button
                            onClick={() => handleRemoveCoffee(coffee.id)}
                            className="flex items-center justify-center p-2 gap-1 rounded-lg bg-gray-400 hover:bg-gray-500"
                          >
                            <Trash size={16} className="text-purple-500" />
                            Remover
                          </button>
                        </div>
                      </div>
                    </div>

                    <strong>{coffee.price}</strong>
                  </li>
                )
              })}
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
