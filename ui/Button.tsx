import clsx from "clsx";
import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
  aria?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  action?: boolean;
}

const Button = ({ text, onClick, aria, className, action, type }: Props) => {
  return (
    <button
      className={clsx(
        "bg-primary py-1 px-4 rounded-lg hover:bg-primary/80 duration-500 inline-block text-white",
        action &&
          "absolute top-5 z-[2] right-5 bg-red-600 px-5 py-1 text-white rounded-md hover:bg-red-500"
      )}
      onClick={onClick}
      aria-label={aria}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
