import profileImage from '@images/me.webp';

const Hero = () => {
    return (
        <section className="flex flex-col justify-between items-center max-w-container mx-auto pt-44 pb-32 gap-7 md:flex-row" id="home">
            <figure className="w-48 h-48 md:min-w-48 rounded-full border-4 border-solid border-sky-500 overflow-hidden">
                <img
                    src={profileImage}
                    alt="Eric Samuel Salvador's profile picture"
                    className='w-full h-full object-cover object-[center_30%]'
                />
            </figure>
            <article className="text-2xl px-8 text-center leading-normal text-light md:text-4xl md:text-left md:px-0">
                <h2>Hey, I'm Eric.
                    <span className='text-gray'> I'm a front-end and backend web developer.</span>
                </h2>
                <nav className="flex flex-wrap justify-center items-center gap-6 mt-4 md:justify-start">
                    <a
                        href="https://www.facebook.com/ericsmslvdr"
                        target='_blank'
                        rel="noopener noreferrer"
                        className='flex justify-center items-center gap-2 text-base text-[#0866ff]'
                        aria-label="Eric's Facebook profile"
                    >
                        <img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" className="h-6 w-6" alt="Facebook icon" />
                        <span className='text-gray text-sm hover:text-[#0866ff]'>
                            Facebook
                        </span>
                    </a>
                    <a
                        href="https://github.com/ericsmslvdr"
                        target='_blank'
                        rel="noopener noreferrer"
                        className='flex justify-center items-center gap-2 text-base text-[#d4d4d4]'
                        aria-label="Eric's Github profile"
                    >
                        <img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" className="h-6 w-6" alt="Github icon" />
                        <span className='text-gray text-sm hover:text-[#d4d4d4]'>
                            Github
                        </span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ericsmsalvador/"
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label="Eric's LinkedIn profile"
                        className='flex justify-center items-center gap-2 text-base text-[#71b7fb]'
                    >
                        <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" className="h-6 w-6" alt="LinkedIn icon" />
                        <span className='text-gray text-sm hover:text-[#71b7fb]'>
                            LinkedIn
                        </span>
                    </a>
                </nav>
            </article>
        </section>
    )
}

export default Hero