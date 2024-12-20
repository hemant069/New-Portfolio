"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Eg from "../public/my_ai_img-removebg-preview (1).png";

import ReactPlayer from "react-player";
import VideoComponent from "./ui/VideoComponent";
import { Dialog, DialogTrigger } from "./ui/dialog";
import Link from "next/link";

interface Data {
  id: number;
  name: string;
  description: string;
  tech: string;
  live_link: string;
  github_link: string;
  img: any;
  video?: any;
}
const ProjectCard = ({ data }: { data: Data }) => {
  const [isVideo, setisVideo] = useState(false);
  return (
    <>
      <Card className=" hover:scale-105 ease-in-out duration-150 cursor-pointer shadow-lg shadow-indigo-500/50 lg:w-[370px]">
        <CardContent className="">
          <Image
            src={data.img}
            width={350}
            height={250}
            className="mt-2 rounded-lg"
            alt={`${data.name} project image`}
          />
          <p className="text-left mt-2 text-xl">{data.name}</p>
          <p className="leading-normal h-[10rem]">{data.description}</p>
          <div className="text-sm mt-1 w-full  grid grid-cols-3 gap-1 text-slate-600 ">
            {data?.tech?.split(",").map((el, i) => (
              <p
                key={i}
                className=" border text-center rounded-md shadow-sm shadow-cyan-500/50 "
              >
                {el}
              </p>
            ))}
          </div>
          <div className="flex items-center justify-between mt-8">
            <Button>
              <Link href={data.live_link}>Live</Link>
            </Button>
            <Button>
              <Link href={data.github_link}>GitHub</Link>
            </Button>
            {!data.video ? null : (
              <Dialog>
                <DialogTrigger
                  className="border px-5 bg-[#18181a] py-0.5 text-white rounded-md"
                  onClick={() => setisVideo(true)}
                >
                  <p>Video</p>
                </DialogTrigger>
                <VideoComponent isVideo={isVideo} video={data.video} />
              </Dialog>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
