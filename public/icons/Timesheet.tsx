import * as React from "react";
import type { SVGProps } from "react";
const SvgTimesheet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={57}
    height={56}
    fill="none"
    {...props}
  >
    <rect
      width={56}
      height={56}
      x={0.5}
      fill="#C4C4C4"
      fillOpacity={0.1}
      rx={28}
    />
    <path
      stroke="#282828"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M33 20h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H23a2 2 0 0 1-2-2V22a2 2 0 0 1 2-2h2"
    />
    <path
      stroke="#282828"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M32 18h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
    />
  </svg>
);
export default SvgTimesheet;
