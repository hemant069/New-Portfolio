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

interface Data {
  id: number;
  name: string;
  description: string;
  tech: string;
  live_link: string;
  github_link: string;
  img: string;
}
const ProjectCard = ({ data }: { data: Data }) => {
  const [isVideo, setisVideo] = useState(false);
  return (
    <>
      <Card className="w-[370px] ">
        <CardContent>
          {/* <Image width={350} height={250} alt={`${data.name} project image`} /> */}
          <p className="text-center text-xl">{data.name}</p>
          <p className="leading-normal">{data.description}</p>
          <p className="text-sm text-slate-600">{data.tech}</p>
          <div className="flex items-center justify-between mt-2">
            <Button>Live</Button>
            <Button>GitHub</Button>
            <Dialog>
              <DialogTrigger onClick={() => setisVideo(true)}>
                <p>Video</p>
              </DialogTrigger>
              <VideoComponent isVideo={isVideo} />
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
