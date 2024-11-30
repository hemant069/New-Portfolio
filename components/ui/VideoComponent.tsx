"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReactPlayer from "react-player";

const VideoComponent = ({ isVideo }) => {
  const videoSource = "/video/react.mp4";
  return (
    <div className="border border-red-800">
      {/* <Dialog> */}
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent className="border border-red-900">
        <div className="flex justify-center items-center">
          {isVideo && (
            <ReactPlayer url={videoSource} controls width={"400px"} />
          )}
        </div>
      </DialogContent>
      {/* </Dialog> */}
    </div>
  );
};

export default VideoComponent;
