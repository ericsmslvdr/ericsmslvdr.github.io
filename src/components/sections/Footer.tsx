import { footerSocials } from "@/data/socials";
import { footerContent } from "@/data/footer";
import Icon from "@/components/ui/Icon";
import LinkText from "@/components/ui/LinkText";

function Footer() {
    return (
        <footer className='mt-20 w-full border-t bg-background py-8 text-muted-foreground'>
            <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-8 px-8 text-center md:flex-row md:px-0 md:text-left">
                <div className="text-center md:text-start">
                    <p>&copy; {new Date().getFullYear()} {footerContent.copyrightName}</p>
                    <p className="pt-4 md:pt-0">{footerContent.credit}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-4 items-center">
                        {footerSocials.map((social) => (
                            <a
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="rounded-md transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                                <Icon src={social.icon} alt={social.alt} />
                            </a>
                        ))}
                    </div>
                    <LinkText
                        href={footerContent.sourceCodeUrl}
                        text={footerContent.sourceCodeLabel}
                        textClassName="text-sm"
                    />
                </div>
            </div>
        </footer >
    );
}

export default Footer;
