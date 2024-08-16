import { useState } from "react";
import sendEmail from "../service/sendEmail";
import { FormDataType } from "../types/emailTypes";

const useEmail = () => {
    const [status, setStatus] = useState<{
        code: number | undefined,
        message: string | undefined
    } | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSendEmail = async (formData: FormDataType, token: string) => {

        try {
            setLoading(true)
            const response = await sendEmail(formData, token)
            setStatus({
                code: response?.code,
                message: response?.message
            })
            setLoading(false)
        } catch (error: any) {
            setError(error)
            setStatus({
                code: error.code,
                message: error.status
            })
        }
    }

    return {
        loading,
        error,
        status,
        handleSendEmail
    }
}

export default useEmail;