import { createContext, useContext } from "react";
import type { PropsWithChildren } from "react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

type ProjectCardContext = {
    projectCard: Project;
};

type ProjectCardProps = {
    projectCard: Project;
} & PropsWithChildren;

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
            <Card className="w-full transition-colors hover:border-foreground/20 hover:shadow-md">
                <div className={`flex w-full flex-col gap-4 ${projectCard.isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    {children}
                </div>
            </Card>
        </ProjectCardContext.Provider>
    );
}

export default ProjectCard;

function ProjectCardDemo() {
    const { projectCard } = useProjectCardContext();

    return (
        <div className="w-full overflow-hidden bg-muted md:w-3/5">
            {projectCard.demoType === 'video'
                ? <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                    <source src={projectCard.source} type={projectCard.demoSourceType} />
                </video>
                : <img src={projectCard.source} alt={projectCard.demoAlt} className="h-full w-full object-cover" />
            }
        </div>
    );
}

const ProjectCardContent = () => {
    const { projectCard } = useProjectCardContext();

    return (
        <CardContent className="flex w-full flex-col justify-center gap-4 p-6 md:w-2/5">
            <CardHeader className="p-0">
                <CardTitle className="text-xl">
                    {projectCard.link ? (
                        <a href={projectCard.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                            {projectCard.title}<ArrowUpRight className="size-4" aria-hidden="true" />
                        </a>
                    ) : projectCard.title}
                </CardTitle>
                <CardDescription>{projectCard.typeOfProject}</CardDescription>
            </CardHeader>
            <p className="text-sm leading-relaxed text-muted-foreground">{projectCard.projectDescription}</p>
            {projectCard.features && (
                <ul className="mb-4 list-disc list-inside pl-4 text-muted-foreground">
                    {projectCard.features.map((feature, index) => (
                        <li className='text-sm' key={index}>
                            <span className='text-foreground'>{feature.name}: </span>
                            {feature.description}
                        </li>
                    ))}
                </ul>
            )}
            <div className="flex flex-wrap items-center gap-2">
                {projectCard.techStack.map((tech) => (
                    <Badge key={tech.name} variant="secondary">
                        {tech.name}
                    </Badge>
                ))}
            </div>
        </CardContent>
    );
}

ProjectCard.Demo = ProjectCardDemo;
ProjectCard.Content = ProjectCardContent;
