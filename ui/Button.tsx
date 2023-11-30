import clsx from "clsx";
import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
  aria?: string;
  className?: string;
  type?:string;
}

const Button = ({ text, onClick, aria, className }: Props) => {
  return (
    <button
      className={clsx(
        "bg-primary py-1 px-4 rounded-lg hover:bg-primary/80 duration-500 inline-block text-white",
        className
      )}
      onClick={onClick}
      aria-label={aria}
    >
      {text}
    </button>
  );
};

export default Button;
