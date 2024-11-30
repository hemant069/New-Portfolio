"use client";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import react from "../public/skills/react.svg";
import mongodb from "../public/skills/mongoDB.svg";
import css from "../public/skills/css.svg";
import tailwind from "../public/skills/tailwind.svg";
import html from "../public/skills/html.svg";
import javascript from "../public/skills/javascript.svg";
import bootstrap from "../public/skills/bootstrap.svg";
import nextjs from "../public/skills/nextJS.svg";
import mysql from "../public/skills/mysql.svg";

const Skills = () => {
  const IconArr = [
    { name: "React Js", icon: react },
    { name: "Next Js", icon: nextjs },
    { name: "MongoDB", icon: mongodb },
    { name: "Html", icon: html },
    { name: "Javascript", icon: javascript },
    { name: "BootStrap", icon: bootstrap },
    { name: "Css", icon: css },
    { name: "My SQL", icon: mysql },
    { name: "Tailwind", icon: tailwind },
  ];

  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      playOnInit: true,
    })
  );

  return (
    <>
      <div className="w-full max-w-6xl mx-auto px-4">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            loop: true,
            dragFree: true,
            slidesToScroll: "auto",
          }}
        >
          <CarouselContent className="flex gap-6">
            {IconArr.map((el, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/4 lg:basis-1/6 flex-shrink-0"
              >
                <Card className="h-full hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg">
                  <CardContent className="flex items-center justify-center p-6 h-full">
                    <div className="flex flex-col items-center justify-center gap-4 w-full">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <Image
                          src={el.icon}
                          alt={el.name}
                          width={50}
                          height={50}
                          className="object-contain max-w-full max-h-full transition-transform duration-300"
                        />
                      </div>
                      <p className="text-center font-semibold text-sm text-gray-700">
                        {el.name}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default Skills;
