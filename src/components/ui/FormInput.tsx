import { type FC } from 'react';
import {
  type FieldError,
  type UseFormRegisterReturn,
  UseFormWatch,
} from 'react-hook-form';

import clsx from 'clsx';

type InputProps = {
  label?: string;
  error?: FieldError;
  register: UseFormRegisterReturn<string>;
  type: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  inputModificator?: string;
  watch: UseFormWatch<any>;
};

export const FormInput: FC<InputProps> = ({
  label,
  error,
  register,
  type,
  placeholder,
  name,
  inputModificator,
  watch,
}) => {
  const inputValue = watch(name);
  return (
    <div className="group relative mt-2.5">
      <input
        id={name}
        className={clsx(
          `w-full rounded-md border px-4 py-3 text-sm16 outline-none`,
          inputModificator,
          error && 'border-red-200',
        )}
        type={type}
        placeholder={placeholder ? placeholder : ''}
        {...register}
      />
      <label
        className={clsx(
          'block text-s14 font-medium text-neutral-80',
          'absolute left-4 top-3.5 transition-all duration-150',
          'pointer-events-none group-focus-within:-top-2 group-focus-within:bg-white',
          inputValue &&
            inputValue.length &&
            'pointer-events-none -top-2 bg-white',
          error && 'font-medium text-red-500',
        )}
        htmlFor={name}
      >
        {error ? error.message : label}
      </label>
    </div>
  );
};
