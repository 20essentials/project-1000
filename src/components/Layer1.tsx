import '@/styles/Layer1.css';
import React, { useEffect, useRef, useState } from 'react';

export function Layer1() {
  const [indexOfVisibleIcon, setindexOfVisibleIcon] = useState(12);
  const containerGrid = useRef<HTMLElement | null>(null);
  const lastTargetSocialTop = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = containerGrid.current;
    if (!container) return;

    let clone: HTMLElement | null = null;
    let target: HTMLElement | null = null;
    let offsetX = 0;
    let offsetY = 0;

    const handlePress = (e: MouseEvent) => {
      target = e.target as HTMLElement;
      if (!target.classList.contains('social-top') || !target.classList.contains('elegido')) return;

      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      offsetX = e.clientX - targetRect.left;
      offsetY = e.clientY - targetRect.top;

      clone = target.cloneNode(true) as HTMLElement;
      clone.classList.add('drag', 'elegido');
      clone.style.position = 'absolute';
      clone.style.pointerEvents = 'none';
      clone.style.zIndex = '9999';

      // Posición inicial
      let initLeft = e.clientX - containerRect.left - offsetX;
      let initTop = e.clientY - containerRect.top - offsetY;

      // Limitar desde el inicio también
      const maxLeft = container.clientWidth - target.offsetWidth;
      const maxTop = container.clientHeight - target.offsetHeight;

      initLeft = Math.max(0, Math.min(initLeft, maxLeft));
      initTop = Math.max(0, Math.min(initTop, maxTop));

      clone.style.left = `${initLeft}px`;
      clone.style.top = `${initTop}px`;

      container.appendChild(clone);
      target.classList.remove('elegido');

      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleRelease);
      document.addEventListener('mouseover', handleMouseOver);
    };

    function handleMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.classList.contains('social-top')) {
        target.classList.add('visible');
        lastTargetSocialTop.current = target;

        target.addEventListener('mouseleave', () => {
          target.classList.remove('visible');
          lastTargetSocialTop.current = null;

          target.removeEventListener('mouseover', handleMouseOver);
          target.removeEventListener('mouseleave', handleMouseOver);
          
        });
      }
    }

    const handleMove = (e: MouseEvent) => {
      if (!clone) return;

      const containerRect = container.getBoundingClientRect();
      const maxLeft = container.clientWidth - clone.offsetWidth - 5;
      const maxTop = container.clientHeight - clone.offsetHeight - 14;

      let newLeft = e.clientX - containerRect.left - offsetX;
      let newTop = e.clientY - containerRect.top - offsetY;

      // Limitar para que no se salga del container
      newLeft = Math.max(5, Math.min(newLeft, maxLeft));
      newTop = Math.max(10, Math.min(newTop, maxTop));

      clone.style.left = `${newLeft}px`;
      clone.style.top = `${newTop}px`;
    };

    const handleRelease = () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleRelease);
      document.removeEventListener('mouseover', handleMouseOver);
      // console.log(lastTargetSocialTop.current, clone);

      // if (lastTargetSocialTop.current && clone) {
      //   lastTargetSocialTop.current.classList.remove('drag');
      //   lastTargetSocialTop.current.replaceWith(clone);
      // }

      if (clone) {
        clone.remove();
        clone = null;
      }
      if (target) {
        target.classList.add('elegido');
        target = null;
      }
    };

    document.addEventListener('mousedown', handlePress);

    return () => {
      document.removeEventListener('mousedown', handlePress);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleRelease);
    };
  }, []);

  return (
    <article className='layer1 layer-container'>
      <aside className='padTop'></aside>
      <section className='container-grid' ref={containerGrid}>
        {[...Array(35).keys()].map(idx => {
          const isVisible = idx === indexOfVisibleIcon;
          const className = `social-top ${isVisible ? 'elegido' : ''}`;
          return (
            <article key={idx} className={className} draggable='false'>
              {isVisible && (
                <img
                  draggable='false'
                  src='/assets/tiktok-logo.avif'
                  className='titk-tok-logo'
                />
              )}
            </article>
          );
        })}
      </section>
    </article>
  );
}
