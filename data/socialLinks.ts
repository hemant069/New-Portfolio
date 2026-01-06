import { SocialLink } from "@/types/socialTypes";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react"; 

export const socialLinks:SocialLink[] = [
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/hemant069",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/hemant-prajapatii/",
    },
    {
        icon: Twitter,
        label: "Twitter / X",
        href: "https://x.com/hemant069", // Replace with your X/Twitter URL
    },
];