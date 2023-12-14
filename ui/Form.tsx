"use client";

import { useRef, FormEvent, ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  action: (FormData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ children, action, className, onSubmit }: FormProps) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={ref}
      action={async (FormData) => {
        await action(FormData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};
export default Form