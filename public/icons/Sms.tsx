import * as React from "react";
import type { SVGProps } from "react";
const SvgSms = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <rect
      width={39.94}
      height={39.94}
      fill="#FB7E63"
      fillOpacity={0.1}
      rx={7.988}
    />
    <path
      stroke="#C75167"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.498}
      d="M24.963 28.458h-9.985c-2.996 0-4.993-1.498-4.993-4.993v-6.99c0-3.494 1.997-4.992 4.993-4.992h9.985c2.995 0 4.992 1.498 4.992 4.992v6.99c0 3.495-1.996 4.993-4.992 4.993Z"
    />
    <path
      stroke="#C75167"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.498}
      d="m24.963 16.975-3.125 2.496c-1.029.82-2.716.82-3.745 0l-3.115-2.496"
    />
  </svg>
);
export default SvgSms;
