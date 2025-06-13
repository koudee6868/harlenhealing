// @/components/icons.tsx

import type { SVGProps } from "react";

export const Icons = {
  gitHub: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  googleDrive: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
        <path d="M2.953 15.198l2.834-4.897L2.953 5.404h5.66l2.841 4.897-2.841 4.897H2.953zM10.453 15.198l2.834-4.897L10.453 5.404h5.66l2.841 4.897-2.841 4.897h-5.66zM6.816 17.096l2.834-4.897h5.66l-2.834 4.897H6.816z"></path>
    </svg>
  ),
  notion: (props: SVGProps<SVGSVGElement>) => (
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      fill="currentColor"
      {...props}
     >
        <path d="M229.17,203.93,189,58.83a8,8,0,0,0-15.14,5.14L213.17,209.1a8,8,0,0,0,15.14-5.17ZM176,216a8,8,0,0,0-8-8H72a8,8,0,0,0,0,16H168A8,8,0,0,0,176,216Zm-40.3-63.53a8,8,0,0,0-8.56,2.19L84.83,208H40a8,8,0,0,0-8,8,8,8,0,0,0,8,8H88.39a8,8,0,0,0,6.85-3.83l37.15-64.35A8,8,0,0,0,135.7,152.47ZM80,40H184a8,8,0,0,0,0-16H80a8,8,0,0,0,0,16Zm123.14-7.17a8,8,0,0,0-10.28-2.58l-56,29.42A8,8,0,0,0,132,66.52V144a8,8,0,0,0,16,0V73.48l44.86-23.58A8,8,0,0,0,203.14,40.83Z"></path>
     </svg>
  ),
  whatsapp: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
        <path d="M16.63,14.28a1,1,0,0,0-1.25.29l-.27.42a1,1,0,0,1-1.29.34L11,13.91a4.34,4.34,0,0,1-2.29-2.29l1.43-2.5a1,1,0,0,0,.19-1.3l-1.57-2.62a1,1,0,0,0-1.29-.42L5.63,5.63a1,1,0,0,0-.6,1.16,11.21,11.21,0,0,0,8.81,8.8,1,1,0,0,0,1.16-.6l.84-1.84A1,1,0,0,0,16.63,14.28Z" />
        <path d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,1.86,5.73L2,22l4.27-1.86A9.9,9.9,0,0,0,12,22h.08A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-4.22-1.25l-.29-.17-3.14.8, .82-3.12-.19-.3A8,8,0,1,1,12,20Z" />
    </svg>
  ),
};