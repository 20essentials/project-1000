import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import InertiaPlugin from 'gsap/InertiaPlugin';
import { useGSAP } from '@gsap/react';
import {
  DURATION_OF_POST_INITIAL,
  useStoryDuration
} from '@/store/useStoryDuration';
import { useMemo } from 'react';
gsap.registerPlugin(Draggable, InertiaPlugin, useGSAP);

export function useSwipeScrollHorizontalStory({
  containerOfImagesRef,
  classNameOfTrigger
}: {
  containerOfImagesRef: React.RefObject<HTMLElement | null>;
  classNameOfTrigger: string;
}) {

  useGSAP(
    () => {
      if (!containerOfImagesRef.current) return;
      const containerOfSlide = containerOfImagesRef.current as HTMLElement;
      const sliderInner = containerOfSlide.querySelector(
        '.slider-inner'
      ) as HTMLElement;
      const slides = [...sliderInner.children];
      const numSlides = slides.length;
      if (numSlides === 1) return;

      const slideDelay = 18000 //5 hours;
      const slideDuration = 0.3;
      const wrap = true;

      const progressWrap = gsap.utils.wrap(0, 1);

      gsap.set(slides, {
        xPercent: (i: number) => i * 100
      });

      const wrapX = gsap.utils.wrap(-100, (numSlides - 1) * 100);
      const timer = gsap.delayedCall(slideDelay, autoPlay);

      function autoPlay() {
        if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
          timer.restart(true);
        } else {
          animateSlides(-1);
        }
      }

      const animation = gsap.to(slides, {
        xPercent: `+=${numSlides * 100}`,
        duration: 1,
        ease: 'none',
        paused: true,
        repeat: -1,
        modifiers: { xPercent: wrapX }
      });

      const proxy = document.createElement('div');
      let slideAnimation = gsap.to({}, {});
      let slideWidth = 0;
      let wrapWidth = 0;

      const draggable = new Draggable(proxy, {
        trigger: classNameOfTrigger,
        inertia: true,
        onPress: updateDraggable,
        onDrag: updateProgress,
        onThrowUpdate: updateProgress,
        snap: { x: snapX }
      });

      resize();
      window.addEventListener('resize', resize);

      function updateDraggable(this: Draggable) {
        timer.restart(true);
        slideAnimation.kill();
        this.update();
      }

      function animateSlides(direction: number) {
        timer.restart(true);
        slideAnimation.kill();
        const x = snapX(
          (gsap.getProperty(proxy, 'x') as number) + direction * slideWidth
        );
        slideAnimation = gsap.to(proxy, {
          x,
          duration: slideDuration,
          onUpdate: updateProgress
        });
      }

      function snapX(value: number) {
        const snapped = gsap.utils.snap(slideWidth, value);
        return wrap
          ? snapped
          : gsap.utils.clamp(-slideWidth * (numSlides - 1), 0, snapped);
      }

      function updateProgress() {
        animation.progress(
          progressWrap((gsap.getProperty(proxy, 'x') as number) / wrapWidth)
        );
      }

      function resize() {
        const norm = (gsap.getProperty(proxy, 'x') as number) / wrapWidth || 0;
        slideWidth = (slides[0] as HTMLElement).offsetWidth;
        wrapWidth = slideWidth * numSlides;

        if (!wrap) {
          draggable.applyBounds({
            minX: -slideWidth * (numSlides - 1),
            maxX: 0
          });
        }

        gsap.set(proxy, { x: norm * wrapWidth });
        animateSlides(0);
        slideAnimation.progress(1);
      }
    },
    { scope: containerOfImagesRef }
  );
}
