import React from "react";

interface InputProps {
  label?: string;
  name: string;
  placeholder: string;
}

function Input({ label, name, placeholder, ...props }: InputProps) {
  return (
    <label className="block mb-4 w-full">
      {label && (
        <span className="text-dark-violet text-base uppercase tracking-wider">
          {label}
        </span>
      )}
      <input
        className="block w-full"
        name={name}
        {...props}
        placeholder={placeholder}
      />
    </label>
  );
}

export default Input;
