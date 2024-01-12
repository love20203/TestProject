import * as React from "react";
import type { SVGProps } from "react";
const SvgRibbon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={144}
    height={22}
    fill="none"
    {...props}
  >
    <path fill="#C75167" d="M0 0h143.224l-15.853 10.933 15.853 10.933H0V0Z" />
    <text x="50%" y="50%" fill="white" dominant-baseline="middle" text-anchor="middle" font-size="12">
      BEST MATCH
    </text>
  </svg>
);
export default SvgRibbon;
