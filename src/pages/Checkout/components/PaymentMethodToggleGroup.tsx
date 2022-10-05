import { ReactNode } from 'react'
import { useController, Control, FieldValues, Path } from 'react-hook-form'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { CreditCard, Bank, Money } from 'phosphor-react'

interface PaymentMethod {
  id: string
  icon: ReactNode
  title: string
}

const paymentMethods: PaymentMethod[] = [
  {
    id: '1',
    icon: <CreditCard size={16} className="text-purple-500" />,
    title: 'Cartão de crédito',
  },
  {
    id: '2',
    icon: <Bank size={16} className="text-purple-500" />,
    title: 'Cartão de débito',
  },
  {
    id: '3',
    icon: <Money size={16} className="text-purple-500" />,
    title: 'Dinheiro',
  },
]

interface WeekDayslInputControllProps<T extends FieldValues = FieldValues> {
  name: Path<T>
  control: Control<T>
}

export function PaymentMethodToggleGroup<T extends FieldValues = FieldValues>({
  control,
  name,
}: WeekDayslInputControllProps<T>) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control })

  return (
    <div className="flex w-full">
      <ToggleGroup.Root
        type="single"
        className="w-full flex grid-cols-3 gap-3"
        value={value}
        onValueChange={(newValue) => onChange(newValue)}
      >
        {paymentMethods.map((paymentMethod, index) => (
          <ToggleGroup.Item
            key={paymentMethod.id}
            value={paymentMethod.id}
            type="button"
            className="flex items-center text-xs justify-center gap-3 [&[data-state='on']]:bg-purple-300  w-full p-4 rounded-md bg-gray-400 transition-colors hover:bg-gray-500 focus:ring-purple-500"
          >
            {paymentMethod.icon}
            {paymentMethod.title}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
      {!!error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  )
}
