import { useTransformOrigin } from '@/store/useTransformOrigin';
import '@/styles/Container2.css';

export function Container2() {
  const x = useTransformOrigin(state => state.x);
  const y = useTransformOrigin(state => state.y);

  return (
    <article
      style={{ '--x': `${x}px`, '--y': `${y}px` } as React.CSSProperties}
      className='container2 inner-content'
    ></article>
  );
}
