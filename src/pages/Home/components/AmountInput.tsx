import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'

import { Minus, Plus } from 'phosphor-react'

interface InputUncontrollerProps extends ComponentPropsWithoutRef<'input'> {
  name: string
}

export const AmountInput = forwardRef<HTMLInputElement, InputUncontrollerProps>(
  ({ name, ...props }: InputUncontrollerProps, ref) => {
    const { setValue, getValues } = useFormContext()

    function handleIncrementAmount() {
      const amount = getValues(name) + 1
      setValue(name, amount)
    }

    function handleDecrementAmount() {
      if (getValues(name) === 1) {
        return
      }

      const amount = getValues(name) - 1
      setValue(name, amount)
    }

    return (
      <div className="w-[72px] h-[38px] rounded-md bg-gray-300 flex items-center">
        <button
          type="button"
          onClick={handleDecrementAmount}
          className="w-full flex items-center justify-center text-purple-500 hover:text-purple-700 transition-colors focus:ring-0"
        >
          <Minus size={14} weight="bold" />
        </button>
        <input
          ref={ref}
          readOnly
          value={getValues(name)}
          className="w-[20px] h-[38px] bg-gray-300 text-center focus:ring-0"
          type="number"
          {...props}
        />
        <button
          type="button"
          onClick={handleIncrementAmount}
          className="w-full flex items-center justify-center text-purple-500 hover:text-purple-700 transition-colors focus:ring-0"
        >
          <Plus size={14} weight="bold" />
        </button>
      </div>
    )
  },
)

AmountInput.displayName = 'AmountInput'
