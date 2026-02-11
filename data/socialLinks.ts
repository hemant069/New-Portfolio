import { SocialLink } from "@/types/socialTypes";
import { Github, Instagram, Linkedin, Mail, Twitter, NotebookTabs } from "lucide-react";
import githubPreview from "../public/github-preview.webp";
import linkedinPreview from "../public/linkedin-preview.webp";
import twitterPreview from "../public/twitter-preview.webp";
import instagramPreview from "../public/instagram.png";
import MailPreview from "../public/mailpreview.png";
import Resume from "../public/resume.png"

export const socialLinks: SocialLink[] = [
  {
    icon: NotebookTabs,
    label: "Resume",
    href: "https://drive.google.com/file/d/1-_jmtYaXVYKAyEKoQSmhLvoiU4kjqBTx/view?usp=drive_link",
    previewImg: Resume,
  }
  ,
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
    icon: Mail,
    label: "Mail",
    href: "mailto:hemantprajapati20500@gmail.com",
    previewImg: MailPreview,
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
