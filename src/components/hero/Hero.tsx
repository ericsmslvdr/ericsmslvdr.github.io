import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import profileImage from '@images/me.webp';

const Hero = () => {
    return (
        <section className="flex justify-between items-center max-w-container mx-auto my-28 gap-7" id="home">
            <figure className="min-w-48 h-48 rounded-full border-4 border-solid border-sky-500 overflow-hidden">
                <img
                    src={profileImage}
                    alt="Profile Image"
                    className='w-full h-full object-cover object-[center_30%]'
                />
            </figure>
            <article className="text-4xl leading-normal text-light">
                <h2>Hey, I'm Eric.
                    <span className='text-gray'> I'm a front-end and backend web developer.</span>
                </h2>
                <nav className="flex justify-start items-center gap-5 mt-4">
                    <a
                        href="https://www.facebook.com/ericsmslvdr"
                        target='_blank'
                        className='flex justify-center items-center gap-2 text-lg text-[#0866ff]'
                    >
                        <FaFacebook />
                        <span className='text-gray hover:text-[#0866ff]'>
                            Facebook
                        </span>
                    </a>
                    <a
                        href="https://github.com/ericsmslvdr"
                        target='_blank'
                        className='flex justify-center items-center gap-2 text-lg text-[#d4d4d4]'
                    >
                        <FaGithub />
                        <span className='text-gray hover:text-[#d4d4d4]'>
                            Github
                        </span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ericsmsalvador/"
                        target='_blank'
                        className='flex justify-center items-center gap-2 text-lg text-[#71b7fb]'
                    >
                        <FaLinkedin />
                        <span className='text-gray hover:text-[#71b7fb]'>
                            LinkedIn
                        </span>
                    </a>
                </nav>
            </article>
        </section>
    )
}

export default Hero