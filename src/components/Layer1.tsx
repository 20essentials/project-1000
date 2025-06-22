import '@/styles/Layer1.css';
import { useState } from 'react';

export function Layer1() {
  const [indexOfVisibleIcon, setindexOfVisibleIcon] = useState(12);

  return <article className='layer1 layer-container'>
    <aside className="padTop"></aside>
    <section className="container-grid">
      {
        [...new Array(35).keys()].map((idx) => {
          const isVisible = idx === indexOfVisibleIcon;
          const className = `social-container ${isVisible ? 'visible' : ''}`
          return <aside key={idx} className={className}>
          <article className="social-top"></article>
          <article className="social-bottom">TikTok</article>
        </aside>
        })
      }
    </section>
  </article>;
}
