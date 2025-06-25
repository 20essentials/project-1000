export function Share(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 48 48'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g
        filter='url(#Icon_Color-Share_Shadow_Alt_2_svg__b)'
        clipPath='url(#Icon_Color-Share_Shadow_Alt_2_svg__a)'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M25.56 4.07a1.98 1.98 0 0 0-2.15-.42 1.95 1.95 0 0 0-1.21 1.8v8.34c-5.4.35-10.04 2.2-13.43 5.68C4.97 23.35 3 29.03 3 36.19c0 .79.48 1.5 1.22 1.8.73.3 1.58.13 2.14-.42 3.34-3.31 7.65-4.56 11.25-4.95 1.8-.2 3.37-.18 4.5-.1h.09v9.03c0 .78.46 1.48 1.18 1.79.72.3 1.56.16 2.13-.37l18.87-17.49a1.94 1.94 0 0 0 .04-2.8L25.56 4.07Z'
          fill='#fff'
          fillOpacity='0.9'
          shapeRendering='crispEdges'
        ></path>
      </g>
      <defs>
        <clipPath id='Icon_Color-Share_Shadow_Alt_2_svg__a'>
          <path fill='#fff' d='M0 0h48v48H0z'></path>
        </clipPath>
        <filter
          id='Icon_Color-Share_Shadow_Alt_2_svg__b'
          x='-1.5'
          y='0.5'
          width='51'
          height='49'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          ></feColorMatrix>
          <feOffset dy='1.5'></feOffset>
          <feGaussianBlur stdDeviation='2.25'></feGaussianBlur>
          <feComposite in2='hardAlpha' operator='out'></feComposite>
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'></feColorMatrix>
          <feBlend
            in2='BackgroundImageFix'
            result='effect1_dropShadow_81245_5665'
          ></feBlend>
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          ></feColorMatrix>
          <feOffset dy='1.5'></feOffset>
          <feGaussianBlur stdDeviation='0.75'></feGaussianBlur>
          <feComposite in2='hardAlpha' operator='out'></feComposite>
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'></feColorMatrix>
          <feBlend
            in2='effect1_dropShadow_81245_5665'
            result='effect2_dropShadow_81245_5665'
          ></feBlend>
          <feBlend
            in='SourceGraphic'
            in2='effect2_dropShadow_81245_5665'
            result='shape'
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
