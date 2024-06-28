import { PropsWithChildren, createContext, useContext } from "react";

type ProjectCardContext = {
    projectCard: ProjectCard
}

type ProjectCardProps = PropsWithChildren & {
    projectCard: ProjectCard
}

type ProjectCard = {
    demoType: string;
    demoSourceType: string;
    demoAlt: string;
    source: string;
    isReversed: boolean;
    title: string;
    link: string;
    typeOfProject: string;
    projectDescription: string;
    features?: {
        name: string;
        description: string;
    }[];
    techStack: {
        name: string;
        color: string;
    }[];
}

export const ProjectCardContext = createContext<ProjectCardContext | undefined>(undefined)

const useProjectCardContext = () => {
    const context = useContext(ProjectCardContext)
    if (context === undefined) {
        throw new Error('useProjectCardContext must be used within a ProjectCardProvider')
    }
    return context
}

const ProjectCard = ({ children, projectCard }: ProjectCardProps) => {

    return (
        <ProjectCardContext.Provider value={{ projectCard }} >
            <div className={`h-auto w-full flex ${projectCard.isReversed ? 'flex-row-reverse' : ''} gap-4 border border-neutral-700 rounded-lg p-4 hover:bg-neutral-950`}>
                {children}
            </div>
        </ProjectCardContext.Provider>
    )
}

export default ProjectCard

const ProjectCardDemo = () => {
    const { projectCard } = useProjectCardContext()

    return (
        <div className="w-3/5">
            {projectCard.demoType === 'video'
                ? <video autoPlay={true} loop muted>
                    <source src={projectCard.source} type={projectCard.demoSourceType} />
                </video>
                : <img src={projectCard.source} alt={projectCard.demoAlt} />
            }
        </div>
    )
}

const ProjectCardContent = () => {
    const { projectCard } = useProjectCardContext()

    return (
        <div className="w-2/5 h-auto">
            <a
                href={projectCard.link}
                target='_blank'
                rel="noopener noreferrer"
                aria-label={`View ${projectCard.title}`}
                className="text-light hover:text-link flex items-center group"
            >
                <span className="truncate">{projectCard.title}</span>
                {
                    projectCard.link !== '' &&
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1 text-light group-hover:text-link"
                        viewBox="0 0 24 24"
                    >
                        <path fill="currentColor" d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                }
            </a>
            <h2 className='text-sm text-gray italic'>{projectCard.typeOfProject}</h2>
            <p className="my-4 text-gray text-sm">{projectCard.projectDescription}</p>
            {projectCard.features && (
                <ul className="mb-4 list-disc list-inside pl-4 text-gray">
                    {projectCard.features.map((feature, index) => (
                        <li className='text-sm' key={index}>
                            <span className='text-light'>{feature.name}: </span>
                            {feature.description}
                        </li>
                    ))}
                </ul>
            )}
            <div className="flex flex-wrap items-center gap-2">
                {projectCard.techStack.map((tech, index) => (
                    <div key={index} className={`text-xs text-${tech.color}-400 border border-${tech.color}-400 rounded-lg px-2`}>
                        {tech.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

ProjectCard.Demo = ProjectCardDemo;
ProjectCard.Content = ProjectCardContent;
