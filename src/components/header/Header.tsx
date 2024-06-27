
const Header = () => {

    return (
        <header className='fixed z-10 top-0 left-0 right-0 bg-dark w-full py-6 shadow-lg' >
            <div className="flex justify-between items-center max-w-container mx-auto">
                <div>
                    <a href="#home" className="text-gray hover:text-link">
                        &lt;
                        <span className='text-gray'>ericsmslvdr </span>
                        &#47;&gt;
                    </a >
                </div >
                <nav>
                    <NavItems />
                </nav>
            </div>
        </header >
    )
}

export default Header

const NavItems = () => {

    return (
        <ul className='flex gap-4 text-gray'>
            <li><a href="#home" className='hover:text-link'>Home</a></li>
            <li><a href="#skills" className='hover:text-link'>Skills</a></li>
            <li><a href="#projects" className='hover:text-link'>Projects</a></li>
            <li><a href="#contacts" className='hover:text-link'>Contact Me</a></li>
        </ul>
    )
}