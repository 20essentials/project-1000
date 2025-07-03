import { useTransformOrigin } from '@/store/useTransformOrigin';
import '@/styles/Container2.css';
import { baseUrl } from '@/utils/functions';
const tikTokLogo = baseUrl('/assets/tiktok-logo.avif');
const tikTokLogoText = baseUrl('/assets/tiktok-logo-text.webp');
import { useNcontainer, CONTAINER_IS } from '@/store/useNcontainer';
import { useEffect } from 'react';

export function Container2() {
  const x = useTransformOrigin(state => state.x);
  const y = useTransformOrigin(state => state.y);
  const showContainewNum = useNcontainer(state => state.showContainewNum);

  useEffect(() => {
    let timeOutId = setTimeout(() => {
      showContainewNum(CONTAINER_IS.HOME);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return (
    <article
      style={{ '--x': `${x}px`, '--y': `${y}px` } as React.CSSProperties}
      className='container2 inner-content'
    >
      <img draggable='false' src={tikTokLogo} className='am-tik-tok-logo' />
      <img
        draggable='false'
        src={tikTokLogoText}
        className='am-tik-tok-logo-text'
      />
    </article>
  );
}
