import { useState } from "react";
import sendEmail from "@/services/sendEmail";

function useEmail() {
    const [status, setStatus] = useState<{
        code: number | undefined;
        message: string | undefined;
    } | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(false);

    async function handleSendEmail(formData: FormDataType, token: string) {
        try {
            setLoading(true);
            const response = await sendEmail(formData, token);
            setStatus({
                code: response?.code,
                message: response?.message,
            });
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : "Unable to send email.";
            setError(message);
            setStatus({
                code: undefined,
                message,
            });
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        error,
        status,
        handleSendEmail,
    };
}

export default useEmail;
