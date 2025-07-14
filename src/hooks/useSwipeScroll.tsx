import { useEffect, type RefObject } from "react";

export const useSwipeScroll = (ref: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    const parent = el.parentElement;
    if (!parent) return;

    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    // Posición relativa al padre
    const getRelativeXToParent = (e: MouseEvent) => {
      const parentRect = parent.getBoundingClientRect();
      return e.clientX - parentRect.left;
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = getRelativeXToParent(e);
      startScrollLeft = el.scrollLeft;
      e.preventDefault();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const currentX = getRelativeXToParent(e);
      const delta = currentX - startX;

      // Sumar delta para que scroll siga el movimiento del mouse a la derecha
      el.scrollLeft = startScrollLeft - delta;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [ref]);
};
