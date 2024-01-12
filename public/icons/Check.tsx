import * as React from "react";
import type { SVGProps } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={19}
    fill="none"
    {...props}
  >
    <path
      stroke="#828282"
      strokeLinecap="round"
      d="M1.176 11.414c-.18-.722-.153 1.483-.158 2.227-.007 1.273-.177 2.811.684 3.874 1.287 1.59 3.097.73 4.523-.21C13.12 12.757 19.046 6.681 25 1"
    />
  </svg>
);
export default SvgCheck;
