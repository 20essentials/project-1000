import '@/components/pages/Upload/Upload.css';
import CamaraVideo from './CamaraVideo';
import { FooterUpload } from './FooterUpload';
import { useRef } from 'react';

export function Upload() {
  const sliderRef = useRef<HTMLElement | null>(null);

  return (
    <article className='upload'>
      <aside className='container-of-upload-and-create scroll-x' ref={sliderRef}>
        <CamaraVideo />
        <section className='upload-section'></section>
      </aside>
      <FooterUpload sliderRef={sliderRef} />
    </article>
  );
}
