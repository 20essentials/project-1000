import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

/*
  falta: userid, profilesrc, prefix
*/

export const edaserkanbolat_edits_commonProps = generateExactlyCommonProps({
  userId: 'e5da74e3-9d58-4c92-9470-75252515c6e8',
  username: 'edaserkanbolat_edits',
  profileImageSrc:
    'https://20essentials.github.io/project-000-940/assets/j23.avif',
  following: false,
  followers: 115_329,
  totalLikes: 3_500_320,
  followed: 338,
  profileDescription: 'Serie: Sen Çal Kapimi'
});

const PREFIX =
  'https://dominicnikolai.github.io/project-197/assets/edaserkanbolat-edits/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: ['hanker', 'edser'],
    description: `Eles🔥`,
    isLiked: false,
    idPost: `${edaserkanbolat_edits_commonProps.userId}-91c3b5c7-57cb-4a99-b7d7-7b937db3696e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    tags: ['fyp', 'foryou'],
    description: `Eu sempre imaginei🤧🤍`,
    isLiked: false,
    idPost: `${edaserkanbolat_edits_commonProps.userId}-8c5fd6b2-4f3c-4f41-bd95-7e4172d84df2`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    tags: ['parati', 'fy'],
    description: `A felicidade da Hande de ver o Kerem❤️`,
    isLiked: false,
    idPost: `${edaserkanbolat_edits_commonProps.userId}-f979b5be-0b61-4d9f-b8a9-d61199be5bb1`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    tags: ['hanker', 'edser'],
    description: `Esse episódio❤️‍🔥 `,
    isLiked: false,
    idPost: `${edaserkanbolat_edits_commonProps.userId}-b0e49782-83ce-4b4c-9de5-d6e8b13a54e0`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    tags: ['fyp', 'foryou'],
    description: `Essa música é para essa cen  `,
    isLiked: false,
    idPost: `${edaserkanbolat_edits_commonProps.userId}-5ed559c4-3ae3-49a5-8c45-13cf7fc2c5e9`
  }
];


export const edaserkanbolat_edits_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
