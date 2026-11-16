import type { ComponentProps } from "react";

type IconProps = ComponentProps<"img">;

function Icon(props: IconProps) {
    return (
        <img className="h-6 w-6" {...props} />
    );
}

export default Icon;