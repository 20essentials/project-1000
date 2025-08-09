import '@/components/pages/Upload/Upload.css';
import CamaraVideo from './CamaraVideo';
import { FooterUpload } from './FooterUpload';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { SectionUpload } from './SectionUpload';

export function Upload() {
  const sliderRef = useRef<HTMLElement | null>(null);

  const [index, setIndex] = useState(0);
  console.log(index);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.children[index].scrollIntoView({ behavior: 'smooth' });
    }
  }, [index]);

  const updateIndex = (index: number) => {
    setIndex(index);
  };

  return (
    <article className='upload'>
      <aside className='container-of-upload-and-create scroll-x' ref={sliderRef}>
        <CamaraVideo updateIndex={updateIndex} />
        <SectionUpload />
      </aside>
      <FooterUpload updateIndex={updateIndex} />
    </article>
  );
}
