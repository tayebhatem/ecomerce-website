'use client'

import React, { ReactNode, useRef } from 'react'
import { motion } from "framer-motion"
export default function MotionContainer({children}:{children:ReactNode}) {
    const scrollRef = useRef(null)

  return (
    <div ref={scrollRef} >
   <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration:0.7}}
        viewport={{ root: scrollRef }}
        
      >

   {children}

   </motion.div>
  </div>
  )
}
