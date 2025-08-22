import { useEffect } from 'react';
const heartSrc = '/assets/heart-3d.webp';

export function useDbclickHeart({
  containerRef,
  childrenClass
}: {
  containerRef: React.RefObject<HTMLElement | null>;
  childrenClass: string
}) {
  useEffect(() => {
    const container = containerRef.current as HTMLElement;
    if (!container) return;
    const elementThatReceivesDbClick = container.querySelector(childrenClass) as HTMLElement;
    const containerLiked = container.querySelector(
      '.button-container.btn-container-liked'
    ) as HTMLElement;

    function handleDblClick(e: MouseEvent) {
      e.stopImmediatePropagation();
      e.preventDefault();
      const { clientX, clientY } = e;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const heartImg = document.createElement('img');
      heartImg.src = heartSrc;
      heartImg.classList.add('heart-img');
      heartImg.style.position = 'absolute';
      heartImg.style.left = `${x}px`;
      heartImg.style.top = `${y}px`;
      container.appendChild(heartImg);
      if (!containerLiked.classList.contains('this-post-is-liked'))
        containerLiked.click();
      let timer = setTimeout(() => {
        heartImg.remove();
        clearTimeout(timer);
      }, 1000);
    }

    elementThatReceivesDbClick.addEventListener('dblclick', handleDblClick);

    return () => {
      elementThatReceivesDbClick.removeEventListener('dblclick', handleDblClick);
    };
  }, []);
}
