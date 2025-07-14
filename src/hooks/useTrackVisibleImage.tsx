import { useEffect, useState } from "react";

export function useTrackVisibleImage({
  containerRef,
  imageSelector,
  arrayImages
}: {
  containerRef: React.RefObject<HTMLElement | null>;
  imageSelector: string;
  arrayImages: string[] | undefined;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    const images = container?.querySelectorAll<HTMLImageElement>(imageSelector);
    if (!container || !images || images.length === 0) return;

    const visibilityMap = new Map<HTMLImageElement, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target as HTMLImageElement, entry.intersectionRatio);
        });

        // Encuentra la imagen con mayor visibilidad
        let maxRatio = 0;
        let mostVisibleIndex = 0;

        Array.from(images).forEach((img, i) => {
          const ratio = visibilityMap.get(img) || 0;
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleIndex = i;
          }
        });

        setCurrentImageIndex(mostVisibleIndex + 1); // 1-based index
      },
      {
        threshold: Array.from({ length: 10 }, (_, i) => i / 10), // Más granular
        root: container
      }
    );

    images.forEach((img) => observer.observe(img));

    return () => {
      observer.disconnect();
    };
  }, [arrayImages, containerRef, imageSelector]);

  return currentImageIndex;
}
