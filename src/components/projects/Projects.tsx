import davaoDemo from '@videos/davao.webm';
import officesDemo from '@videos/offices.webm';
import commercialDemo from '@videos/commercial.webm';
import research from '@images/research.webp';
import gwCMSDemo from '@videos/gw-cms.webm';
import gwDemo from '@videos/gw.webm';
import pattrackDemo from '@videos/pattrack.mp4'
import ProjectCard from './components/ProjectCard';
import { useContext } from 'react';
import MenuContext from '../../contexts/MenuContext';

const Projects = () => {
    const { projectsRef } = useContext(MenuContext);

    const projects: ProjectCard[] = [
        {
            demoType: 'video',
            demoSourceType: 'video/webm',
            demoAlt: 'Davao Prime Philippines Demo',
            source: davaoDemo,
            isReversed: false,
            title: 'Davao Prime Philippines',
            link: 'https://davao.primephilippines.com/',
            typeOfProject: 'Internship Project',
            projectDescription: "Showcases PRIME Philippines' real estate services and property listings in Davao.",
            techStack: [
                { name: 'React', color: 'blue' },
                { name: 'Axios', color: 'green' },
                { name: 'Redux', color: 'red' },
                { name: 'SASS', color: 'pink' },
            ]
        },
        {
            demoType: 'video',
            demoSourceType: 'video/webm',
            demoAlt: 'Offices Prime Philippines Demo',
            source: officesDemo,
            isReversed: true,
            title: 'Offices Prime Philippines',
            link: 'https://offices.primephilippines.com/',
            typeOfProject: 'Internship Project',
            projectDescription: "Focuses on available office spaces for lease or sale managed by PRIME Philippines.",
            techStack: [
                { name: 'React', color: 'blue' },
                { name: 'Axios', color: 'green' },
                { name: 'Redux', color: 'red' },
                { name: 'SASS', color: 'pink' },
            ]
        },
        {
            demoType: 'video',
            demoSourceType: 'video/webm',
            demoAlt: 'Commercial Properties Prime Philippines Demo',
            source: commercialDemo,
            isReversed: false,
            title: 'Commercial Properties Prime Philippines',
            link: 'https://commercialproperties.primephilippines.com/',
            typeOfProject: 'Internship Project',
            projectDescription: "Highlights commercial real estate offerings such as retail, industrial, and warehouse spaces.",
            techStack: [
                { name: 'React', color: 'blue' },
                { name: 'Axios', color: 'green' },
                { name: 'Redux', color: 'red' },
                { name: 'SASS', color: 'pink' },
            ]
        },
        {
            demoType: 'image',
            demoSourceType: 'image/webp',
            demoAlt: 'Research Prime Philippines Website',
            source: research,
            isReversed: true,
            title: 'Research Prime Philippines',
            link: 'https://research.primephilippines.com/',
            typeOfProject: 'Internship Project',
            projectDescription: "Provides market research, reports, and insights into the real estate market for investors and businesses.",
            techStack: [
                { name: 'React', color: 'blue' },
                { name: 'Axios', color: 'green' },
                { name: 'Redux', color: 'red' },
                { name: 'SASS', color: 'pink' },
            ]
        },
        {
            demoType: 'video',
            demoSourceType: 'video/webm',
            demoAlt: 'GreatWork Global Website Demo',
            source: gwDemo,
            isReversed: false,
            title: 'GreatWork Global',
            link: '',
            typeOfProject: 'Internship Project',
            projectDescription: "GreatWork Global provides modern, tech-powered workspaces, including serviced offices, co-working spaces, virtual offices, and meeting rooms, designed for productivity and a healthy work-life balance.",
            techStack: [
                { name: 'React', color: 'blue' },
                { name: 'Axios', color: 'green' },
                { name: 'Redux', color: 'red' },
                { name: 'SASS', color: 'pink' },
            ]
        },
        {
            demoType: 'video',
            demoSourceType: 'video/webm',
            demoAlt: 'GreatWork Global CMS Demo',
            source: gwCMSDemo,
            isReversed: true,
            title: 'GreatWork Global CMS',
            link: '',
            typeOfProject: 'Internship Project',
            projectDescription: "The content management system for GreatWork Global streamlines the management and customization on their workspace offerings for their website, ensuring efficient service delivery and user experience.",
            techStack: [
                { name: 'React', color: 'blue' },
                { name: 'Axios', color: 'green' },
                { name: 'NodeJS', color: 'lime' },
                { name: 'Typescript', color: 'cyan' },
                { name: 'Express', color: 'slate' },
                { name: 'Prisma ORM', color: 'indigo' },
                { name: 'MySQL', color: 'sky' },
                { name: 'SASS', color: 'pink' },
            ]
        },
        {
            demoType: 'video',
            demoSourceType: 'video/mp4',
            demoAlt: 'Pattrack Mobile App Demo',
            source: pattrackDemo,
            isReversed: false,
            title: 'Pattrack Mobile App',
            link: '',
            typeOfProject: 'Capstone Project',
            projectDescription: "A Patient Tracker System for Rural Health Units (RHUs) with SMS Notification",
            features: [
                {
                    name: 'User Management',
                    description: 'Manage different user roles.'
                },
                {
                    name: 'Medicine Inventory',
                    description: 'Track and manage medication stock.'
                },
                {
                    name: 'Queuing System',
                    description: 'Organize patient flow. Includes a dedicated queueing screen web app for real-time updates.'
                },
                {
                    name: 'Vitals and Diagnosis Recording',
                    description: 'Collect vital signs, allow doctors to diagnose, and prescribe medications.'
                },
                {
                    name: 'Patient Portal',
                    description: 'Patients can queue themselves for appointments and access their medical records and prescriptions.'
                },
                {
                    name: 'Report Generation',
                    description: 'Export reports in Excel and PDF formats.'
                }
            ],
            techStack: [
                { name: 'FlutterFlow', color: 'indigo' },
                { name: 'Firebase', color: 'amber' },
                { name: 'Syncfusion', color: 'violet' },
                { name: 'CraftMyPDF', color: 'rose' },
            ]
        },
    ]

    return (
        <section ref={projectsRef} className="flex flex-col max-w-container mx-auto mt-16 px-9 md:px-0">
            <h1 className='text-xl text-light'>#Projects</h1>
            <div className="flex flex-col gap-10 mt-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} projectCard={project}>
                        <ProjectCard.Demo />
                        <ProjectCard.Content />
                    </ProjectCard>
                ))}
            </div>
        </section>
    )
}

export default Projects