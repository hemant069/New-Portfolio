"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { Dialog, DialogTrigger } from "./ui/dialog";
import Link from "next/link";
import { projectTypes, skillTypes } from "@/types/projectTypes";
import { Github, Globe, Play, Video } from "lucide-react";
import { motion } from "framer-motion";
import VideoComponent from "./ui/VideoComponent";

const ProjectCard = ({ data, index }: { data: projectTypes; index?: number }) => {
  const [isVideo, setisVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index || 0) * 0.1 }}
      whileHover={{ y: -4 }}
      className="w-full h-full"
    >
      <div className="border border-border p-[0.98] rounded-sm relative z-10 overflow-hidden h-full flex flex-col">
        <div
          className="animate-rotate rounded-sm absolute inset-0 h-full w-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"
        ></div>
        <Card
          className="border-none rounded-none relative   sm:h-full md:h-[500px] lg:h-full z-20 bg-card inset-shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col" onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          <CardContent className="p-0 flex flex-col flex-1">
            {/* Image Container */}
            <div className="relative ">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full "
              >
                <Image
                  src={data.img}
                  width={400}
                  height={200}

                  className="w-full  object-cover rounded-lg h-40 sm:h-44 md:h-48 lg:h-52 "
                  alt={`${data.name} project image`}
                />
              </motion.div>

              {/* Overlay on Hover - Desktop/Tablet */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/40 hidden sm:flex items-center justify-center gap-3 sm:gap-4"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: isHovered ? 1 : 0.8,
                    opacity: isHovered ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={data.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </Link>
                </motion.div>

                {data.video && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: isHovered ? 1 : 0.8,
                      opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Dialog>
                      <DialogTrigger
                        className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
                        onClick={() => setisVideo(true)}
                      >
                        <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-white" />
                      </DialogTrigger>
                      <VideoComponent isVideo={isVideo} video={data.video} />
                    </Dialog>
                  </motion.div>
                )}

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: isHovered ? 1 : 0.8,
                    opacity: isHovered ? 1 : 0
                  }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={data.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3 flex-1 flex flex-col">
              {/* Title and Links */}
              <div className="flex  gap-2 sm:gap-3">
                <motion.h3
                  className="text-base sm:text-lg md:text-lg font-semibold text-foreground flex-1 min-w-0"
                  whileHover={{ x: 2 }}
                >
                  <span className="break-words">{data.name}</span>
                </motion.h3>

                {/* Links - Always Visible */}
                <div className="flex items-center  gap-2 ">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      href={data.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md hover:bg-accent/50 transition-colors"
                      aria-label="Visit live site"
                    >
                      <Globe className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground transition-colors" />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      href={data.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md hover:bg-accent/50 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground hover:text-foreground transition-colors" />
                    </Link>
                  </motion.div>

                  {data.video && (
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Dialog>
                        <DialogTrigger
                          className="rounded-md hover:bg-accent/50 transition-colors"
                          onClick={() => setisVideo(true)}
                          aria-label="Play video"
                        >
                          {/* <Play className="w-3.5 h-3.5  text-gray-400 hover:text-white transition-colors fill-gray-400" /> */}

                        </DialogTrigger>
                        <VideoComponent isVideo={isVideo} video={data.video} />
                      </Dialog>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-3">
                {data.description}
              </p>

              {/* Tech Stack Tags */}
              <div className=" grid grid-cols-3 gap-1.5 sm:gap-2">
                {data?.tech?.map((tech: skillTypes, i) => (
                  <motion.div
                    key={tech.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index || 0) * 0.03 + i * 0.03 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }}
                    className=" flex items-center gap-1 sm:px-2.5 py-0.5 sm:py-1 text-xs sm:text-xs text-muted-foreground bg-muted/50 border border-border/50 rounded-md transition-all duration-200"
                  >
                    {tech.icon && <div className="w-5 h-5"><tech.icon /></div>}
                    <p className='break-words'>{tech.name}</p>


                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default ProjectCard;