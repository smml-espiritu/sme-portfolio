import * as React from "react";
import { SVGProps } from "react";

export const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <g clipPath="url(#clip0_429_11072)">
        <path
          d="M11 3.99994H4V17.9999C4 19.1045 4.89543 19.9999 6 19.9999H18C19.1046 19.9999 20 19.1045 20 17.9999V12.9999"
          stroke="#292929"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 14.9999L20 3.99994"
          stroke="#292929"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 3.99994H20V8.99994"
          stroke="#292929"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_429_11072">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </g>
  </svg>
);
