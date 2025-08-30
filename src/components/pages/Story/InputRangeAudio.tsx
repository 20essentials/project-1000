import '@/components/pages/SliderPosts/PostVideo/inputRange.css';
import { formatToHHMMSS } from "@/utils/functions/formatToHHMMSS";

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
      <aside
        className={`container-input-range isClickableInDrag ${otherClassName}`}
      >
        <input
          onChange={handleDuration}
          className='am-input-range '
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
