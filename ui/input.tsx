import clsx from "clsx";

interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
}

const Input = ({ name, type, placeholder, value }: InputProps) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className="text-gray-900 shadow-sm ring-inset ring-1 placeholder:text-gray-400 focus:right-2 focus:ring-primary sm:text-sm sm:leading-6 border w-full border-gray-200 p-2 rounded-md py-1.5 outline-none"
      />
    </>
  );
};

export default Input;
