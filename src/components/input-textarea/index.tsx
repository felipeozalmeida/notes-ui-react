import { useId, type ChangeEventHandler, type FC } from 'react'

interface InputTextareaProps {
  label: string
  name: string
  placeholder: string
  value: string
  onChange: ChangeEventHandler<HTMLTextAreaElement>
}

const InputTextarea: FC<InputTextareaProps> = ({ label, name, placeholder, value, onChange }) => {
  const id = useId()
  const inputId = `${id}-${name}`
  return (
    <div className="flex flex-col items-stretch justify-between gap-1">
      <label className="font-medium" htmlFor={inputId}>
        {label}
      </label>
      <textarea
        className="h-40 resize-none rounded-2xl border border-neutral-300 px-3 py-2"
        id={inputId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  )
}

export default InputTextarea
