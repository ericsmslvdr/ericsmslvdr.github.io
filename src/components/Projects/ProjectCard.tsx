import { PropsWithChildren, createContext, useContext } from "react";
import LinkText from "../ui/LinkText";

type ProjectCardContext = {
    projectCard: ProjectCard;
};

type ProjectCardProps = {
    projectCard: ProjectCard;
} & PropsWithChildren;

type ProjectCard = {
    demoType: string;
    demoSourceType: string;
    demoAlt: string;
    source: string;
    isReversed: boolean;
    title: string;
    link: string | undefined;
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
};

export const ProjectCardContext = createContext<ProjectCardContext | undefined>(undefined);

function useProjectCardContext() {
    const context = useContext(ProjectCardContext);

    if (context === undefined) {
        throw new Error('useProjectCardContext must be used within a ProjectCardProvider');
    }
    return context;
}

function ProjectCard({ children, projectCard }: ProjectCardProps) {
    return (
        <ProjectCardContext.Provider value={{ projectCard }} >
            <div className={`h-auto w-full flex flex-col md:flex-row ${projectCard.isReversed ? 'flex-row-reverse' : ''} gap-4 border border-neutral-300 dark:border-neutral-700 rounded-lg p-4 hover:bg-neutral-400/10 dark:hover:bg-neutral-950`}>
                {children}
            </div>
        </ProjectCardContext.Provider>
    );
}

export default ProjectCard;

function ProjectCardDemo() {
    const { projectCard } = useProjectCardContext();

    return (
        <div className="w-full md:w-3/5">
            {projectCard.demoType === 'video'
                ? <video autoPlay={true} loop muted>
                    <source src={projectCard.source} type={projectCard.demoSourceType} />
                </video>
                : <img src={projectCard.source} alt={projectCard.demoAlt} />
            }
        </div>
    );
}

const ProjectCardContent = () => {
    const { projectCard } = useProjectCardContext();

    const colors: { [key: string]: string } = {
        blue: 'text-blue-700 border-blue-700 dark:text-blue-400 dark:border-blue-400',
        green: 'text-green-700 border-green-700 dark:text-green-400 dark:border-green-400',
        red: 'text-red-700 border-red-700 dark:text-red-400 dark:border-red-400',
        pink: 'text-pink-700 border-pink-700 dark:text-pink-400 dark:border-pink-400',
        lime: 'text-lime-700 border-lime-700 dark:text-lime-400 dark:border-lime-400',
        cyan: 'text-cyan-700 border-cyan-700 dark:text-cyan-400 dark:border-cyan-400',
        slate: 'text-slate-700 border-slate-700 dark:text-slate-400 dark:border-slate-400',
        indigo: 'text-indigo-700 border-indigo-700 dark:text-indigo-400 dark:border-indigo-400',
        sky: 'text-sky-700 border-sky-700 dark:text-sky-400 dark:border-sky-400',
        amber: 'text-amber-700 border-amber-700 dark:text-amber-400 dark:border-amber-400',
        violet: 'text-violet-700 border-violet-700 dark:text-violet-400 dark:border-violet-400',
        rose: 'text-rose-700 border-rose-700 dark:text-rose-400 dark:border-rose-400',
    };

    return (
        <div className="w-full md:w-2/5 h-auto">
            {projectCard.link !== "" ? (
                <LinkText
                    href={projectCard.link}
                    aria-label={`View ${projectCard.title}`}
                    text={projectCard.title}
                    textClassName="text-lightText dark:text-darkText"
                    iconClassName="h-5 w-5"
                />
            ) : (
                <span className="text-lightText dark:text-darkText">{projectCard.title}</span>
            )}

            <h2 className='text-sm text-lightSecondaryText dark:text-darkSecondaryText italic'>{projectCard.typeOfProject}</h2>
            <p className="my-4 text-lightSecondaryText dark:text-darkSecondaryText text-sm">{projectCard.projectDescription}</p>
            {projectCard.features && (
                <ul className="mb-4 list-disc list-inside pl-4 text-lightSecondaryText dark:text-darkSecondaryText">
                    {projectCard.features.map((feature, index) => (
                        <li className='text-sm' key={index}>
                            <span className='text-lightText dark:text-darkText'>{feature.name}: </span>
                            {feature.description}
                        </li>
                    ))}
                </ul>
            )}
            <div className="flex flex-wrap items-center gap-2">
                {projectCard.techStack.map((tech, index) => {
                    const textAndBorderColor = colors[tech.color]
                    const className = `text-xs border ${textAndBorderColor} rounded-lg px-2`

                    return (
                        <div key={index} className={className}>
                            {tech.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

ProjectCard.Demo = ProjectCardDemo;
ProjectCard.Content = ProjectCardContent;
