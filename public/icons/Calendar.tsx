import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#Calendar_svg__a)">
      <path
        fill="#282828"
        fillRule="evenodd"
        d="M23 17.5a.75.75 0 0 1 .75.735V19h10.5v-.75a.75.75 0 0 1 1.5-.015V19h.75a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V22a3 3 0 0 1 3-3h.75v-.75a.75.75 0 0 1 .75-.75Zm13.5 6.75c.75 0 1.5.75 1.5 1.5v9.75a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-9.75c0-.75.75-1.5 1.5-1.5h15ZM32 26.875a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM34.625 28a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM32 30.625a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm2.625 1.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM24.5 30.625a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm2.625 1.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM24.5 34.375a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm2.625 1.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM32 34.375a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="Calendar_svg__a">
        <path fill="#fff" d="M17 16h24v24H17z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCalendar;
