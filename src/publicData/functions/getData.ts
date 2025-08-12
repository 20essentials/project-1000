import type { arrayOfPosts } from '@/components/pages/SliderPosts/types';
import { PRIVATE_DATA } from '@/privateData/amPrivateData';
const safePrivateData = PRIVATE_DATA ?? [];
import { PUBLIC_DATA } from '@/publicData/amPublicData';
export const FOLLOWED: arrayOfPosts = [...safePrivateData];
export const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];
