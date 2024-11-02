import { ImgHTMLAttributes } from "react";

type IconProps = ImgHTMLAttributes<HTMLImageElement>;

function Icon({ ...props }: IconProps) {
    return (
        <img className="h-6 w-6" {...props} />
    );
}

export default Icon;