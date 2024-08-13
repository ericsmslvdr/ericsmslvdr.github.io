import profileImage from '@images/me.webp';
import { useContext } from 'react';
import MenuContext from '../../contexts/MenuContext';

const Hero = () => {
    const { homeRef } = useContext(MenuContext);

    const socials = [
        {
            name: "Facebook",
            link: "https://www.facebook.com/ericsmslvdr",
            icon: <img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" className="h-6 w-6" alt="Facebook icon" />
        },
        {
            name: "Github",
            link: "https://github.com/ericsmslvdr",
            icon: <img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" className="h-6 w-6" alt="Github icon" />
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/ericsmsalvador/",
            icon: <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" className="h-6 w-6" alt="LinkedIn icon" />
        },

    ]

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
                        socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target='_blank'
                                rel="noopener noreferrer"
                                className='flex justify-center items-center gap-2 text-base text-[#0866ff]'
                                aria-label='Social icon'
                            >
                                {social.icon}
                                <span className='text-sm text-lightSecondaryText hover:text-lightLink dark:text-darkSecondaryText dark:hover:text-darkLink'>
                                    {social.name}
                                </span>
                            </a>
                        ))
                    }
                </nav>
            </article>
        </section>
    )
}

export default Hero