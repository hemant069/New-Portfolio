import React from 'react'

const Test = () => {
    return (
        <div className='mx-auto h-[20rem] flex w-full max-w-lg items-center justify-center'>
            <div className='relative z-10 flex w-full h-10 cursor-pointer items-center overflow-hidden rounded-xl border border-red-800 p-[1.5px]'>

                <div className='animate-border absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]'>
                    <div className='relative z-20 flex w-full rounded-[0.60rem] bg-red-900 p-2'>
                        <input
                            type="text"
                            className="mr-2 inline-block h-full flex-1 rounded-lg bg-transparent px-2 py-3 text-gray-500 placeholder:text-slate-700 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                            placeholder="subscribe to our newsletter"
                        />
                        <span
                            className="relative z-50 block rounded-lg border border-red-900 bg-red-900 px-8 py-3 text-center text-sm text-white shadow-2xl transition duration-200 hover:bg-slate-800"
                        >
                            Subscribe
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Test