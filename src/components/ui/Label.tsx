import { LabelHTMLAttributes, PropsWithChildren } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

function Label({ children, ...props }: PropsWithChildren<LabelProps>) {
    return (
        <label
            {...props}
            className="text-lightSecondaryText dark:text-darkSecondaryText"
        >
            {children}
        </label>
    );
}

export default Label;