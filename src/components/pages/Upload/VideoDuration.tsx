import { formatToHHMMSS } from "@/utils/functions/formatToHHMMSS";
import { useEffect, useRef, useState } from 'react';
export const MAX_TIME_OF_SECONDS = 180; //3 minutes

export function CurrentVideoDuration({
  grabando,
  paraGrabacion
}: {
  grabando: boolean;
  paraGrabacion: () => void;
}) {
  const [duration, setDuration] = useState(0);
  const timerRef = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    if (timerRef.current && !grabando) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setDuration(0);
    }
    if (grabando) {
      timerRef.current = setInterval(() => {
        setDuration(prev => {
          if (prev + 1 >= MAX_TIME_OF_SECONDS) {
            paraGrabacion();
          }
          return prev + 1;
        });
      }, 1000);
    }
  }, [grabando]);
  
  return (
    <>
      <aside className='current-video-duration'>
        {formatToHHMMSS(duration)}
      </aside>
    </>
  );
}
