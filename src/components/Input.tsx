import { forwardRef, ComponentPropsWithoutRef } from 'react'
import classNames from 'classnames'

interface InputUncontrollerProps extends ComponentPropsWithoutRef<'input'> {
  label?: string
  name: string
  errorMesssage?: string
}

export const Input = forwardRef<HTMLInputElement, InputUncontrollerProps>(
  ({ label, name, errorMesssage, ...props }: InputUncontrollerProps, ref) => {
    return (
      <div className="w-full flex flex-col gap-2">
        {!!label && <label htmlFor={name}>{label}</label>}

        <input
          className={classNames('h-[42px] rounded-md bg-gray-300 p-3 w-full', {
            'ring-red-500 ring-1 focus:ring-red-500': !!errorMesssage,
          })}
          ref={ref}
          id={name}
          name={name}
          {...props}
        />

        {!!errorMesssage && (
          <p className="text-red-500 text-xs">{errorMesssage}</p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
