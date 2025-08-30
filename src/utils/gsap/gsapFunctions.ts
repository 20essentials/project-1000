import gsap from 'gsap';
export const wrapValue = (min: number, max: number) => gsap.utils.wrap(min, max);
