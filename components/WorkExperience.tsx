import { companies } from '@/data/companiesData'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const WorkExperience = () => {
    return (
        <div className='w-full'>
            <div className='text-start'>
                <h3 className='text-md text-gray-500 mt-2 '>Featured</h3>
                <h1 className='text-xl'>Work Experience</h1>
            </div>

            <div className='mt-4'>
                <Accordion type="single" collapsible className="w-full">
                    {companies.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="hover:no-underline">
                                <div className='flex justify-between items-center w-full pr-4'>
                                    <div className='text-left'>
                                        <h1 className='text-lg font-semibold'>{item.name}</h1>
                                        <p className='text-sm text-gray-500'>{item.role}</p>
                                    </div>
                                    <div className='text-right'>
                                        <p className='text-sm font-medium'>{item.joinning_date} - {item.end_date}</p>
                                        <p className='text-xs text-gray-500'>{item.location}</p>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className='space-y-2 pt-2'>
                                    {item.description.map((desc: string, ind: number) => (
                                        <p className='text-sm text-gray-500' key={ind}>
                                            {desc}
                                        </p>
                                    ))}
                                    <div className='pt-2'>
                                        <p className='text-xs text-gray-400'>
                                            <span className='font-semibold'>Tools:</span> {item.tools}
                                        </p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default WorkExperience