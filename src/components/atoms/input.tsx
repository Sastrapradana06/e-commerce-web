"use client";

interface InputProps {
  name: string;
  type: "password" | "email" | "text" | undefined;
  color: "transparent" | "white";
  size: "small" | "medium" | "large";
  value?: string;
  setValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  color,
  size,
  value,
  setValue,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value || ""}
      onChange={setValue}
      required={true}
      className={`w-full border outline-none ${inputSize[size]} ${inputColor[color]}`}
    />
  );
};

const inputSize = {
  small: "text-sm px-3 py-2 rounded-lg",
  medium: "text-base py-3 px-4 border rounded-xl",
  large: "text-lg px-6 py-3 rounded-2xl",
};

const inputColor = {
  transparent: "bg-transparent  focus:border-purple-500 focus:border-2 ",
  white: "bg-white  focus:border-purple-500 focus:border-2 ",
};

export default Input;
