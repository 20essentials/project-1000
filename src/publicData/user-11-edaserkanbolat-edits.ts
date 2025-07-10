import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

/*
  falta: userid, profilesrc, prefix
*/

export const edaserkanbolat_edits_commonProps = generateExactlyCommonProps({
  userId: '',
  username: 'edaserkanbolat_edits',
  profileImageSrc: '',
  following: false,
  followers: 115_329,
  totalLikes: 3_500_320,
  followed: 338,
  profileDescription: 'Serie: Sen Çal Kapimi'
});

const PREFIX = '';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: ['hanker', 'edser'],
    description: `Eles🔥`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    tags: ['fyp', 'foryou'],
    description: `Eu sempre imaginei🤧🤍`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    tags: ['parati', 'fy'],
    description: `A felicidade da Hande de ver o Kerem❤️`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    tags: ['hanker', 'edser'],
    description: `Esse episódio❤️‍🔥 `
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
      tags: ['fyp', 'foryou'],
    description: `Essa música é para essa cen  `
  },

];

export const edaserkanbolat_edits_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
