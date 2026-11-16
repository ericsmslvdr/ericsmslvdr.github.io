import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

function Button({ children, ...props }: ButtonProps) {
    return <button {...props}>{children}</button>;
}

export default Button;