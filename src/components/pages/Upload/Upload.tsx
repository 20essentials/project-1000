import '@/components/pages/Upload/Upload.css';
import CamaraVideo from './CamaraVideo';
import { FooterUpload } from './FooterUpload';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { SectionUpload } from './SectionUpload';
import { useSliderIndex } from './uploadHooks/useSectionType';
import { useModePhoto } from './uploadHooks/useModePhoto';
import { useUploadVideoOrImages } from '@/store/useUploadVideoOrImages';

export function Upload() {
  const sliderRef = useRef<HTMLElement | null>(null);
  const { updateIndex } = useSliderIndex(sliderRef);
  const { isModePhoto, modePhoto } = useModePhoto(true);
  const setArrayImages = useUploadVideoOrImages(s => s.setArrayImages);
  const setSrcVideo = useUploadVideoOrImages(s => s.setSrcVideo);

  useEffect(() => {
    return () => {
      setArrayImages([]);
      setSrcVideo({ srcVideo: null });
    };
  }, []);

  return (
    <article className='upload'>
      <aside className='container-of-upload-and-create scroll-x' ref={sliderRef}>
        <CamaraVideo
          updateIndex={updateIndex}
          isModePhoto={isModePhoto}
          modePhoto={modePhoto}
        />
        <SectionUpload modePhoto={modePhoto} />
      </aside>
      <FooterUpload updateIndex={updateIndex} />
    </article>
  );
}
