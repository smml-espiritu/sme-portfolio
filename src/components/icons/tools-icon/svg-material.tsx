import { motion } from "framer-motion";
import * as React from "react";
import { SVGProps } from "react";
export const SvgMaterial = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // width={201}
    // height={200}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="material-ui" clipPath="url(#clip0_105_80)">
      <g id="material">
        <motion.path
          whileHover={{ fill: "#00b0ff" }}
          id="Vector"
          d="M0 107.618V21L75 64.3091V93.1818L25 64.3091V122.055L0 107.618Z"
          fill="#737171"
        />
        <motion.path
          whileHover={{ fill: "#0081cb" }}
          id="Vector_2"
          d="M75 64.3091L150 21V107.618L100 136.491L75 122.055L125 93.1818V64.3091L75 93.1818V64.3091Z"
          fill="#737171"
        />
        <motion.path
          whileHover={{ fill: "#00b0ff" }}
          id="Vector_3"
          d="M75 122.055V150.927L125 179.8V150.927L75 122.055Z"
          fill="#737171"
        />
        <motion.path
          whileHover={{ fill: "#0081cb" }}
          id="Vector_4"
          d="M125 179.8L200 136.491V78.7454L175 93.1818V122.055L125 150.927V179.8ZM175 64.3091V35.4364L200 21V49.8727L175 64.3091Z"
          fill="#737171"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_105_80">
        <rect
          width={200}
          height={200}
          fill="white"
          transform="translate(0.385498)"
        />
      </clipPath>
    </defs>
  </svg>
);
