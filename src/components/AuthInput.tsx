import React, { ReactNode } from "react";

const AuthInput = ({
  value,
  setValue,
  leftIcon,
  rightIcon,
  placeholder = "",
  label,
  labelStyle = "",
  type = "text",
  name,
}: {
  value: string;
  setValue: (text: string) => void;
  leftIcon?: (style: string) => ReactNode;
  rightIcon?: (style: string) => ReactNode;
  placeholder?: string;
  label?: string;
  labelStyle?: string;
  type?: "text" | "password";
  name?: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {label && (
        <div className="flex">
          <p className={`text-base font-medium ${labelStyle}`}>{label}</p>
        </div>
      )}
      <div className="flex gap-2 bg-gray-100 rounded-md overflow-hidden">
        {leftIcon && <button>{leftIcon("text-gray-700")}</button>}
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="px-4 py-3 flex-1 w-full bg-transparent"
          name={name}
        />
        {rightIcon && <button>{rightIcon("")}</button>}
      </div>
    </div>
  );
};

export default AuthInput;
