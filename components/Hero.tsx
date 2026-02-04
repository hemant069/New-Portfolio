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
import { Button } from './ui/button';
import { Github } from 'lucide-react';
import { socialLinks } from '@/data/socialLinks';
import Link from 'next/link';
import VisitorCounter from './VisitorCount';



const Hero = () => {

    return (
        <div>
            <div className="flex items-center gap-10  justify-between ">
                <div className='relative w-full lg:h-[20rem]   '>
                    <Image
                        className='w-full lg:h-[290px]  object-cover'
                        src={moon}
                        width={1240}  // Use a high-resolution source
                        height={900}  // Maintain aspect ratio
                        alt='mountain'
                        priority
                    />
                    <h1 className='text-white text-2xl font-bold absolute lg:top-[10rem]  top-20 text-center font-mono w-full h-full'>Mountain has infinite possibilities</h1>
                    <div className='absolute lg:top-[15rem] sm:top-[12rem] top-[9rem] md:top-[26rem] left-0 right-0 mx-auto w-full h-full '>
                        <Image className=' w-[6rem] h-[6rem] lg:w-[8rem] lg:h-[8rem] object-cover rounded-full shadow-inner shadow-white ' src={myimg} alt='my-img' width={500} height={500} />
                    </div>
                </div>

            </div>
            <div className='flex  mt-14 items-center justify-between '>
                <div className=' text-start'>
                    <h1 className='lg:text-2xl text-lg italic font-bold  '>Hemant Prajapati</h1>
                    <p className='text-xs text-gray-500'>Engineer | Software Developer</p>
                </div>
                <div>

                    <div className='flex items-center gap-3 justify-center z-40 '>
                        <TooltipProvider delayDuration={0.95}>
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <Tooltip key={link.href} >
                                        <TooltipTrigger asChild>
                                            <Link
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cursor-pointer border border-slate-300 bg-gray-950 rounded-lg shadow-md p-1 hover:opacity-80 transition-opacity"
                                            >
                                                <Icon className="w-5 h-5" />
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{link.label}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                );
                            })}
                        </TooltipProvider>
                    </div>
                </div>

            </div>
            <div className='text-start  mt-4  text-gray-500'>
                <p className='leading-6 text-gray-300'>I build from zero. Whether it's frontend, backend, full-stack applications, or AI-powered experiences, I work across the entire development lifecycle. From UI/UX to deployment to user feedback, I care less about technology debates and more about delivering results that people love using.</p>
            </div>
        </div>
    )
}

export default Hero