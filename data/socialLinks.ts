import { SocialLink } from "@/types/socialTypes";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import githubPreview from "../public/github-preview.webp";
import linkedinPreview from "../public/linkedin-preview.webp";
import twitterPreview from "../public/twitter-preview.webp";
import instagramPreview from "../public/instagram.png";

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/hemant069",
    previewImg: githubPreview,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hemant-prajapatii/",
    previewImg: linkedinPreview,
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    href: "https://x.com/hemant069",
    previewImg: twitterPreview,
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/hemant_069/",
    previewImg: instagramPreview,
  },
];
