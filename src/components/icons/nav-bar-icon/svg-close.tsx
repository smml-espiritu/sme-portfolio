import { motion } from "framer-motion";
import * as React from "react";
import { SVGProps } from "react";
export const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // width={24}
    // height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <motion.g id="Frame">
      <g id="SVGRepo_iconCarrier">
        <motion.path
          id="Vector"
          d="M14.5 9.50002L9.50002 14.5M9.5 9.5L14.5 14.5"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <motion.path
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          id="Vector_2"
          d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </g>
    </motion.g>
  </svg>
);
