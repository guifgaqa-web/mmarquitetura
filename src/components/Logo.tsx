"use client"

import { motion } from "framer-motion"

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut" as const },
  },
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial="hidden"
      animate="visible"
      aria-label="MM Arquitetura"
    >
      <motion.path
        d="M4 36V8L20 28L36 8V36"
        stroke="#EDEAE4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
      />
      <motion.path
        d="M48 36V8L64 28L80 8V36"
        stroke="#EDEAE4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
      />
    </motion.svg>
  )
}
