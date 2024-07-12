"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const Ourvisiontxt = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
             <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-0">
                OUR VISION 
            </h1>
            <motion.div
                variants={slideInFromRight(0.5)}
                className='text-[20px] text-gray-200 mb-0 mt-[10px] text-center '
            >   
               At WahaSpace, our vision is to drive innovation in the global space industry. <br/> 
                We strive to make satellite technology accessible, comprehensible, and practical for all.<br/> 
                By bridging gaps in knowledge and technology, we aim to unveil the mysteries of the cosmos and harness space resources to improve life on Earth.




            </motion.div>
        </div>
    )
}

export default Ourvisiontxt