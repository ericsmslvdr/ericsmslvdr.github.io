import { heroSocials } from "@/data/socials";
import Icon from "../ui/Icon";
import LinkText from "../ui/LinkText";
import react from "@/assets/icons/technologies/react-icon.svg";
import tailwind from "@/assets/icons/technologies/tailwindcss-icon.svg";

function Footer() {
    return (
        <footer className='bg-lightBackground dark:bg-darkBackground text-lightSecondaryText dark:text-darkSecondaryText w-full py-6 shadow-lg mt-40 pb-10' >
            <div className="flex flex-col md:flex-row gap-8 text-center md:text-start justify-between items-center max-w-container mx-auto px-8 md:px-0">
                <div className="text-center md:text-start">
                    <p>&copy; {new Date().getFullYear()} Eric Samuel Salvador</p>
                    <p className="flex items-center justify-center flex-wrap pt-4 md:pt-0">
                        Created with
                        <span role="img" className="px-1" aria-label="heart">❤️</span>
                        and
                        <span role="img" className="px-1" aria-label="coffee">☕</span>
                        using
                        <img src={react} className="h-4 w-4 mx-1" alt="React icon" />
                        React and
                        <img src={tailwind} className="h-4 w-4 mx-1" alt="TailwindCSS icon" />
                        Tailwind CSS
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-4 items-center">
                        {heroSocials.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target='_blank'
                            >
                                <Icon src={social.icon} alt={social.alt} />
                            </a>
                        ))}
                    </div>
                    <LinkText
                        href="https://github.com/ericsmslvdr/ericsmslvdr.github.io"
                        text="Source Code"
                        textClassName="text-sm"
                    />
                </div>
            </div>
        </footer >
    );
}

export default Footer;
