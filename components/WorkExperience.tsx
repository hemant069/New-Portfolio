import { companies } from '@/data/companiesData'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'

const WorkExperience = () => {
    return (
        <div className='w-full'>
            <div className='text-start'>
                <h3 className='text-md text-muted-foreground mt-2'>Featured</h3>
                <h1 className='text-xl font-semibold text-foreground'>Work Experience</h1>
            </div>

            <div className='mt-4'>
                <Accordion type="single" collapsible className="w-full" defaultValue='item-0'>
                    {companies.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="hover:no-underline">
                                <div className='flex justify-between items-center w-full pr-4'>
                                    <div className='text-left'>
                                        <h1 className='text-lg font-semibold'>{item.name}</h1>
                                        <p className='text-sm text-muted-foreground'>{item.role}</p>
                                    </div>
                                    <div className='text-right'>
                                        <p className='text-sm font-medium text-foreground'>{item.joinning_date} - {item.end_date}</p>
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
                                    <div className='pt-2 flex gap-2 items-center'>
                                        <p className='text-sm '>Technologies & Tools</p>
                                        {
                                            item.tools.map((item, index) => <div key={index}>
                                                <Image
                                                    src={item}
                                                    width={30}
                                                    height={30}
                                                    alt={`item-${index}`}
                                                    className='w-5'
                                                />
                                            </div>)
                                        }
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