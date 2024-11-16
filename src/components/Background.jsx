import React from 'react'

function Background() {
    return (
        <>
            <div className='w-full z-[2] fixed h-screen bg-zinc-900'>

                <div className='absolute top-[5%] w-full flex justify-center text-zinc-600 text-xl font-semibold'>
                    Document
                </div>

                <h1 className='text-[12rem] tracking-tighter leading-none absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-700'>Docs</h1>

            </div>
        </>

    )
}

export default Background