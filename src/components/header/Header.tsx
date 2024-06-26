
const Header = () => {
    return (
        <header className="flex justify-between items-center max-w-container mx-auto pt-6">
            <div>
                <a href="#home" className="text-gray hover:text-link">
                    &lt;
                    <span className='text-gray'>ericsmslvdr</span>
                    &#47;
                    &gt;
                </a>
            </div>
            <nav>
                <NavItems />
            </nav>
        </header>
    )
}

export default Header

const NavItems = () => {

    return (
        <ul className='flex gap-4 text-gray'>
            <li><a href="#home" className='hover:text-link'>Home</a></li>
            <li><a href="#about" className='hover:text-link'>Skills</a></li>
            <li><a href="#projects" className='hover:text-link'>Projects</a></li>
            <li><a href="#contacts" className='hover:text-link'>Contact Me</a></li>
        </ul>
    )
}