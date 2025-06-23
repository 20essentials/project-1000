import '@/styles/Layer1.css';
import { useEffect, useRef } from 'react';

export function Layer1() {
  const containerRef = useRef<HTMLElement | null>(null);
  const iconRef = useRef<HTMLElement | null>(null);

useEffect(() => {
  const container = containerRef.current;
  const icon = iconRef.current;
  if (!container || !icon) return;

  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;
  let dragStarted = false;
  let startX = 0;
  let startY = 0;
  const dragThreshold = 3; // px para empezar a arrastrar

  const onMouseDown = (e: MouseEvent) => {
    if (!icon.contains(e.target as Node)) return;

    const rect = icon.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    startX = e.clientX;
    startY = e.clientY;

    dragStarted = false; // Todavía no está arrastrando

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const moveAt = (clientX: number, clientY: number) => {
    const containerRect = container.getBoundingClientRect();

    let left = clientX - containerRect.left - offsetX;
    let top = clientY - containerRect.top - offsetY;

    left = Math.max(
      10,
      Math.min(left, container.clientWidth - icon.offsetWidth) - 10
    );
    top = Math.max(
      10,
      Math.min(top, container.clientHeight - icon.offsetHeight) - 25
    );

    icon.style.left = `${left}px`;
    icon.style.top = `${top}px`;
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!dragStarted) {
      // Solo activamos drag si se movió más que el umbral
      if (
        Math.abs(e.clientX - startX) >= dragThreshold ||
        Math.abs(e.clientY - startY) >= dragThreshold
      ) {
        dragStarted = true;
        isDragging = true;
        icon.style.position = 'absolute';
        icon.style.pointerEvents = 'none';
      } else {
        return; // No hacemos nada aún, no superó el umbral
      }
    }

    if (isDragging) {
      moveAt(e.clientX, e.clientY);
    }
  };

  const onMouseUp = () => {
    if (isDragging) {
      isDragging = false;
      icon.style.pointerEvents = 'auto';
    }
    dragStarted = false;

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousedown', onMouseDown);

  return () => {
    document.removeEventListener('mousedown', onMouseDown);
  };
}, []);


  return (
    <article className='layer1 layer-container'>
      <aside className='padTop'></aside>
      <section
        className='container-grid'
        ref={containerRef}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <article
          className='social-top elegido'
          ref={iconRef}
          style={{
            position: 'absolute',
            left: '10px',
            top: '10px',
            cursor: 'grab'
          }}
        >
          <img
            draggable='false'
            src='/assets/tiktok-logo.avif'
            className='titk-tok-logo'
          />
        </article>
      </section>
    </article>
  );
}
