import type { ComponentProps } from "react";
import { twJoin, twMerge } from "tailwind-merge";

type LinkTextProps = {
    text: string,
    textClassName?: string,
    iconClassName?: string,
} & ComponentProps<"a">;

function LinkText({ text, textClassName, iconClassName, ...props }: LinkTextProps) {
    const textClassNameMerged = twJoin(
        "truncate transition-colors group-hover:text-blue-500 dark:group-hover:text-blue-400",
        textClassName
    );

    const iconClassNameMerged = twMerge(
        "ml-1 size-4 fill-muted-foreground transition-colors group-hover:fill-blue-500 dark:group-hover:fill-blue-400",
        iconClassName
    );

    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center group"
            {...props}
        >
            <span className={textClassNameMerged}>{text}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={iconClassNameMerged}
                viewBox="0 0 24 24"
            >
                <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
            </svg>
        </a>
    );
}

export default LinkText;