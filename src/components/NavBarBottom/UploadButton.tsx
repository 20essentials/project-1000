export function UploadButton(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 75 49'
      {...props}
    >
      <path
        fill='#D8D8D8'
        stroke='#979797'
        strokeWidth='0.5'
        d='M.25.25h74.5v48.5H.25z'
        opacity='0.01'
      ></path>
      <path
        fill='#FA2D6C'
        fillRule='evenodd'
        d='M23.5 23.3c0-4.48 0-6.72.872-8.432a8 8 0 013.496-3.496C29.58 10.5 31.82 10.5 36.3 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 013.496 3.496C59 16.58 59 18.82 59 23.3v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 01-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 01-3.496-3.496C23.5 32.42 23.5 30.18 23.5 25.7v-2.4z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#20D5EC'
        fillRule='evenodd'
        d='M16 23.3c0-4.48 0-6.72.872-8.432a8 8 0 013.496-3.496C22.08 10.5 24.32 10.5 28.8 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 013.496 3.496c.872 1.711.872 3.952.872 8.432v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 01-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 01-3.496-3.496C16 32.42 16 30.18 16 25.7v-2.4z'
        clipRule='evenodd'
      ></path>
      <rect width='36' height='28' x='19.5' y='10.5' fill='#161823' rx='8'></rect>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M37 18a.5.5 0 00-.5.5v5h-5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h5v5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-5h5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-5v-5a.5.5 0 00-.5-.5h-1z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
}
