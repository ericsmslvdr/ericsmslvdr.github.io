import davaoDemo from "@/assets/videos/davao.webm";
import officesDemo from "@/assets/videos/offices.webm";
import commercialDemo from "@/assets/videos/commercial.webm";
import research from "@/assets/images/research.webp";
import gwCmsDemo from "@/assets/videos/gw-cms.webm";
import gwDemo from "@/assets/videos/gw.webm";
import pattrackDemo from "@/assets/videos/pattrack.mp4";

export type Project = {
    demoType: "video" | "image";
    demoSourceType: string;
    demoAlt: string;
    source: string;
    isReversed: boolean;
    title: string;
    link?: string;
    typeOfProject: string;
    projectDescription: string;
    features?: { name: string; description: string }[];
    techStack: { name: string }[];
};

export const projects: Project[] = [
    {
        demoType: "video",
        demoSourceType: "video/webm",
        demoAlt: "Davao Prime Philippines Demo",
        source: davaoDemo,
        isReversed: false,
        title: "Davao Prime Philippines",
        link: "https://davao.primephilippines.com/",
        typeOfProject: "Internship Project",
        projectDescription: "Showcases PRIME Philippines' real estate services and property listings in Davao.",
        techStack: [{ name: "React" }, { name: "Axios" }, { name: "Redux" }, { name: "SASS" }],
    },
    {
        demoType: "video",
        demoSourceType: "video/webm",
        demoAlt: "Offices Prime Philippines Demo",
        source: officesDemo,
        isReversed: true,
        title: "Offices Prime Philippines",
        link: "https://offices.primephilippines.com/",
        typeOfProject: "Internship Project",
        projectDescription: "Focuses on available office spaces for lease or sale managed by PRIME Philippines.",
        techStack: [{ name: "React" }, { name: "Axios" }, { name: "Redux" }, { name: "SASS" }],
    },
    {
        demoType: "video",
        demoSourceType: "video/webm",
        demoAlt: "Commercial Properties Prime Philippines Demo",
        source: commercialDemo,
        isReversed: false,
        title: "Commercial Properties Prime Philippines",
        link: "https://commercialproperties.primephilippines.com/",
        typeOfProject: "Internship Project",
        projectDescription: "Highlights commercial real estate offerings such as retail, industrial, and warehouse spaces.",
        techStack: [{ name: "React" }, { name: "Axios" }, { name: "Redux" }, { name: "SASS" }],
    },
    {
        demoType: "image",
        demoSourceType: "image/webp",
        demoAlt: "Research Prime Philippines Website",
        source: research,
        isReversed: true,
        title: "Research Prime Philippines",
        link: "https://research.primephilippines.com/",
        typeOfProject: "Internship Project",
        projectDescription: "Provides market research, reports, and insights into the real estate market for investors and businesses.",
        techStack: [{ name: "React" }, { name: "Axios" }, { name: "Redux" }, { name: "SASS" }],
    },
    {
        demoType: "video",
        demoSourceType: "video/webm",
        demoAlt: "GreatWork Global Website Demo",
        source: gwDemo,
        isReversed: false,
        title: "GreatWork Global",
        link: "",
        typeOfProject: "Internship Project",
        projectDescription: "GreatWork Global provides modern, tech-powered workspaces, including serviced offices, co-working spaces, virtual offices, and meeting rooms, designed for productivity and a healthy work-life balance.",
        techStack: [{ name: "React" }, { name: "Axios" }, { name: "Redux" }, { name: "SASS" }],
    },
    {
        demoType: "video",
        demoSourceType: "video/webm",
        demoAlt: "GreatWork Global CMS Demo",
        source: gwCmsDemo,
        isReversed: true,
        title: "GreatWork Global CMS",
        link: "",
        typeOfProject: "Internship Project",
        projectDescription: "The content management system for GreatWork Global streamlines the management and customization of its workspace offerings, supporting efficient service delivery and user experience.",
        techStack: [{ name: "React" }, { name: "Axios" }, { name: "Redux" }, { name: "NodeJS" }, { name: "TypeScript" }, { name: "Express" }, { name: "Prisma ORM" }, { name: "MySQL" }, { name: "SASS" }],
    },
    {
        demoType: "video",
        demoSourceType: "video/mp4",
        demoAlt: "Pattrack Mobile App Demo",
        source: pattrackDemo,
        isReversed: false,
        title: "Pattrack Mobile App",
        link: "",
        typeOfProject: "Capstone Project",
        projectDescription: "A Patient Tracker System for Rural Health Units (RHUs) with SMS Notification.",
        features: [
            { name: "User Management", description: "Manage different user roles." },
            { name: "Medicine Inventory", description: "Track and manage medication stock." },
            { name: "Queuing System", description: "Organize patient flow, including a dedicated queueing screen for real-time updates." },
            { name: "Vitals and Diagnosis Recording", description: "Collect vital signs, allow doctors to diagnose, and prescribe medications." },
            { name: "Patient Portal", description: "Patients can queue themselves for appointments and access their medical records and prescriptions." },
            { name: "Report Generation", description: "Export reports in Excel and PDF formats." },
        ],
        techStack: [{ name: "FlutterFlow" }, { name: "Firebase" }, { name: "Syncfusion" }, { name: "CraftMyPDF" }],
    },
];

export const projectsContent = {
    title: "Selected work",
    description: "A selection of projects and experience.",
};
