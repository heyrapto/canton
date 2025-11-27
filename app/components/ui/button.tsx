import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant: "primary" | "secondary" | "tertiary";
    className?: string
}

const Button:React.FC<ButtonProps> = ({children, variant, className, ...props}) => {
  const baseStyles = `${variant === "tertiary" ? "py-0 px-0" : "py-3 px-5"} font-semibold rounded-[30px] cursor-pointer w-fit`;
  const varaintStyles = variant === "primary" ? "bg-[#f6ffa4] text-black" : variant === "secondary" ? "bg-black text-white" : variant === "tertiary" ? "bg-transparent text-[#f6ffa4]" : "";

  return (
    <button className={`${baseStyles} ${varaintStyles} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button;