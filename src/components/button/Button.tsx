import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    className: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, onClick, className, ...rest }, ref) => {

    return (
        <button
            onClick={onClick}
            className={className}
            ref={ref}
            {...rest}
        >
            {children}
        </button>
    )
})

export default Button