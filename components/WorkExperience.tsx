import { companies } from '@/data/companiesData'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
import { motion } from 'framer-motion'

const WorkExperience = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className='w-full'>
            <div className='text-start'>
                <h3 className='text-md text-muted-foreground mt-2'>Featured</h3>
                <h1 className='text-xl font-semibold text-foreground'>Work Experience</h1>
            </div>

            <div className='mt-4'>
                <Accordion type="single" collapsible className="w-full" defaultValue='item-0'>
                    {companies.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="hover:no-underline">
                                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center w-full sm:pr-4 gap-1 sm:gap-0'>
                                    <div className='text-left'>
                                        <h1 className='text-base sm:text-lg font-semibold'>{item.name}</h1>
                                        <p className='text-xs sm:text-sm text-muted-foreground'>{item.role}</p>
                                    </div>
                                    <div className='text-left sm:text-right'>
                                        <p className='text-xs sm:text-sm font-medium text-foreground'>{item.joinning_date} - {item.end_date}</p>
                                        <p className='text-xs text-muted-foreground'>{item.location}</p>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className='space-y-2 pt-2'>
                                    {item.description.map((desc: string, ind: number) => (
                                        <p className='text-sm text-muted-foreground' key={ind}>
                                            {desc}
                                        </p>
                                    ))}
                                    <div className='pt-2 flex flex-wrap gap-2 items-center'>
                                        <p className='text-xs sm:text-sm text-foreground'>Technologies & Tools</p>
                                        {
                                            item.tools.map((Icon, index) => <div key={index} className="w-5 h-5">
                                                <Icon />
                                            </div>)
                                        }
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </motion.div>
    )
}

export default WorkExperience