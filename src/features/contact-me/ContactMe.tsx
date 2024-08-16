import { useMenu } from "../../contexts/MenuContext";
import ConnectWithMe from "./components/ConnectWithMe";
import ContactForm from "./components/ContactForm";


const ContactMe = () => {
    const { contactMeRef } = useMenu();

    return (
        <section ref={contactMeRef} className="flex flex-col max-w-container mx-auto mt-16 px-8 md:px-0">
            <h1 className='text-xl text-lightText dark:text-darkText'>#Contact Me</h1>
            <div className="flex flex-col md:flex-row gap-8 mt-6">
                <ContactForm />
                <div className="flex flex-col w-full md:w-1/3">
                    <h2 className="text-lightText dark:text-darkText">Or get in touch with me through...</h2>
                    <ConnectWithMe />
                </div>
            </div>
        </section >
    )
}

export default ContactMe