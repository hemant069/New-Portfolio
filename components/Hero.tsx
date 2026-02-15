"use client"
import Image from 'next/image'
import myimg from "../public/my_ai_img-removebg-preview (1).png";
import moon from "../public/banner/moon.jpg";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { socialLinks } from '@/data/socialLinks';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BlueTick from './ui/bluetick';

const Hero = () => {
    return (
        <div>

            <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className='relative w-full'>
                    {/* Banner Image */}
                    <Image
                        className='w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[290px] object-cover rounded-lg'
                        src={moon}
                        width={1240}
                        height={900}
                        alt='Mountain landscape banner'
                        priority
                    />
                    {/* Banner Text */}
                    {/* Banner Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.h1
                            className='text-white text-lg sm:text-xl md:text-2xl font-bold text-center font-mono drop-shadow-lg px-4'
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Mountain has infinite possibilities
                        </motion.h1>
                    </div>
                </div>

                {/* Profile Image - positioned below banner */}
                <motion.div
                    className='relative -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 ml-2 sm:ml-4'
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Image
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-full shadow-lg ring-4 ring-background'
                        src={myimg}
                        alt='Hemant Prajapati profile picture'
                        width={500}
                        height={500}
                    />
                </motion.div>
            </motion.div>

            {/* Name and Social Links */}
            <motion.div
                className='flex flex-col  sm:flex-row mt-4 sm:mt-6 gap-4 sm:items-center sm:justify-between'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
            >
                <div className='text-start'>
                    <div className='flex items-center gap-1'>
                        <h1 className='relative inline-block dark:overflow-hidden w-[11rem] sm:w-[13rem] text-xl sm:text-2xl lg:text-2xl italic font-semibold text-foreground'>
                            Hemant Prajapati
                            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/10 -skew-x-12 animate-glass-flash pointer-events-none" />
                        </h1>
                        <BlueTick />
                    </div>
                    <p className='text-xs sm:text-sm text-muted-foreground'>Engineer | Software Developer</p>
                </div>

                {/* Social Icons */}
                <div className='flex items-center gap-2 sm:gap-3'>
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
                                                className="flex items-center justify-center cursor-pointer 
                                                          bg-muted/50 hover:bg-primary hover:text-primary-foreground
                                                          rounded-lg p-1.5 sm:p-2 
                                                          hover:scale-110 transition-all duration-200"
                                            >
                                                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
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
            </motion.div >

            {/* Bio */}
            < motion.div
                className='text-start mt-4 sm:mt-6'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <p className='text-sm sm:text-base leading-6 sm:leading-7 text-muted-foreground'>
                    I build scalable products using <span className='font-semibold font-mono'>React.js, Next.js, JavaScript, Node.js, Express.js, MongoDB, and Prisma.</span> From frontend to backend and full-stack development, I handle everything from UI/UX to deployment, focusing on performance and delivering solutions users love.
                </p>
            </motion.div >
        </div >
    )
}

export default Hero
