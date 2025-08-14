import { useEffect, type RefObject } from 'react';

export const useSwipeVerticalScroll = (ref: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    const parent = el.parentElement;
    if (!parent) return;

    let isDragging = false;
    let startY = 0;
    let startScrollTop = 0;

    const getRelativeYToParent = (e: MouseEvent) => {
      const parentRect = parent.getBoundingClientRect();
      return e.clientY - parentRect.top;
    };

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.tagName === 'INPUT' &&
        (target as HTMLInputElement).type === 'range'
      ) {
        return;
      }

      isDragging = true;
      startY = getRelativeYToParent(e);
      startScrollTop = el.scrollTop;
      e.preventDefault();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const currentY = getRelativeYToParent(e);
      const delta = currentY - startY;

      el.scrollTop = startScrollTop - delta;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    el.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [ref]);
};
