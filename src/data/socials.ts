import fb from "@/assets/icons/socials/facebook-icon.png";
import github from "@/assets/icons/socials/github-icon.png";
import linkedIn from "@/assets/icons/socials/linkedin-icon.png";
import gmail from "@/assets/icons/socials/gmail-icon.png";

const socialLinks = [
    { name: "Facebook", link: "https://www.facebook.com/ericsamuelmnopi", icon: fb, alt: "Facebook icon" },
    { name: "Github", link: "https://github.com/ericsmslvdr", icon: github, alt: "Github icon" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/ericsmsalvador/", icon: linkedIn, alt: "LinkedIn icon" },
];

export const footerSocials = socialLinks;

export const heroSocials = [
    ...socialLinks,
    { name: "Resume", link: "https://drive.google.com/file/d/1YF6krOmzvvgCU7Z5UaLF8teXH4HkK1Fd/view?usp=sharing", icon: "resume", alt: "Resume" },
];

export const otherSocials = [
    { name: "Gmail", link: "mailto:ericsmsalvador@gmail.com", icon: gmail, alt: "Gmail icon" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/ericsmsalvador/", icon: linkedIn, alt: "LinkedIn icon" },
    { name: "Facebook", link: "https://www.facebook.com/ericsamuelmnopi", icon: fb, alt: "Facebook icon" },
];
