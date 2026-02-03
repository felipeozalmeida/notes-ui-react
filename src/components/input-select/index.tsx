import { useId, type ChangeEventHandler, type FC } from "react";
import clsx from "clsx";

type InputSelectProps = {
  className: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

const InputSelect: FC<InputSelectProps> = ({ className, name, label, placeholder, value, options, onChange }) => {
  const id = useId();
  const inputId = `${id}-${name}`;
  return (
    <div className={clsx("flex flex-col gap-1 items-stretch justify-between", className)}>
      <label className="font-medium" htmlFor={inputId}>{label}</label>
      <select className="h-8 px-3 border border-neutral-300 rounded-full" name={name} id={inputId} value={value} onChange={onChange}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;

