import { formatTimeHH_MM_SS } from '@/utils/functions';
export const MAX_TIME_OF_SECONDS = 10; //3 minutes

export function CurrentVideoDuration({ duration }: { duration: number }) {
  return (
    <>
      <aside className='current-video-duration'>
        {formatTimeHH_MM_SS(duration)}
      </aside>
    </>
  );
}
