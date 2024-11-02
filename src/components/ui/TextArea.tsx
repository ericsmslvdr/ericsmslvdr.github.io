import { TextareaHTMLAttributes } from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextArea({ ...props }: TextAreaProps) {
    return (
        <textarea
            {...props}
            rows={5}
            required
        />
    );
}

export default TextArea;