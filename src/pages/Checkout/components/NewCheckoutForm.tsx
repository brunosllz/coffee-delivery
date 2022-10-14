import { useFormContext } from 'react-hook-form'
import { newCheckoutFormType } from '..'

import { Input } from '../../../components/Input'

export function NewCheckoutForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<newCheckoutFormType>()
  console.log(errors)
  return (
    <form className="flex flex-col mt-8 gap-4">
      <div className="max-w-[200px]">
        <Input
          placeholder="CEP"
          errorMesssage={errors.cep?.message}
          {...register('cep')}
        />
      </div>
      <Input
        placeholder="Rua"
        errorMesssage={errors.street?.message}
        {...register('street')}
      />

      <div className="flex items-center gap-3">
        <Input
          placeholder="Número"
          type="number"
          errorMesssage={errors.number?.message}
          {...register('number', { valueAsNumber: true })}
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
    </form>
  )
}
