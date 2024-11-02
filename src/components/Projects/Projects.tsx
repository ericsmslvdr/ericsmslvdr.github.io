import { useMenu } from '@/contexts/MenuContext';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const { projectsRef } = useMenu();

    return (
        <section ref={projectsRef} className="flex flex-col max-w-container mx-auto mt-16 px-9 md:px-0">
            <h1 className='text-xl text-lightText dark:text-darkText'>#Projects</h1>
            <div className="flex flex-col gap-10 mt-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} projectCard={project}>
                        <ProjectCard.Demo />
                        <ProjectCard.Content />
                    </ProjectCard>
                ))}
            </div>
        </section>
    );
}

export default Projects;