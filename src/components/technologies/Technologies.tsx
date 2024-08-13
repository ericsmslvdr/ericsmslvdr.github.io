import { useContext } from "react";
import MenuContext from "../../contexts/MenuContext";

const Technologies = () => {
    const { skillsRef } = useContext(MenuContext);

    const techs = [
        {
            "icon": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="h-6 w-6" alt="HTML icon" />,
            "name": "HTML"
        },
        {
            "icon": < img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="h-6 w-6" alt="CSS icon" />,
            "name": "CSS"
        },
        {
            "icon": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="h-6 w-6" alt="Javascript icon" />,
            "name": "Javascript"
        },
        {
            "icon": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="h-6 w-6" alt="React icon" />,
            "name": "React"
        },
        {
            "icon": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="h-6 w-6" alt="NodeJS icon" />,
            "name": "NodeJS"
        },
        {
            "icon": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="h-6 w-6" alt="Typescript icon" />,
            "name": "Typescript"
        },
        {
            "icon": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" className="h-6 w-6" alt="Prisma ORM icon" />,
            "name": "Prisma ORM"
        },
        {
            "icon": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="h-6 w-6" alt="TailwindCSS icon" />,
            "name": "TailwindCSS"
        },
        {
            "icon": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" className="h-6 w-6" alt="Firebase icon" />,
            "name": "Firebase"
        },
        {
            "icon": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" className="h-6 w-6" alt="Fltter icon" />,
            "name": "Flutter"
        },
        {
            "icon": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" className="h-6 w-6" alt="Postman icon" />,
            "name": "Postman"
        },
    ]

    return (
        <section ref={skillsRef} className="flex flex-col max-w-container mx-auto pt-4 px-8 md:px-0">
            <h1 className="text-xl text-lightText dark:text-darkText">#Technologies</h1>
            <div className="grid grid-cols-2 gap-6 mt-6 sm:grid-cols-3 md:grid-cols-4">
                {techs.map((tech, index) => (
                    <div key={index} className="flex justify-between items-center border border-neutral-300 dark:border-neutral-700 rounded-lg py-2 px-4 hover:bg-neutral-400/10 dark:hover:bg-neutral-950">
                        {tech.icon}
                        <h2 className="text-center text-sm text-lightSecondaryText dark:text-darkSecondaryText">{tech.name}</h2>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Technologies