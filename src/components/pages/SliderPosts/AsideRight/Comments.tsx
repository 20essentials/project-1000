export function Comments(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 48 48' fill='currentColor' {...props}>
      <g filter='url(#Icon_Color-Comment_Shadow_svg__a)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M38.5 35.31c4.1-4.11 6.5-8.4 6.5-13.38C45 11.8 35.73 3.6 24.3 3.6S3.6 11.8 3.6 21.93C3.6 32.05 13.17 39 24.6 39v3.36c0 1.06 1.1 1.75 2.04 1.24 2.92-1.58 8.33-4.76 11.85-8.29ZM14.23 19.46a2.95 2.95 0 0 1 2.96 2.93 2.95 2.95 0 0 1-2.96 2.94 2.95 2.95 0 0 1-2.95-2.94 2.95 2.95 0 0 1 2.95-2.93Zm13.02 2.93a2.95 2.95 0 0 0-2.96-2.93 2.95 2.95 0 0 0-2.96 2.93 2.95 2.95 0 0 0 2.96 2.94 2.95 2.95 0 0 0 2.96-2.94Zm7.1-2.93a2.95 2.95 0 0 1 2.95 2.93 2.95 2.95 0 0 1-2.96 2.94 2.95 2.95 0 0 1-2.95-2.94 2.95 2.95 0 0 1 2.95-2.93Z'
          fill='#fff'
          fillOpacity='0.9'
        ></path>
      </g>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M24.6 39s11.47-.89 16.26-7.02c-4.8 6.75-9.59 10.43-13.78 11.66C22.88 44.87 24.6 39 24.6 39Z'
        fill='#000'
        fillOpacity='0.03'
      ></path>
      <defs>
        <filter
          id='Icon_Color-Comment_Shadow_svg__a'
          x='1.2'
          y='2.4'
          width='46.2'
          height='44.97'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          ></feColorMatrix>
          <feOffset dy='1.2'></feOffset>
          <feGaussianBlur stdDeviation='1.2'></feGaussianBlur>
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'></feColorMatrix>
          <feBlend
            in2='BackgroundImageFix'
            result='effect1_dropShadow_1_2867'
          ></feBlend>
          <feBlend
            in='SourceGraphic'
            in2='effect1_dropShadow_1_2867'
            result='shape'
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
