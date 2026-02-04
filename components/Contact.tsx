"use client";
import { SubmitHandler, useForm } from "react-hook-form";
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
import { motion } from "framer-motion";

interface FormInput {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const { handleSubmit, register } = useForm<FormInput>();
  const handleOnSumbit: SubmitHandler<FormInput> = (data) => { };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex mt-4 items-center gap-2">
        <p className="text-lg sm:text-xl text-foreground">Let's Build Something Awesome Together!</p>
        <motion.p
          className="text-3xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          🙋‍♂️
        </motion.p>
      </div>

      <div className="mt-4">
        <p className="text-sm text-muted-foreground">Find me on these platforms</p>
      </div>

      {/* Social list with hover previews */}
      <div className="mt-4 flex flex-col sm:flex-row sm:justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <TooltipProvider delayDuration={0}>
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-md 
                                  border border-border bg-card hover:bg-accent/50
                                  px-4 py-1.5 transition-all duration-200
                                  hover:scale-105 hover:shadow-md"
                      >
                        <Icon className="w-5 h-5 text-foreground" />
                        <span className="hidden text-sm">{link.label}</span>
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
                </motion.div>
              );
            })}
          </TooltipProvider>
        </div>
        <div className="flex justify-start sm:justify-center">
          <VisitorCounter />
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="flex flex-col justify-center items-center mt-8 pt-4 border-t border-border/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-sm text-muted-foreground">
          Design & Developed by <span className="font-semibold font-mono text-foreground">Hemant</span>
        </p>
        <p className="text-sm text-muted-foreground">© 2026. All rights reserved.</p>
      </motion.div>
    </motion.div>
  );
}
