import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(({ children, ...props }, ref) => {
    return (
        <button
            {...props}
            ref={ref}
        >
            {children}
        </button>
    );
})

export default Button;