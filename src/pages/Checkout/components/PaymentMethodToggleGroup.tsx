import { ReactNode } from 'react'
import { useController, Control, FieldValues, Path } from 'react-hook-form'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Horse } from 'phosphor-react'

interface PaymentMethod {
  id: string
  icon: ReactNode
  title: string
}

const paymentMethods: PaymentMethod[] = [
  { id: '1', icon: <Horse />, title: 'Domingo' },
  { id: '2', icon: <Horse />, title: 'Segunda' },
  { id: '3', icon: <Horse />, title: 'Terça' },
]

interface WeekDayslInputControllProps<T extends FieldValues = FieldValues> {
  name: Path<T>
  control?: Control<T>
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
        type="multiple"
        className="w-full flex grid-cols-3 gap-3"
        value={value}
        onValueChange={(newValue) => onChange(newValue)}
      >
        {paymentMethods.map((paymentMethod, index) => (
          <ToggleGroup.Item
            key={paymentMethod.id}
            value={paymentMethod.id}
            type="button"
            className="flex items-center justify-center gap-3 [&[data-state='on']]:bg-violet-500  w-full p-4 rounded-md bg-purple-300 transition-colors hover:bg-gray-500"
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
