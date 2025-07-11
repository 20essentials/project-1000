import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

/*
  falsta: userid, profilesrc, prefix
*/

export const luxury_commonProps = generateExactlyCommonProps({
  userId: '49899f1c-b74d-4b21-b9de-fd5601119f9b',
  username: 'luxury',
  profileImageSrc: 'https://20essentials.github.io/project-000-993/assets/car9.webp',
  following: false,
  followers: 110_538,
  totalLikes: 258_329,
  followed: 251,
  profileDescription: 'Just for Fun'
});

const PREFIX = 'https://dominicnikolai.github.io/project-195/assets/luxury/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: "video",
    videoSrc: "v1.mp4",
    tags: ["cars", "money"],
    description: `Crypto and Luxury`,
    idPost: `${luxury_commonProps.userId}-6f4a8a90-8cb4-4a1f-903b-3e7c20f0d9ea`,
    isLiked: false,
  },
  {
    type: "video",
    videoSrc: "v2.mp4",
    tags: ["travel", "helicopter"],
    description: `🚁🚁🚁`,
    idPost: `${luxury_commonProps.userId}-f13d2c7e-3157-4a96-bf34-9c9a59dcae3a`,
    isLiked: false,
  },
  {
    type: "video",
    videoSrc: "v3.mp4",
    tags: ["life", "alone"],
    description: `Jungle nights! ✨🌴`,
    idPost: `${luxury_commonProps.userId}-74b02e9e-cf5b-4907-a207-54cbcecd7b31`,
    isLiked: false,
  },
  {
    type: "video",
    videoSrc: "v4.mp4",
    tags: ["onboarding", "tour"],
    description: `House ✨`,
    idPost: `${luxury_commonProps.userId}-af26300d-f770-4023-8b7b-36559e12e3be`,
    isLiked: false,
  },
  {
    type: "video",
    videoSrc: "v5.mp4",
    tags: ["mclaren", "dapox"],
    description: `🤩🤩🤩 `,
    idPost: `${luxury_commonProps.userId}-baa04d10-1bc1-4a68-bc7b-9406d58f0a4c`,
    isLiked: false,
  },
  {
    type: "video",
    videoSrc: "v6.mp4",
    tags: ["gucci", "padra"],
    description: `Fendi`,
    idPost: `${luxury_commonProps.userId}-ecbcb6f0-0d35-4b6d-b91c-d57c8a8f7e52`,
    isLiked: false,
  }
];


export const luxury_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
