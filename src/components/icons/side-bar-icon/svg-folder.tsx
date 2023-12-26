import * as React from "react";
import { SVGProps } from "react";

const SvgFolderLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="folder-line 1">
      <path
        id="Vector"
        d="M3 6.66666C3 6.13623 3.21071 5.62752 3.58579 5.25245C3.96086 4.87738 4.46957 4.66666 5 4.66666H8.93C9.25918 4.66661 9.58329 4.74782 9.87357 4.90307C10.1638 5.05833 10.4113 5.28283 10.594 5.55666L11.406 6.77666C11.5887 7.0505 11.8362 7.275 12.1264 7.43025C12.4167 7.58551 12.7408 7.66671 13.07 7.66666H19C19.5304 7.66666 20.0391 7.87738 20.4142 8.25245C20.7893 8.62752 21 9.13623 21 9.66666V18.6667C21 19.1971 20.7893 19.7058 20.4142 20.0809C20.0391 20.456 19.5304 20.6667 19 20.6667H5C4.46957 20.6667 3.96086 20.456 3.58579 20.0809C3.21071 19.7058 3 19.1971 3 18.6667V6.66666Z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgFolderLine;
