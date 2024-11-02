import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({ ...props }: InputProps) {
    return (
        <input
            {...props}
            required
            className="w-full border-0 py-3 px-5 rounded-lg bg-lightBackground dark:bg-darkBackground text-sm text-neutral-700  dark:text-neutral-400 placeholder:text-sm placeholder:text-neutral-500 dark:placeholder:text-neutral-700 ring-1 ring-inset ring-neutral-400 dark:ring-neutral-700  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-400"
        />
    );
}

export default Input;