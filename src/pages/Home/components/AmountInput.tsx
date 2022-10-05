import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'

import { Minus, Plus } from 'phosphor-react'

interface InputUncontrollerProps extends ComponentPropsWithoutRef<'input'> {
  name: string
}

export const AmountInput = forwardRef<HTMLInputElement, InputUncontrollerProps>(
  ({ name, ...props }: InputUncontrollerProps, ref) => {
    // const [amount, setAmount] = useState()
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
      <div className="w-[72px] h-[38px] rounded-md bg-gray-300 flex items-center group">
        <button
          type="button"
          onClick={handleDecrementAmount}
          className="w-full group"
        >
          <Minus />
        </button>
        <input
          ref={ref}
          readOnly
          value={getValues(name)}
          className="w-[20px] h-[38px] bg-gray-300 group-focus:ring-1 group-focus:ring-yellow-500"
          type="number"
          {...props}
        />
        <button
          type="button"
          onClick={handleIncrementAmount}
          className="w-full"
        >
          <Plus />
        </button>
      </div>
    )
  },
)

AmountInput.displayName = 'AmountInput'
