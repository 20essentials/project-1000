import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';
import { PUBLIC_001_100 } from './001-100/am001-100';
import { PUBLIC_101_200 } from './101-200/am101-200';
import { PUBLIC_201_300 } from './201-300/am201-300';
import { PUBLIC_301_400 } from './301-400/am301-400';
import { PUBLIC_401_500 } from './401-500/am401-500';
export const PUBLIC_DATA: arrayOfPosts = [
  ...PUBLIC_001_100,
  ...PUBLIC_101_200,
  ...PUBLIC_201_300,
  ...PUBLIC_301_400,
  ...PUBLIC_401_500,
];
