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
    const [status, setStatus] = useState<{ success: boolean, response?: any } | null>(null);
    const [error, setError] = useState<any | null>(null);

    const sendEmail = async ({ from_name, from_email, message }: FormDataType) => {
        setStatus(null)
        setError(null)

        try {
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, { from_name, from_email, message }, {
                publicKey: PUBLIC_KEY,
            });
            console.log('SUCCESS!', response.status, response.text);
            setStatus({ success: true, response });
        } catch (error) {
            console.log('FAILED...', error);
            setError(error);
            setStatus({ success: false });
        }
    }

    return {
        sendEmail,
        status,
        error
    }
}

export default useEmail;