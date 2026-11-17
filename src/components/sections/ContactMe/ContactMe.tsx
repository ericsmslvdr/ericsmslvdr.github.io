import { useMenu } from "@/contexts/useMenu";
import { contactContent } from "@/data/contact";
import ContactForm from "./ContactForm";
import OtherSocials from "./OtherSocials";

function ContactMe() {
    const { contactMeRef } = useMenu();

    return (
        <section ref={contactMeRef} className="mx-auto flex max-w-container flex-col px-8 pt-16 md:px-0">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{contactContent.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{contactContent.description}</p>
            <div className="mt-6 flex flex-col gap-8 md:flex-row">
                <ContactForm />
                <div className="flex w-full flex-col md:w-1/3">
                    <h3 className="font-medium text-foreground">{contactContent.otherWaysTitle}</h3>
                    <OtherSocials />
                </div>
            </div>
        </section>
    );
}

export default ContactMe;
