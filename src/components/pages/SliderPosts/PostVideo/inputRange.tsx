import '@/components/pages/SliderPosts/PostVideo/inputRange.css';
import { formatToHHMMSS } from "@/utils/functions/formatToHHMMSS";
import { useEffect, useState } from 'react';

export function InputRange({
  videoRef,
  otherClassName
}: {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  otherClassName?: string;
}) {
  const [totalDuration, setTotalDuration] = useState(0);
  const [currentDuration, setCurrentDuration] = useState(0);

  function handleDuration(e: React.ChangeEvent<HTMLInputElement>) {
    const newTime = +e.target.value;
    setCurrentDuration(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      const duration = Math.floor(video.duration);
      setTotalDuration(duration);
    };

    const handleTimeUpdate = () => {
      setCurrentDuration(Math.floor(video.currentTime));
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [videoRef]);

  return (
    <>
      <aside className={`container-input-range ${otherClassName}`}>
        <input
          onChange={handleDuration}
          className='am-input-range'
          type='range'
          min={0}
          max={totalDuration}
          value={currentDuration}
        />
      </aside>
      <aside className='am-timer-input-range'>
        {formatToHHMMSS(currentDuration)} /&nbsp;
        <span className='total-time'>{formatToHHMMSS(totalDuration)}</span>
      </aside>
    </>
  );
}
