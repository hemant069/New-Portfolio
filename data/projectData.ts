import { projectTypes } from "@/types/projectTypes";
import instagram from "../public/Projects/instagram_donwloder.png";
import frazzo from "../public/Projects/Frazzo.png";
import baazaar from "../public/Projects/baazarcart.png";
import gitcard from "../public/Projects/gitcard.png";
// import baazarvideo from "video/baazarCart.mp4";
// import instagramvideo from "video/instagram.mp4";
const baazarvideo = "video/baazarCart.mp4";
const instagramvideo = "video/instagram.mp4";
export const ProjectDetails: projectTypes[] = [
  {
    id: 1,
    name: "MindVerse",
    description:
      "Bazaarcart is an e-commerce application that provides customers with a convenient and hassle-free shopping experience. At Bazaarcart, we offer a wide range of products including mobile devices, groceries, and clothes.",
    tech: "Javascript, ReactJs, Tailwind, Redux, ExpressJs, MongoDB, Nodejs",
    live_link: "https://bazaarcart.vercel.app/",
    github_link: "https://github.com/hemant069/Bazaar-Cart",
    img: baazaar,
    video: baazarvideo,
  },
  {
    id: 2,
    name: "BaazarCart",
    description:
      "Bazaarcart is an e-commerce application that provides customers with a convenient and hassle-free shopping experience. At Bazaarcart, we offer a wide range of products including mobile devices, groceries, and clothes.",
    tech: "Javascript, ReactJs, Tailwind, Redux, ExpressJs, MongoDB, Nodejs",
    live_link: "https://bazaarcart.vercel.app/",
    github_link: "https://github.com/hemant069/Bazaar-Cart",
    img: baazaar,
    video: baazarvideo,
  },
  {
    id: 3,
    name: "GitCard",
    description:
      "A Product where you can donwload your Git Profile card which you can share with the social media like twitter, instagram, linkdin and many more places to showcase you skill and knowledge",
    tech: "Javascript, ReactJs, Tailwind, Redux, ExpressJs, MongoDB, Nodejs",
    live_link: "https://gitusercard.vercel.app/",
    github_link: "#",
    img: gitcard,
  },
  {
    id: 4,
    name: "Frazzo Clone",
    description:
      "Frazzo Clone is a replica e-commerce platform that provides an intuitive user experience for online shopping, featuring a wide range of products and seamless navigation.",
    tech: "Javascript, ReactJs, Tailwind, Redux, ExpressJs, MongoDB, Nodejs",
    live_link: "https://frazzokefall.netlify.app/",
    github_link: "https://github.com/hemant069/Frazzo-clone",
    img: frazzo,
  },
  {
    id: 5,
    name: "Instagram Downloader",
    description:
      "Instagram downloader is web application where user can download the reels just sharing the link of the reels",
    tech: "Javascript, ReactJs, Tailwind,Redux, ExpressJs, MongoDB, Nodejs",
    live_link: "https://instagram-downloader-fawn.vercel.app/",
    github_link: "https://github.com/hemant069/instagram-downloader",
    img: instagram,
    video: instagramvideo,
  },
];
