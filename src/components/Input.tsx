import React, { HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  label?: string;
  type?: HTMLInputTypeAttribute;
  children?: React.ReactNode;
  errorMessage?: string;
}

const Input = ({
  register,
  label = "",
  type = "text",
  children = <></>,
  errorMessage,
  ...attr
}: InputProps) => {
  return (
    <div>
      {label && <strong>{label}</strong>}
      <span>
        <input className="h-[30px] " type={type} {...register} {...attr} />
        {children}
      </span>
      <span className="flex justify-end text-[rgb(235, 86, 86)] absolute -bottom-[-25px] right-0">
        {errorMessage}
      </span>
    </div>
  );
};
export default Input;
