import { heroSocials } from "@/data/socials";
import profileImage from "@/assets/images/me.webp";
import { useMenu } from "@/contexts/MenuContext";
import Icon from "../ui/Icon";

function Hero() {
    const { homeRef } = useMenu();

    return (
        <section ref={homeRef} className="flex flex-col justify-between items-center max-w-container mx-auto pt-44 pb-32 gap-7 md:flex-row">
            <figure className="w-48 h-48 md:min-w-48 rounded-full border-4 border-solid border-sky-600 dark:border-sky-500  overflow-hidden">
                <img
                    src={profileImage}
                    alt="Eric Samuel Salvador's profile picture"
                    className='w-full h-full object-cover object-[center_30%]'
                />
            </figure>
            <article className="text-2xl px-8 text-center leading-normal text-lightText dark:text-darkText md:text-4xl md:text-left md:px-0">
                <h2>Hey, I'm Eric.
                    <span className='text-lightSecondaryText dark:text-darkSecondaryText'> I'm a front-end and backend web developer.</span>
                </h2>
                <nav className="flex flex-wrap justify-center items-center gap-6 mt-4 md:justify-start">
                    {
                        heroSocials.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target='_blank'
                                rel="noopener noreferrer"
                                className='flex justify-center items-center gap-2 text-base text-[#0866ff]'
                                aria-label='Social icon'
                            >
                                <Icon src={social.icon} alt={social.alt} />
                                <span className='text-sm text-lightSecondaryText hover:text-lightLink dark:text-darkSecondaryText dark:hover:text-darkLink'>
                                    {social.name}
                                </span>
                            </a>
                        ))
                    }
                </nav>
            </article>
        </section>
    );
}

export default Hero;