import { companiesTypes } from "@/types/companiesTypes";
import React from "../public/skills/react.svg";
import Css from "../public/skills/css.svg";
import Javascript from "../public/skills/javascript.svg";
import tailwind from "../public/skills/tailwind.svg";
import MongoDb from "../public/skills/mongoDB.svg";
import NextJs from "../public/skills/nextJS.svg";

export const companies: companiesTypes[] = [
  {
    name: "Baaz",
    joinning_date: "March 2024",
    end_date: "Present",
    role: "Frontend Engineer",
    location: "Bangalore, India (Remote)",
    description: [
      "Built a desktop application from the ground up, enabling multi-role functionalities for super-admin, builder, site engineer, vendors, and consumers.",
      "Created and integrated key features for super-admin, including builder management, dashboard analytics, invoice tracking, and payment history, ensuring seamless API integration.",
      "Developed and integrated project management features such as project creation, listings, and detailed views, along with modules for accommodation, blocks, PLC, and payment stages.",
      "Designed, developed, and deployed a backend for a Chatbot solution that switches between various internal APIs using different NLU intents.",
    ],
    status: true,
    tools: [React, NextJs, Javascript, tailwind, Css, MongoDb],
  },
  {
    name: "Masai labs",
    joinning_date: "Feburary 2023",
    end_date: "December 2023",
    role: "Full stack developer",
    location: "Bangalore, India (Remote)",
    description: [
      "Implemented a streamlined process for team formation, utilizing a custom-built software solution, resulting in a 30% reduction in time spent on team creation and assignment.",
      "Implemented a highly intuitive, user-friendly form, improving accessibility and allowing users to interact with ease at any time.",
      "Designed and developed a robust admin dashboard with comprehensive functionalities, enabling the creation, deletion, assignment, and analytics of forms.",
      "Utilized React and react-chartjs to implement an analytics view, providing administrators with visually insightful data to drive informed decision-making.",
    ],
    status: false,
    tools: [React, NextJs, Javascript],
  },
];
