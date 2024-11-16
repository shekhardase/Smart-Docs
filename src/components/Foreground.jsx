import React, { useRef } from 'react'
import Card from './Card'
import { useState } from 'react';

function Foreground() {
    // const [data, setdata] = useState();
    const ref = useRef(null);
    const data = [
        {
            desc: "DATA DATA DATA",
            filesize: "0.9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "Green" }
        },
        {
            desc: "DATA DATA DATA",
            filesize: "0.9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "Blue" }
        },
        {
            desc: "DATA DATA DATA",
            filesize: "0.9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "Red" }
        }
    ]

    return (
        <>
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-10 flex-wrap'>

                {data.map((item, index) => (
                    <Card data={item} reference={ref} />
                ))}


            </div>


        </>



    )
}

export default Foreground