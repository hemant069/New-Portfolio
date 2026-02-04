"use client"
import Image from 'next/image'
import myimg from "../public/my_ai_img-removebg-preview (1).png";
import moon from "../public/moon.jpg";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { socialLinks } from '@/data/socialLinks';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div>
            <motion.div
                className="flex items-center gap-10 justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className='relative w-full lg:h-[20rem]'>
                    <Image
                        className='w-full lg:h-[290px] object-cover rounded-lg'
                        src={moon}
                        width={1240}
                        height={900}
                        alt='Mountain landscape banner'
                        priority
                    />
                    <motion.h1
                        className='text-white text-2xl font-bold absolute lg:top-[10rem] top-20 text-center font-mono w-full h-full drop-shadow-lg'
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Mountain has infinite possibilities
                    </motion.h1>
                    <motion.div
                        className='absolute lg:top-[15rem] sm:top-[12rem] top-[9rem] md:top-[26rem] left-0 right-0 mx-auto w-full h-full'
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Image
                            className='w-[6rem] h-[6rem] lg:w-[8rem] lg:h-[8rem] object-cover rounded-full shadow-lg ring-4 ring-background'
                            src={myimg}
                            alt='Hemant Prajapati profile picture'
                            width={500}
                            height={500}
                        />
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className='flex mt-14 items-center justify-between'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className='text-start'>
                    <h1 className='lg:text-2xl text-lg italic font-bold text-foreground'>Hemant Prajapati</h1>
                    <p className='text-xs text-muted-foreground'>Engineer | Software Developer</p>
                </div>
                <div>
                    <div className='flex items-center gap-3 justify-center z-40'>
                        <TooltipProvider delayDuration={0.95}>
                            {socialLinks.map((link, index) => {
                                const Icon = link.icon;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                    >
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="cursor-pointer border border-border bg-card hover:bg-accent 
                                                              rounded-lg shadow-md p-1.5 hover:scale-110 
                                                              transition-all duration-200"
                                                >
                                                    <Icon className="w-5 h-5 text-foreground" />
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{link.label}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </motion.div>
                                );
                            })}
                        </TooltipProvider>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className='text-start mt-4'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <p className='leading-6 text-muted-foreground'>
                    I build from zero. Whether it's frontend, backend, full-stack applications, or AI-powered experiences,
                    I work across the entire development lifecycle. From UI/UX to deployment to user feedback,
                    I care less about technology debates and more about delivering results that people love using.
                </p>
            </motion.div>
        </div>
    )
}

export default Hero
