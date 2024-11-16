import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseCircleSharp } from "react-icons/io5";

import { motion } from "motion/react"


function Card({ data, reference }) {
    return (
        <>
            <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} className='flex-shrink-0 relative w-60 h-72 rounded-[50px] bg-zinc-800/90 text-white py-10 px-8 overflow-hidden'>
                <FaFileAlt />
                <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>

                <div className='footer absolute bottom-0 w-full  left-0 '>

                    <div className='flex items-center justify-between  px-8 py-3 mb-5'>
                        <h5>{data.filesize}</h5>

                        <span className='w-7 h-7 bg-white rounded-full flex items-center justify-center'>


                            {
                                data.close ? <IoCloseCircleSharp size="1.5em " color='#000' />
                                    : <LuDownload size="1em " color='#000' />
                            }



                        </span>

                    </div>
                    {data.tag.isOpen && (
                        <div
                            className={`tag w-full py-4 flex items-center justify-center ${data.tag.tagColor === 'Green' ? 'bg-green-400' :
                                data.tag.tagColor === 'Red' ? 'bg-red-200' :
                                    data.tag.tagColor === 'Blue' ? 'bg-blue-300' :
                                        'bg-gray-600'
                                }`}
                        >
                            <h3 className="text-sm text-black">{data.tag.tagTitle}</h3>
                        </div>
                    )}


                </div>

                {/* footer >data >tag */}
            </motion.div>
        </>

    )
}

export default Card