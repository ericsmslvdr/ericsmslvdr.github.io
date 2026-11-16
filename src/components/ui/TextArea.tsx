import type { ComponentProps } from "react";

type TextAreaProps = ComponentProps<"textarea">;

function TextArea(props: TextAreaProps) {
    return (
        <textarea
            {...props}
            rows={5}
            required
        />
    );
}

export default TextArea;