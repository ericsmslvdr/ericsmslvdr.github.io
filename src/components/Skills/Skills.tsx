import { useMenu } from "@/contexts/MenuContext";
import { technologies } from "@/data/technologies";
import Icon from "../ui/Icon";

const Skills = () => {
    const { skillsRef } = useMenu();

    return (
        <section ref={skillsRef} className="flex flex-col max-w-container mx-auto pt-4 px-8 md:px-0">
            <h1 className="text-xl text-lightText dark:text-darkText">#Technologies</h1>
            <div className="grid grid-cols-2 gap-6 mt-6 sm:grid-cols-3 md:grid-cols-4">
                {technologies.map((tech, index) => (
                    <div key={index} className="flex justify-between items-center border border-neutral-300 dark:border-neutral-700 rounded-lg py-2 px-4 hover:bg-neutral-400/10 dark:hover:bg-neutral-950">
                        <Icon src={tech.icon} alt={tech.alt} />
                        <h2 className="text-center text-sm text-lightSecondaryText dark:text-darkSecondaryText">{tech.name}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;