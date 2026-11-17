import { useMenu } from "@/contexts/useMenu";
import { projects, projectsContent } from "@/data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
    const { projectsRef } = useMenu();

    return (
        <section ref={projectsRef} className="mx-auto flex max-w-container flex-col px-8 pt-16 md:px-0">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{projectsContent.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{projectsContent.description}</p>
            <div className="mt-6 flex flex-col gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.title} projectCard={project}>
                        <ProjectCard.Demo />
                        <ProjectCard.Content />
                    </ProjectCard>
                ))}
            </div>
        </section>
    );
}

export default Projects;
