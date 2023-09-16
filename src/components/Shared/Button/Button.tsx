import React from "react";
interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className=" px-6 py-2 rounded-full bg-gray-600">{children}</button>
  );
};

export default Button;
