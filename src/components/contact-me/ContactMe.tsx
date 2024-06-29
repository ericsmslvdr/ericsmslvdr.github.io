import { useContext, useEffect, useRef, useState } from "react"
import MenuContext from "../../contexts/MenuContext";
import useEmail, { FormDataType } from "../../hooks/useEmail";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY!;

const ContactMe = () => {
    const { contactMeRef } = useContext(MenuContext);
    const { sendEmail, status, error, setError } = useEmail();
    const captchaRef = useRef<ReCAPTCHA>(null);

    const [formData, setFormData] = useState<FormDataType>({
        from_name: '',
        from_email: '',
        message: '',
    })

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('sent');
        const token = captchaRef.current?.getValue();
        await sendEmail(formData, token)
        if (status?.statusCode === 200) {
            // Reset form fields by updating state
            setFormData(prev => ({
                ...prev,
                from_name: '',
                from_email: '',
                message: '',
            }))
            //  Clear the reCAPTCHA widget
            if (captchaRef.current) {
                captchaRef.current.reset();
            }
        }
    }

    useEffect(() => {
        // Clear error message after 3 seconds
        if (error) {
            const timer = setTimeout(() => {
                setError(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [error]);

    return (
        <section ref={contactMeRef} className="flex flex-col max-w-container mx-auto mt-16 px-8 md:px-0">
            <h1 className='text-xl text-light'>#Contact Me</h1>
            <main className="flex flex-col md:flex-row gap-8 mt-6">
                <form onSubmit={handleSubmit} className="border border-neutral-700 rounded-lg p-4 w-full md:w-2/3">
                    <div
                        data-sitekey="6LehNQQqAAAAAMad765dJ8C-fwH_hrS4j0AbVxFy"
                        data-action="send_email"
                        className="g-recaptcha flex flex-col md:flex-row md:items-center gap-4"
                    >
                        <div className="flex flex-col gap-2">
                            <label htmlFor="from_name" className="text-gray">Name:</label>
                            <input
                                type="text"
                                name="from_name"
                                id="from_name"
                                required
                                value={formData.from_name}
                                onChange={handleOnChange}
                                className="w-full border-0 py-3 px-5 rounded-lg bg-dark text-sm text-neutral-400 placeholder:text-sm placeholder:text-neutral-700 ring-1 ring-inset ring-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-400"
                                placeholder="Your name here"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="from_email" className="text-gray">Email:</label>
                            <input
                                type="email"
                                name="from_email"
                                id="from_email"
                                required
                                value={formData.from_email}
                                onChange={handleOnChange}
                                className="w-full border-0 py-3 px-5 rounded-lg bg-dark text-sm text-neutral-400 placeholder:text-sm placeholder:text-neutral-700 ring-1 ring-inset ring-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-400"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <label htmlFor="message" className="text-gray">Message:</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleOnChange}
                            className="border-0 py-3 px-5 rounded-lg bg-dark text-sm text-neutral-400 placeholder:text-sm placeholder:text-neutral-700 ring-1 ring-inset ring-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-400"
                            placeholder="What's on your mind today?"
                        ></textarea>
                    </div>
                    <div className="scale-75 md:scale-100 pt-4">
                        <ReCAPTCHA
                            sitekey={SITE_KEY}
                            ref={captchaRef}
                        />
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="flex w-full md:w-fit items-center justify-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700">
                            Send
                            <img src="https://img.icons8.com/?size=100&id=40007&format=png&color=000000" className="h-4 w-4" alt="" />
                        </button>
                    </div>
                    {error && <div className="text-red-500 pt-8">
                        <p className="text-sm">{error.text}</p>
                    </div>}
                </form>
                <div className="flex flex-col w-full md:w-1/3">
                    <h2 className="text-light">Or get in touch with me through...</h2>
                    <div className="mt-6 flex flex-col gap-4">
                        <a href="mailto:ericsmsalvador@gmail.com" target="_blank">
                            <div className="flex gap-2 items-center border border-neutral-700 rounded-lg py-2 px-4 hover:bg-neutral-950 group">
                                <img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" className="h-6 w-6" alt="" />
                                <h2 className="text-center text-gray text-sm group-hover:text-link">Gmail</h2>
                            </div>
                        </a>
                        <a href="https://discordapp.com/users/ctrlcccv" target="_blank">
                            <div className="flex gap-2 items-center border border-neutral-700 rounded-lg py-2 px-4 hover:bg-neutral-950 group">
                                <img src="https://img.icons8.com/?size=100&id=65646&format=png&color=000000" className="h-6 w-6" alt="" />
                                <h2 className="text-center text-gray text-sm group-hover:text-link">Discord</h2>
                            </div>
                        </a>
                        <a href="https://m.me/ericsmslvdr" target="_blank">
                            <div className="flex gap-2 items-center border border-neutral-700 rounded-lg py-2 px-4 hover:bg-neutral-950 group">
                                <img src="https://img.icons8.com/?size=100&id=YFbzdUk7Q3F8&format=png&color=000000" className="h-6 w-6" alt="" />
                                <h2 className="text-center text-gray text-sm group-hover:text-link">Messenger</h2>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/ericsmsalvador/" target="_blank">
                            <div className="flex gap-2 items-center border border-neutral-700 rounded-lg py-2 px-4 hover:bg-neutral-950 group">
                                <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" className="h-6 w-6" alt="" />
                                <h2 className="text-center text-gray text-sm group-hover:text-link">LinkedIn</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default ContactMe