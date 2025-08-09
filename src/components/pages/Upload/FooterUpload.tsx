import { useEffect, useState } from 'react';

export function FooterUpload({
  sliderRef
}: {
  sliderRef: React.RefObject<HTMLElement | null>;
}) {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.children[index].scrollIntoView({ behavior: 'smooth' });
    }
  }, [index]);

  const updateIndex = (index: number) => () => {
    setIndex(index);
  };

  return (
    <footer className='footer-upload'>
      <button className='footer-button-create' onClick={updateIndex(0)}>
        Create
      </button>
      <button className='footer-button-upload' onClick={updateIndex(1)}>
        Upload
      </button>
    </footer>
  );
}
