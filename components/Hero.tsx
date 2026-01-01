import Image from 'next/image'
import React from 'react'
import myimg from "../public/my_ai_img-removebg-preview (1).png";
import mountain from "../public/mountain-.png";

const Hero = () => {
    return (
        <div>
            <div className="md:flex items-center gap-10 px-5 justify-between ">
                <div className='w-full'>
                    <Image
                        className='w-[30rem] object-cover'
                        src={mountain}
                        width={100}
                        height={100}

                        alt='mountain'


                    />
                </div>
                {/* <div className="mt-10 lg:mt-0">
                    <Image
                        className="rounded-full md:rounded-s-full shadow-inner "
                        src={myimg}
                        alt="my-img"
                        width={500}
                    />
                </div> */}
            </div>
        </div>
    )
}

export default Hero