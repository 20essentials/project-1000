import { useNcontainer, CONTAINER_IS } from '@/store/useNcontainer';
import { useTransformOrigin } from '@/store/useTransformOrigin';
import '@/styles/Container1.css';
import { useRef } from 'react';
import { baseUrl } from '@/utils/functions';
const tikTokLogo = baseUrl('/assets/tiktok-logo.avif');
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(Draggable, useGSAP);

export function Container1() {
  const containerRef = useRef<HTMLElement | null>(null);
  const iconRef = useRef<HTMLElement | null>(null);
  const draggableRef = useRef<any>(null);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  const showContainewNum = useNcontainer(state => state.showContainewNum);
  const setTransformOrigin = useTransformOrigin(
    state => state.setTransformOrigin
  );
  const amX = useTransformOrigin(st => st.x);
  const amY = useTransformOrigin(st => st.y);

  function showIntroTikTok() {
    showContainewNum(CONTAINER_IS.INTRO_PAGE);
  }

  useGSAP(
    () => {
      if (!containerRef.current || !iconRef.current) return;
      const container = containerRef.current;
      const icon = iconRef.current;

      // Asegura que el container sea offsetParent para left/top
      if (getComputedStyle(container).position === 'static') {
        container.style.position = 'relative';
      }

      // Fuerza transform inicial a 0 para evitar discrepancias si hubo transforms previos
      gsap.set(icon, { x: 0, y: 0 });

      // tamaño / márgen
      const margin = 10;
      const iconRect = icon.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // calculamos límites en coordenadas relativas al container (left/top)
      const minLeft = margin;
      const minTop = margin;
      const maxLeft = Math.max(
        0,
        container.clientWidth - iconRect.width - margin
      );
      const maxTop = Math.max(0, container.clientHeight - iconRect.height - 30);

      // crear draggable sobre el elemento (no selector)
      const [instance] = Draggable.create(icon, {
        type: 'left,top', // importante: manipulamos left/top
        inertia: true, // si quieres inercia
        // bounds como objeto min/max (GSAP acepta esta forma)
        bounds: { minX: minLeft, maxX: maxLeft, minY: minTop, maxY: maxTop },

        onDragEnd() {
          // guardamos la posición actual (left/top en px)
          const left = parseInt(getComputedStyle(icon).left || '0', 10);
          const top = parseInt(getComputedStyle(icon).top || '0', 10);
          lastPosRef.current = { x: left, y: top };
        },

        onThrowComplete() {
          // cuando termina la inercia guardamos la posición final
          const left = parseInt(getComputedStyle(icon).left || '0', 10);
          const top = parseInt(getComputedStyle(icon).top || '0', 10);
          lastPosRef.current = { x: left, y: top };
        }
      });

      draggableRef.current = instance;

      // cleanup: cuando el componente se desmonta guardamos la última posición
      return () => {
        const inst = draggableRef.current;
        try {
          let final = lastPosRef.current;
          // si por alguna razón no tenemos lastPos (no se disparó drag), leemos ahora
          if (!final && icon) {
            final = {
              x: parseInt(getComputedStyle(icon).left || '0', 10),
              y: parseInt(getComputedStyle(icon).top || '0', 10)
            };
          }

          if (final) {
            setTransformOrigin({ x: final.x, y: final.y });
          }
        } catch (err) {
          console.warn('Error guardando coords en unmount', err);
        } finally {
          try {
            inst && inst.kill();
          } catch (e) {}
          draggableRef.current = null;
        }
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      className='inner-content'
      ref={containerRef}
      style={{ overflow: 'hidden' }}
    >
      <article
        className='social-top elegido tik-tok-logo'
        ref={iconRef}
        onClick={showIntroTikTok}
        style={{
          position: 'absolute',
          left: `${amX}px`,
          top: `${amY}px`,
          cursor: 'grab'
        }}
      >
        <img draggable='false' src={tikTokLogo} className='titk-tok-logo' />
      </article>
    </section>
  );
}
