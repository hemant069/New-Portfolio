import Image from 'next/image'
import React from 'react'
import myimg from "../public/my_ai_img-removebg-preview (1).png";
import mountain from "../public/mountain-.png";
import moon from "../public/moon.jpg";

const Hero = () => {
    // today not changes
    return (
        <div>
            <div className="md:flex items-center gap-10 px-5 justify-between ">
                <div className='relative w-full h-[20rem]  '>
                    <Image
                        className='w-[40rem] h-[20rem] object-cover'
                        src={moon}
                        width={1920}  // Use a high-resolution source
                        height={320}  // Maintain aspect ratio
                        alt='mountain'
                    />
                    <h1 className='text-white text-2xl font-bold absolute top-[10rem] text-center font-mono w-full h-full'>Mountain has infinite possibilities</h1>
                    <div className='absolute top-[15rem] left-0  w-full h-full '>
                        <Image className='w-[10rem] h-[10rem] object-cover rounded-full shadow-inner shadow-white ' src={myimg} alt='my-img' width={500} height={500} />
                    </div>
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