import * as React from "react";
import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M5.414 4.336 4.336 5.414 10.922 12l-6.586 6.586 1.078 1.078L12 13.078l6.586 6.586 1.078-1.078L13.078 12l6.586-6.586-1.078-1.078L12 10.922 5.414 4.336Z"
    />
  </svg>
);
export default SvgClose;
