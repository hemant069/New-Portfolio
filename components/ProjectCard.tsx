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
import { projectTypes } from "@/types/projectTypes";
import { Github, Globe, Play } from "lucide-react";

const ProjectCard = ({ data }: { data: projectTypes }) => {
  const [isVideo, setisVideo] = useState(false);
  return (
    <>
      <Card className="m-auto hover:scale-105 ease-in-out duration-150 cursor-pointer shadow-lg   ">
        <CardContent className="w-[18rem] h-[26rem] p-2 rounded-lg m-auto">
          <Image
            src={data.img}
            width={350}
            height={250}
            className="w-full rounded-lg object-cover "
            alt={`${data.name} project image`}
          />
          <div className="flex  w-full items-center justify-between">
            <p className="">{data.name}</p>
            <div className="flex items-center justify-between gap-2 ">

              <Link href={data.live_link}>
                <Globe />
              </Link>


              <Link href={data.github_link}>
                <Github />
              </Link>

              {!data.video ? null : (
                <Dialog>
                  <DialogTrigger
                    className=""
                    onClick={() => setisVideo(true)}
                  >
                    <Play />
                  </DialogTrigger>
                  <VideoComponent isVideo={isVideo} video={data.video} />
                </Dialog>
              )}
            </div>
          </div>
          <p className="text-start text-sm text-gray-500 ">{data.description}</p>
          <div className="text-sm mt-2 w-full  grid grid-cols-3 gap-1 text-gray-500 ">
            {data?.tech?.split(",").map((el, i) => (
              <p
                key={i}
                className=" border text-center rounded-md shadow-sm shadow-cyan-500/50 "
              >
                {el}
              </p>
            ))}
          </div>

        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
