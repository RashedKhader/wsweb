"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
             <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-0">
                ABOUT US
            </h1>
            <motion.div
                variants={slideInFromRight(0.5)}
                className='text-[20px] text-gray-200 mb-10 mt-[10px] text-center '
            >   
                We are a dynamic startup based in the UAE, fueled by the enthusiasm and expertise of our young engineering team. <br/> 
                 With a passion for space exploration and a drive for innovation, we specialize in creating cutting-edge satellite subsystems <br/> 
                 offering engaging educational satellite kits, and providing consultancy services that challenge the status quo in the aerospace industry. 
            </motion.div>
        </div>
    )
}

export default SkillText