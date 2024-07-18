import { useState } from "react"
import emailjs from '@emailjs/browser';

export type FormDataType = {
    from_name: string;
    from_email: string;
    message: string;
}

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const useEmail = () => {
    const [status, setStatus] = useState<{ statusCode: number, response?: any } | null>(null);
    const [error, setError] = useState<any | null>(null);

    const sendEmail = async ({ from_name, from_email, message }: FormDataType, token: string | null | undefined) => {
        setStatus(null)
        setError(null)

        const template_params = {
            from_name,
            from_email,
            message,
            'g-recaptcha-response': token
        }

        try {
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, template_params, {
                publicKey: PUBLIC_KEY,
            });
            setStatus({ statusCode: response.status, response });
        } catch (error: any) {
            setError(error);
            setStatus({ statusCode: error.status });
        }
    }

    return {
        sendEmail,
        status,
        error,
        setError
    }
}

export default useEmail;