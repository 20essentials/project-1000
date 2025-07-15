import '@/components/pages/SliderPosts/PostVideo/inputRange.css';
import { formatTimeHH_MM_SS } from '@/utils/functions';
import { useEffect, useState } from 'react';

export function InputRange({
  videoRef
}: {
  videoRef: React.RefObject<HTMLVideoElement | null>;
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
      setTotalDuration(Math.floor(video.duration));
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
      <aside className='container-input-range'>
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
        {formatTimeHH_MM_SS(currentDuration)} /&nbsp;
        <span className='total-time'>{formatTimeHH_MM_SS(totalDuration)}</span>
      </aside>
    </>
  );
}
