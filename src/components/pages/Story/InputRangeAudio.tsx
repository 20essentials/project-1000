import '@/components/pages/SliderPosts/PostVideo/inputRange.css';
import { formatTimeHH_MM_SS } from '@/utils/functions';

export function InputRangeAudio({
  audioRef,
  otherClassName,
  totalDuration,
  currentDuration,
  setCurrentDuration
}: {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  otherClassName?: string;
  totalDuration: number;
  currentDuration: number;
  setCurrentDuration: (value: number) => void;
}) {
  function handleDuration(e: React.ChangeEvent<HTMLInputElement>) {
    const newTime = +e.target.value;
    setCurrentDuration(newTime);
  }

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
        {formatTimeHH_MM_SS(currentDuration)} /&nbsp;
        <span className='total-time'>{formatTimeHH_MM_SS(totalDuration)}</span>
      </aside>
    </>
  );
}
