import { useRef, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "@tanstack/react-form";
import useEmail from "@/hooks/useEmail";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, Send } from "lucide-react";
import { contactContent } from "@/data/contact";

const initialValues: FormDataType = {
    from_name: "",
    from_email: "",
    message: "",
};

function ContactForm() {
    const { handleSendEmail, error, loading } = useEmail();
    const { executeRecaptcha } = useGoogleReCaptcha();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [buttonPosition, setButtonPosition] = useState("0");
    const [captchaError, setCaptchaError] = useState("");
    const [sent, setSent] = useState(false);
    const form = useForm({
        defaultValues: initialValues,
        onSubmit: async ({ value }) => {
            setCaptchaError("");
            setSent(false);

            try {
                if (!executeRecaptcha) {
                    throw new Error("reCAPTCHA is not ready. Please try again.");
                }

                const token = await executeRecaptcha("send_email");

                if (!token) {
                    throw new Error("Could not verify reCAPTCHA. Please try again.");
                }

                const emailSent = await handleSendEmail(value, token);
                if (emailSent) {
                    form.reset();
                    setButtonPosition("0");
                    setSent(true);
                }
            } catch (submitError: unknown) {
                setCaptchaError(
                    submitError instanceof Error
                        ? submitError.message
                        : "Could not verify reCAPTCHA. Please try again.",
                );
            }
        },
    });

    function changeButtonPosition() {
        const container = buttonRef.current?.parentElement;
        const containerRect = container?.getBoundingClientRect();
        const buttonRect = buttonRef.current?.getBoundingClientRect();

        if (containerRect && buttonRect) {
            const containerWidth = containerRect.width;
            const buttonWidth = buttonRect.width;
            const availableWidth = Math.max(0, containerWidth - buttonWidth);
            const newPosition = Math.floor(Math.random() * availableWidth);

            if (Math.abs(newPosition - Number.parseFloat(buttonPosition)) >= buttonWidth) {
                setButtonPosition(`${newPosition}`);
            } else if (availableWidth > 0) {
                setButtonPosition(`${(newPosition + buttonWidth) % availableWidth}`);
            }
        }
    }

    return (
        <form
            noValidate
            onSubmit={(event) => {
                event.preventDefault();
                event.stopPropagation();
                void form.handleSubmit();
            }}
            className="w-full space-y-5 rounded-xl border bg-card p-6 text-card-foreground shadow-sm md:w-2/3"
        >
            <div className="flex flex-col gap-4">
                <form.Field
                    name="from_name"
                    validators={{ onSubmit: ({ value }) => value.trim() ? undefined : "Please enter your name." }}
                >
                    {(field) => (
                        <div className="flex flex-col gap-2">
                            <Label htmlFor={field.name}>{contactContent.form.nameLabel}</Label>
                            <Input
                                id={field.name}
                                name={field.name}
                                autoComplete="name"
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(event) => {
                                    setSent(false);
                                    field.handleChange(event.target.value);
                                }}
                                placeholder={contactContent.form.namePlaceholder}
                                aria-invalid={field.state.meta.errors.length > 0}
                            />
                            {field.state.meta.errors.map((message) => (
                                <p key={message} className="text-sm text-destructive">{message}</p>
                            ))}
                        </div>
                    )}
                </form.Field>

                <form.Field
                    name="from_email"
                    validators={{
                        onSubmit: ({ value }) => {
                            if (!value.trim()) return "Please enter your email address.";
                            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                                ? undefined
                                : "Please enter a valid email address.";
                        },
                    }}
                >
                    {(field) => (
                        <div className="flex flex-col gap-2">
                            <Label htmlFor={field.name}>{contactContent.form.emailLabel}</Label>
                            <Input
                                id={field.name}
                                name={field.name}
                                type="email"
                                autoComplete="email"
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(event) => {
                                    setSent(false);
                                    field.handleChange(event.target.value);
                                }}
                                placeholder={contactContent.form.emailPlaceholder}
                                aria-invalid={field.state.meta.errors.length > 0}
                            />
                            {field.state.meta.errors.map((message) => (
                                <p key={message} className="text-sm text-destructive">{message}</p>
                            ))}
                        </div>
                    )}
                </form.Field>

                <form.Field
                    name="message"
                    validators={{ onSubmit: ({ value }) => value.trim() ? undefined : "Please enter a message." }}
                >
                    {(field) => (
                        <div className="flex flex-col gap-2">
                            <Label htmlFor={field.name}>{contactContent.form.messageLabel}</Label>
                            <Textarea
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(event) => {
                                    setSent(false);
                                    field.handleChange(event.target.value);
                                }}
                                className="min-h-28 resize-y"
                                placeholder={contactContent.form.messagePlaceholder}
                                aria-invalid={field.state.meta.errors.length > 0}
                            />
                            {field.state.meta.errors.map((message) => (
                                <p key={message} className="text-sm text-destructive">{message}</p>
                            ))}
                            <span className="text-xs text-muted-foreground">
                                {contactContent.form.privacyPrefix}{" "}
                                <a href="https://policies.google.com/privacy" className="underline underline-offset-4 hover:text-foreground">{contactContent.form.privacyLabel}</a>{" "}
                                {contactContent.form.termsJoiner}{" "}
                                <a href="https://policies.google.com/terms" className="underline underline-offset-4 hover:text-foreground">{contactContent.form.termsLabel}</a>{" "}
                                {contactContent.form.privacySuffix}
                            </span>
                        </div>
                    )}
                </form.Field>

                <form.Subscribe selector={(state) => state.values}>
                    {(values) => {
                        const isFormEmpty = Object.values(values).some((value) => !value.trim());

                        return (
                            <div className="relative mt-4 h-10">
                                <Button
                                    ref={buttonRef}
                                    type="submit"
                                    disabled={loading}
                                    className={`absolute top-0 transition-all duration-300 ease-in-out ${
                                        sent
                                            ? "cursor-pointer rounded-full border-green-600 bg-green-100 text-green-800 hover:bg-green-200 dark:border-green-400 dark:bg-green-950 dark:text-green-200 dark:hover:bg-green-900"
                                            : isFormEmpty
                                              ? "cursor-not-allowed"
                                              : "cursor-pointer"
                                    }`}
                                    style={{ right: `${buttonPosition}px` }}
                                    onMouseEnter={() => {
                                        if (isFormEmpty && !sent) changeButtonPosition();
                                    }}
                                >
                                    {loading ? <Spinner /> : sent ? <Check aria-hidden="true" /> : <Send aria-hidden="true" />}
                                    {loading
                                        ? contactContent.form.sendingLabel
                                        : sent
                                          ? "Message sent"
                                          : contactContent.form.submitLabel}
                                </Button>
                            </div>
                        );
                    }}
                </form.Subscribe>
                {(error || captchaError) && (
                    <div role="alert" className="pt-2 text-sm text-destructive">
                        <p>{captchaError || error}</p>
                    </div>
                )}
            </div>
        </form>
    );
}

export default ContactForm;
