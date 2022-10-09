import { HTMLAttributes, HTMLInputTypeAttribute } from 'react'
import classNames from 'classnames'
import { FieldValues, Control, Path, useController } from 'react-hook-form'

import InputMask from 'react-input-mask'

interface InputUncontrollerProps<T extends FieldValues = FieldValues>
  extends HTMLAttributes<HTMLInputElement> {
  label?: string
  name: Path<T>
  control: Control<T>
  type?: HTMLInputTypeAttribute
}

export function MaskedInput({
  name,
  label,
  control,
  type,
  ...rest
}: InputUncontrollerProps) {
  const {
    field: { value, onChange, ref },
    fieldState: { error },
  } = useController({ name, control })

  return (
    <div className="w-full flex flex-col gap-2">
      {!!label && <label htmlFor={name}>{label}</label>}

      <InputMask
        className={classNames('h-[42px] rounded-md bg-gray-300 p-3 w-full', {
          'ring-red-500 ring-1 focus:ring-red-500': !!error?.message,
        })}
        ref={ref}
        type={type}
        mask="99999-999"
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        {...rest}
      />

      {!!error?.message && (
        <p className="text-red-500 text-xs">{error?.message}</p>
      )}
    </div>
  )
}
