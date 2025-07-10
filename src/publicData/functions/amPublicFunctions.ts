import { getRandomNumber, generateRandomISODate } from '@/utils/functions';
import type { postProps } from '@/components/pages/SliderPosts/types';

export function generateRandomCommonProps({
  userId,
  username,
  profileImageSrc,
  profileDescription
}: {
  userId: string;
  username: string;
  profileImageSrc: string;
  profileDescription: string;
}) {
  return {
    userId,
    username,
    profileImageSrc,
    profileDescription,
    following: false,
    followers: getRandomNumber(1000, 750_000),
    totalLikes: getRandomNumber(1000, 20_000_000),
    followed: getRandomNumber(0, 1000)
  };
}

export function generateExactlyCommonProps({
  userId,
  username,
  profileImageSrc,
  profileDescription,
  following,
  followers,
  totalLikes,
  followed
}: {
  userId: string;
  username: string;
  profileImageSrc: string;
  profileDescription: string;
  following: boolean;
  followers: number;
  totalLikes: number;
  followed: number;
}) {
  return {
    userId,
    username,
    profileImageSrc,
    profileDescription,
    following,
    followers,
    totalLikes,
    followed
  };
}

function generaPostData() {
  return {
    dateOfPublication: generateRandomISODate(),
    totalViewsOfThePost: getRandomNumber(5000, 500_000),
    hearts: getRandomNumber(1000, 500_000),
    comments: getRandomNumber(3, 999),
    saved: getRandomNumber(80, 5000),
    isSaved: false,
    shared: getRandomNumber(200, 4000)
  };
}

export function generatePostImage({
  arrayImages,
  tags,
  description,
  idPost = `${crypto.randomUUID()}-${getRandomNumber(1000, 9999)}`
}: {
  arrayImages: string[];
  tags?: string[];
  description?: string;
  idPost: string;
}) {
  return {
    arrayImages,
    ...generaPostData(),
    idPost,
    description,
    tags
  };
}

export function generatePostVideo({
  videoSrc,
  tags,
  description,
   idPost = `${crypto.randomUUID()}-${getRandomNumber(1000, 9999)}`
}: {
  videoSrc: string;
  tags?: string[];
  description?: string;
  idPost: string;
}) {
  return {
    videoSrc,
    ...generaPostData(),
    idPost,
    description,
    tags
  };
}

type ContentImage = {
  type: 'image';
  arrayImages?: string[];
};

type ContentVideo = {
  type: 'video';
  videoSrc?: string;
  idPost: string;
};

type ImageAndVideoCommon = {
  tags?: string[];
  description?: string;
  idPost: string;
};

type Content = (ContentImage | ContentVideo) & ImageAndVideoCommon;
export type ArrayContent = Content[];

export function generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
}: {
  PREFIX: string;
  ARRAY_CONTENT: ArrayContent;
}): postProps[] {
  return ARRAY_CONTENT.map(content => {
    if (content.type === 'image') {
      const { arrayImages = [], description, tags, idPost } = content;
      return generatePostImage({
        arrayImages: arrayImages.map(image => `${PREFIX}${image}`),
        description: description,
        tags: tags,
        idPost
      });
    }
    //Video By Default
    const { videoSrc, description, tags, idPost } = content;
    return generatePostVideo({
      videoSrc: `${PREFIX}${videoSrc}`,
      description: description,
      tags: tags,
      idPost
    });
  });
}
