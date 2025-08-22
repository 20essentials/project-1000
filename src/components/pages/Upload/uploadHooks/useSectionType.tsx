export function useSliderIndex(sliderRef: React.RefObject<HTMLElement | null>) {
  const updateIndex = (newIndex: number) => {
    if (sliderRef.current) {
      sliderRef.current.children[newIndex]?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return { updateIndex };
}
