import { companies } from '@/data/companiesData'
import React from 'react'

const WorkExperience = () => {
    return (
        <div className='w-full'>

            <div className=' text-start'>
                <h3 className='text-md text-gray-500 mt-2 '>Featured</h3>
                <h1 className='text-xl'>Work Experience</h1>
            </div>
            <div>
                {
                    companies.map((item, index) => <div key={index}>
                        <div className='flex justify-between'>
                            <div>
                                <h1>{item.name}</h1>
                                <p className='text-sm'>{item.role}</p>
                            </div>
                            <div>
                                <h1>{item.joinning_date} - {item.end_date}</h1>
                                <p>{item.location}</p>
                            </div>
                        </div>
                        <div>
                            {/* Icons adding after description */}
                        </div>
                        <div>
                            {
                                item.description.map((desc: string, ind: number) => <p className='text-sm text-gray-500' key={ind}>{desc}</p>)
                            }
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default WorkExperience