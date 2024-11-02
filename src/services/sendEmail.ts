import emailjs from "@emailjs/browser";
import { createTemplateParams } from "@/utils/emailJs";

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

async function sendEmail(formData: FormDataType, token: string) {
    const { from_name, from_email, message } = formData;
    const template_params = createTemplateParams(from_name, from_email, message, token);

    try {
        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            template_params, {
            publicKey: PUBLIC_KEY,
        });

        return {
            code: response.status,
            message: response.text,
        };
    } catch (error: any) {
        console.log(error);
    }
}

export default sendEmail;