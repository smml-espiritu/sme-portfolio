import { motion } from "framer-motion";
import * as React from "react";
import { SVGProps } from "react";
export const SvgGatsbyJs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // width={201}
    // height={200}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="gatsby" clipPath="url(#clip0_105_78)">
      <motion.path
        id="Vector"
        d="M100.514 0C45.282 0 0.514038 44.768 0.514038 100C0.514038 155.232 45.282 200 100.514 200C155.746 200 200.514 155.232 200.514 100C200.514 44.768 155.746 0 100.514 0ZM22.002 101.04L99.474 178.512C56.93 177.96 22.554 143.584 22.002 101.04ZM118.09 176.552L23.962 82.424C31.946 47.52 63.186 21.472 100.514 21.472C126.602 21.472 149.722 34.2 164.002 53.784L153.13 63.376C141.546 46.768 122.298 35.896 100.514 35.896C72.778 35.896 49.154 53.512 40.226 78.168L122.346 160.28C142.29 153.056 157.626 136.224 162.762 115.376H128.73V100H179.05C179.042 137.328 152.994 168.568 118.09 176.552Z"
        fill="#737171"
        whileHover={{ fill: "#744c9e" }}
      />
    </g>
    <defs>
      <clipPath id="clip0_105_78">
        <rect
          width={200}
          height={200}
          fill="white"
          transform="translate(0.514038)"
        />
      </clipPath>
    </defs>
  </svg>
);
