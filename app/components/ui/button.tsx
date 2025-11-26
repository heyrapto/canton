import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant: "primary" | "secondary" | "tertiary";
}

const Button:React.FC<ButtonProps> = ({children, variant}) => {
  const baseStyles = `${variant === "tertiary" ? "py-0 px-0" : "py-3 px-5"} font-semibold rounded-[30px] cursor-pointer`;
  const varaintStyles = variant === "primary" ? "bg-[#f6ffa4] text-black" : variant === "secondary" ? "bg-black text-white" : variant === "tertiary" ? "bg-transparent text-[#f6ffa4]" : "";

  return (
    <button className={`${baseStyles} ${varaintStyles}`}>
        {children}
    </button>
  )
}

export default Button;