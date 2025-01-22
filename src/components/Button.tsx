import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  className: string;
}

export const Button: React.FC<ButtonProps> = ({ type, children, className }) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
