import React from 'react'
// import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from "motion/react"

function Temp() {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} className="relative h-10 w-10 bg-red-500">

        </motion.div>
    )
}

export default Temp