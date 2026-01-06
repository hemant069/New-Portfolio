import { SocialLink } from "@/types/socialTypes";
import { Github, Linkedin, Twitter } from "lucide-react";
import githubPreview from "../public/social/github-preview.png";
import linkedinPreview from "../public/social/linkedin-preview.png";
import twitterPreview from "../public/social/twitter-preview.png";

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
];
