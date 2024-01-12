import * as React from "react";
import type { SVGProps } from "react";
const SvgService = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#Service_svg__a)">
      <path
        stroke="#282828"
        strokeWidth={2}
        d="M23 25a3 3 0 0 0 3-3m-3 3a3 3 0 0 1-3-3m3 3v3m3-6a3 3 0 0 0-3-3m3 3h3m-6-3a3 3 0 0 0-3 3m3-3v-3m-3 6h-3m2-4 2 2m4 4 2 2m0-8-2 2m-4 4-2 2m16 2a3 3 0 0 0 3-3m-3 3a3 3 0 0 1-3-3m3 3v3m3-6a3 3 0 0 0-3-3m3 3h3m-6-3a3 3 0 0 0-3 3m3-3v-3m-3 6h-3m2-4 2 2m4 4 2 2m0-8-2 2m-4 4-2 2m-5 8a3 3 0 0 0 3-3m-3 3a3 3 0 0 1-3-3m3 3v3m3-6a3 3 0 0 0-3-3m3 3h3m-6-3a3 3 0 0 0-3 3m3-3v-3m-3 6h-3m2-4 2 2m4 4 2 2m0-8-2 2m-4 4-2 2"
      />
    </g>
    <defs>
      <clipPath id="Service_svg__a">
        <path fill="#fff" d="M17 16h24v24H17z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgService;
