import { motion } from "framer-motion";
import * as React from "react";
import { SVGProps } from "react";
export const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // width={200}
    // height={200}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Figma">
      <g id="Figma_2">
        <motion.path
          id="Vector"
          d="M99.6162 100.038C99.6162 81.6635 114.512 66.6919 132.962 66.6919C151.336 66.6919 166.308 81.5879 166.308 100.038C166.308 118.412 151.412 133.384 132.962 133.384C114.588 133.384 99.6162 118.412 99.6162 100.038Z"
          fill="#737171"
          whileHover={{ fill: "#1abcfe" }}
        />
        <motion.path
          id="Vector_2"
          d="M33 166.654C33 148.28 47.896 133.308 66.3459 133.308H99.6919V166.654C99.6919 185.028 84.7958 200 66.3459 200C47.896 200 33 185.104 33 166.654Z"
          fill="#737171"
          whileHover={{ fill: "#0acf83" }}
        />
        <motion.path
          id="Vector_3"
          d="M99.6162 0.0756144V66.6919H132.962C151.336 66.6919 166.308 51.7958 166.308 33.3459C166.308 14.9716 151.412 0 132.962 0H99.6162V0.0756144Z"
          fill="#737171"
          whileHover={{ fill: "#ff7262" }}
        />
        <motion.path
          id="Vector_4"
          d="M33 33.4216C33 51.7958 47.896 66.7675 66.3459 66.7675H99.6919V0.0756226H66.3459C47.896 0.0756226 33 14.9717 33 33.4216Z"
          fill="#737171"
          whileHover={{ fill: "#f24e1e" }}
        />
        <motion.path
          id="Vector_5"
          d="M33 100.038C33 118.412 47.896 133.384 66.3459 133.384H99.6919V66.6919H66.3459C47.896 66.6919 33 81.6635 33 100.038Z"
          fill="#737171"
          whileHover={{ fill: "#a259ff" }}
        />
      </g>
    </g>
  </svg>
);
