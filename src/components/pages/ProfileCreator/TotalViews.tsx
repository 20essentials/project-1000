import { generateNumOfAsideRight } from "@/utils/functions";

export function TotalViews({ totalViews }: { totalViews: number }) {
  return (
    <article className='total-views'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M7 4v16l13 -8z' />
      </svg>
      <p className="total-p">{generateNumOfAsideRight(totalViews)}</p>
    </article>
  );
}
