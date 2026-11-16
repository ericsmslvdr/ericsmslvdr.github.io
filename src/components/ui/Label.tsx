import type { ComponentProps } from "react";

type LabelProps = ComponentProps<"label">;

function Label({ children, ...props }: LabelProps) {
    return (
        <label
            className="text-lightSecondaryText dark:text-darkSecondaryText"
            {...props}
        >
            {children}
        </label>
    );
}

export default Label;