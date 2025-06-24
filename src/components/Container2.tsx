import { useTransformOrigin } from '@/store/useTransformOrigin';
import '@/styles/Container2.css';
import { baseUrl } from '@/utils/functions';
const tikTokLogo = baseUrl('/assets/tiktok-logo.avif');
const tikTokLogoText = baseUrl('/assets/tiktok-logo-text.webp');

export function Container2() {
  const x = useTransformOrigin(state => state.x);
  const y = useTransformOrigin(state => state.y);

  return (
    <article
      style={{ '--x': `${x}px`, '--y': `${y}px` } as React.CSSProperties}
      className='container2 inner-content'
    >
      <img draggable='false' src={tikTokLogo} className='am-tik-tok-logo' />
      <img draggable='false' src={tikTokLogoText} className='am-tik-tok-logo-text' />
    </article>
  );
}
