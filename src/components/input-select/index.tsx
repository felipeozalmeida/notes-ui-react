import { useId, type ChangeEventHandler, type FC } from 'react'
import clsx from 'clsx'

interface InputSelectProps {
  className: string
  name: string
  label: string
  placeholder: string
  value: string
  options: string[]
  onChange: ChangeEventHandler<HTMLSelectElement>
}

const InputSelect: FC<InputSelectProps> = ({
  className,
  name,
  label,
  placeholder,
  value,
  options,
  onChange,
}) => {
  const id = useId()
  const inputId = `${id}-${name}`
  return (
    <div className={clsx('flex flex-col items-stretch justify-between gap-1', className)}>
      <label className="font-medium" htmlFor={inputId}>
        {label}
      </label>
      <select
        className="h-8 rounded-full border border-neutral-300 px-3"
        name={name}
        id={inputId}
        value={value}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default InputSelect
