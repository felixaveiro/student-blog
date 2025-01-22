import React from "react";

interface InputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}) => {
  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
    />
  );
};
