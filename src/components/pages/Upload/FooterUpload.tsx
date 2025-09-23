import { useEffect, useRef } from 'react';

export const SECTION_TYPE = {
  CREATE: 0,
  UPLOAD: 1
};

export function FooterUpload({
  updateIndex,
  sliderRef
}: {
  updateIndex: (index: number) => void;
  sliderRef: React.RefObject<HTMLElement | null>;
}) {
  const tabFollowerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sliderRef.current || !tabFollowerRef.current) return;
    const sliderRefElement = sliderRef.current;
    const tabFollowerElement = tabFollowerRef.current;

    function handleScrollX(e: Event) {
      const target = e.target as HTMLElement;
      const scrollLeft = target.scrollLeft;
      const percentOfScroll = Math.ceil((scrollLeft / target.scrollWidth) * 100);
      tabFollowerElement.style.left = `${Math.floor(scrollLeft / 2) + 5}px`;
      tabFollowerElement.classList.toggle('colorinTab', percentOfScroll >= 25);
    }

    sliderRefElement.addEventListener('scroll', handleScrollX);

    return () => {
      sliderRefElement.removeEventListener('scroll', handleScrollX);
    };
  }, []);

  return (
    <footer className='footer-upload'>
      <aside className='tab-follower' ref={tabFollowerRef}></aside>
      <button
        className='footer-button-create'
        onClick={() => updateIndex(SECTION_TYPE.CREATE)}
      >
        Create
      </button>
      <button
        className='footer-button-upload'
        onClick={() => updateIndex(SECTION_TYPE.UPLOAD)}
      >
        Upload
      </button>
    </footer>
  );
}
