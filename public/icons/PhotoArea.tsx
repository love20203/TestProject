import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoArea = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={320}
    height={140}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeDasharray="8 8"
      strokeWidth={1.5}
      d="M160 49v42M139 70h42"
    />
    <path
      stroke="#282828"
      strokeDasharray="12 12"
      strokeLinecap="round"
      d="M.5.5h319v139H.5z"
    />
  </svg>
);
export default SvgPhotoArea;
