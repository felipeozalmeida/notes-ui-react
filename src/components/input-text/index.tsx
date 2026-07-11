import { type ChangeEventHandler, type FC, useId } from 'react'

export interface InputTextProps {
  label: string
  name: string
  placeholder: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const InputText: FC<InputTextProps> = ({ label, name, placeholder, value, onChange }) => {
  const id = useId()
  const inputId = `${id}-${name}`
  return (
    <div className="flex flex-col items-stretch justify-between gap-1">
      <label className="font-medium" htmlFor={inputId}>
        {label}
      </label>
      <input
        className="h-8 rounded-full border border-neutral-300 px-3"
        type="text"
        id={inputId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InputText
