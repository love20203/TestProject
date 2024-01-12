import * as React from "react";
import type { SVGProps } from "react";
const SvgWorkFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <path
      fill="#282828"
      d="M15.375 4.625h-3v-1.5c0-.833-.668-1.5-1.5-1.5h-3c-.832 0-1.5.667-1.5 1.5v1.5h-3c-.833 0-1.492.668-1.492 1.5l-.008 8.25c0 .832.667 1.5 1.5 1.5h12c.832 0 1.5-.668 1.5-1.5v-8.25c0-.832-.668-1.5-1.5-1.5Zm-4.5 0h-3v-1.5h3v1.5Z"
    />
  </svg>
);
export default SvgWorkFilled;
