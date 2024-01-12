import * as React from "react";
import type { SVGProps } from "react";
const SvgPayment = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.714}
      d="M24.715 34h6.6a2.829 2.829 0 0 0 .548-5.605l-5.726-.789A2.829 2.829 0 0 1 26.686 22h6.6M29 39.143V16.857"
    />
  </svg>
);
export default SvgPayment;
