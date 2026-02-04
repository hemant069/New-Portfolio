"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/socialLinks";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import VisitorCounter from "./VisitorCount";

interface FormInput {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const { handleSubmit, register } = useForm<FormInput>();
  const handleOnSumbit: SubmitHandler<FormInput> = (data) => { };

  return (
    <div>
      <div className="flex mt-4 items-center">
        <p className="text-xl">Let's Build Something Awesome Together! </p>
        <p className="text-3xl animate-bounce">🙋‍♂️</p>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-400">Find me on these platforms</p>
      </div>

      {/* Social list with hover previews */}
      <div className="mt-4  lg:flex justify-between ">
        <div className="flex  gap-2">
          <TooltipProvider delayDuration={0}>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Tooltip key={link.href}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-md border border-border px-4 py-1 hover:bg-accent/40 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                      <span className=" hidden text-sm">{link.label}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="flex flex-col items-center gap-2">
                    <Image
                      src={link.previewImg}
                      alt={`${link.label} preview`}
                      width={250}
                      height={250}
                      className="rounded-md object-cover"
                    />
                    <p className="text-xs text-muted-foreground">
                      {link.label} profile preview
                    </p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </div>
        <div className="flex justify-center">
          <VisitorCounter />
        </div>
      </div>

      {/* your form (still commented) ... */}
      <div className="flex flex-col justify-center items-center mt-4">
        <p className="text-sm">Design & Developed by <span className="font-semibold font-mono">Hemant</span></p>
        <p className="text-sm"> © 2026. All rights reserved.</p>
      </div>
    </div>
  );
}