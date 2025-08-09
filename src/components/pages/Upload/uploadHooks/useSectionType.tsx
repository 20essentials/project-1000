import { useState, useEffect } from 'react';

export function useSliderIndex(sliderRef: React.RefObject<HTMLElement | null>) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.children[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [index, sliderRef]);

  const updateIndex = (newIndex: number) => {
    setIndex(newIndex);
  };

  return { index, updateIndex };
}
