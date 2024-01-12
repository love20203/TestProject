import * as React from "react";
import type { SVGProps } from "react";
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#292D32"
      d="M8 9.447a2.576 2.576 0 1 1 0-5.153 2.576 2.576 0 1 1 0 5.153Zm0-4.154a1.58 1.58 0 1 0-.002 3.162A1.58 1.58 0 0 0 8 5.293Z"
    />
    <path
      fill="#292D32"
      d="M8 15.174a3.98 3.98 0 0 1-2.754-1.114c-1.966-1.893-4.14-4.913-3.32-8.507C2.666 2.293 5.513.833 8 .833h.006c2.487 0 5.334 1.46 6.074 4.727.813 3.593-1.36 6.607-3.327 8.5A3.98 3.98 0 0 1 8 15.174Zm0-13.34c-1.94 0-4.434 1.033-5.094 3.94-.72 3.14 1.254 5.846 3.04 7.56a2.95 2.95 0 0 0 4.114 0c1.78-1.714 3.753-4.42 3.046-7.56C12.44 2.867 9.94 1.834 8 1.834Z"
    />
  </svg>
);
export default SvgLocation;
