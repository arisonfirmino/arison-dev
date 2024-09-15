import { AsteriskIcon } from "lucide-react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  errors?: FieldError | undefined;
}

export default function Input({
  label,
  placeholder,
  register,
  errors,
}: InputProps) {
  return (
    <div className="flex w-full flex-col">
      <label className="flex gap-1 uppercase">
        {label}
        <AsteriskIcon size={12} className="text-red-600" />
      </label>
      <input
        type="text"
        placeholder={placeholder}
        {...register}
        className={`border-b border-solid bg-transparent p-2.5 outline-none focus:border-opacity-100 ${errors ? "border-red-600" : "border-black border-opacity-50 dark:border-white dark:border-opacity-10"}`}
      />

      {errors && <p className="m-1.5 text-xs text-red-600">{errors.message}</p>}
    </div>
  );
}
