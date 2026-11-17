import { heroSocials } from "@/data/socials";
import { heroContent } from "@/data/hero";
import { useMenu } from "@/contexts/useMenu";
import Icon from "@/components/ui/Icon";
import { ArrowUpRight, FileText } from "lucide-react";

function Hero() {
    const { homeRef } = useMenu();

    return (
        <section ref={homeRef} className="mx-auto flex max-w-container flex-col items-center justify-between gap-7 px-8 pb-24 pt-40 md:flex-row md:px-0">
            <figure className="size-72 shrink-0 overflow-hidden rounded-full border-4 border-border bg-muted transition-colors duration-300 hover:border-blue-500 dark:border-[#0f131e] dark:hover:border-[#4b6b95] md:size-96">
                <img
                    src={heroContent.profileImage}
                    alt={heroContent.profileImageAlt}
                    className='w-full h-full object-cover object-[center_30%]'
                />
            </figure>
            <article className="max-w-2xl px-8 text-center md:px-0 md:text-left">
                <p className="mb-3 text-sm font-medium tracking-wide text-muted-foreground">{heroContent.eyebrow}</p>
                <h1 className="shimmer shimmer-color-blue-500 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                    Hey, I&apos;m Eric.
                </h1>
                <p className="mt-4 text-xl leading-relaxed text-muted-foreground md:text-2xl">{heroContent.description}</p>
                <nav aria-label={heroContent.socialLinksLabel} className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                    {
                        heroSocials.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target='_blank'
                                rel="noopener noreferrer"
                                className='inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground dark:hover:bg-[#172033]'
                                aria-label={social.name}
                            >
                                {social.icon === "resume" ? (
                                    <FileText className="size-6" aria-hidden="true" />
                                ) : (
                                    <Icon src={social.icon} alt={social.alt} className="h-6 w-6" />
                                )}
                                <span>{social.name}</span>
                                <ArrowUpRight className="size-3.5" aria-hidden="true" />
                            </a>
                        ))
                    }
                </nav>
            </article>
        </section>
    );
}

export default Hero;