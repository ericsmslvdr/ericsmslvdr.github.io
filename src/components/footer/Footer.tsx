
const Footer = () => {

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
                        <img src="https://img.icons8.com/?size=100&id=J79emsSv2QCu&format=png&color=000000" className="h-4 w-4 mx-1" alt="" />
                        React and
                        <img src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" className="h-4 w-4 mx-1" alt="" />
                        Tailwind CSS
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-4 items-center">
                        <a
                            href="https://www.facebook.com/ericsmslvdr"
                            target='_blank'
                        >
                            <img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" className="h-6 w-6" />
                        </a>
                        <a
                            href="https://github.com/ericsmslvdr"
                            target='_blank'
                        >
                            <img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="" className="h-6 w-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ericsmsalvador/"
                            target='_blank'
                        >
                            <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="" className="h-6 w-6" />
                        </a>
                    </div>
                    <a href="https://github.com/ericsmslvdr/my-website" target="_blank" className="group">
                        <span className="flex items-center text-sm group-hover:text-lightLink dark:group-hover:text-darkLink ">
                            Source Code
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1"
                                viewBox="0 0 24 24"
                            >
                                <path fill="currentColor" d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </footer >
    )
}

export default Footer
