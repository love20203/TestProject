import * as React from "react";
import type { SVGProps } from "react";
const SvgAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={14}
    fill="none"
    {...props}
  >
    <path fill="#EDBB2A" d="m9 .25 9 13.5H0L9 .25Z" />
    <path
      fill="#fff"
      d="m9.75 4.75-.174 4.518H8.424L8.25 4.75h1.5Zm-1.5 6.282v-1.008h1.5v1.008h-1.5Z"
    />
  </svg>
);
export default SvgAlert;
