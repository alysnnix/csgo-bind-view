import { ISvg } from "@/types/jsx";

export const PinkBlurSVG = ({ ...rest }: ISvg) => {
  return (
    <svg
      fill="none"
      height="674"
      viewBox="0 0 674 674"
      width="674"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g filter="url(#filter0_b_9_6)" opacity="0.3">
        <path
          d="M674 337C674 523.12 523.12 674 337 674C150.88 674 0 523.12 0 337C0 150.88 150.88 0 337 0C523.12 0 674 150.88 674 337Z"
          fill="url(#paint0_radial_9_6)"
          fillOpacity="0.8"
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="690"
          id="filter0_b_9_6"
          width="690"
          x="-8"
          y="-8"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_9_6"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_9_6"
            mode="normal"
            result="shape"
          />
        </filter>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(337 337) rotate(90) scale(337)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_9_6"
          r="1"
        >
          <stop stopColor="#9353D3" />
          <stop offset="1" stopColor="#7D4EFF" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};
