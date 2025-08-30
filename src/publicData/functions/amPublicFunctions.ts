import { generateRandomISODate } from '@/utils/functions/generateRandomISODate'
import type { postProps } from '@/components/pages/SliderPosts/types';
import { generateRandomNumber } from '@/utils/functions/generateRandomNumber';
import { UUID } from '@/utils/array/uuid/arrayDeIdentificadoresUnicos';

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
    followers: generateRandomNumber(1000, 750_000),
    totalLikes: generateRandomNumber(1000, 20_000_000),
    followed: generateRandomNumber(0, 1000)
  };
}

export function generateExactlyCommonProps({
  userId,
  username,
  profileImageSrc,
  profileDescription,
  following = false,
  followers,
  totalLikes = 0,
  followed
}: {
  userId: string;
  username: string;
  profileImageSrc: string;
  profileDescription: string;
  following?: boolean;
  followers: number;
  totalLikes?: number;
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
    totalViewsOfThePost: generateRandomNumber(5000, 920_000),
    hearts: generateRandomNumber(1000, 500_000),
    comments: generateRandomNumber(3, 999),
    saved: generateRandomNumber(80, 5000),
    isSaved: false,
    shared: generateRandomNumber(200, 4000)
  };
}

export function generatePostImage({
  arrayImages,
  tags,
  description,
  idPost = `${crypto.randomUUID()}-${generateRandomNumber(1000, 9999)}`,
  isLiked = false
}: {
  arrayImages: string[];
  tags?: string[];
  description?: string;
  idPost: string;
  isLiked?: boolean;
}) {
  return {
    arrayImages,
    ...generaPostData(),
    idPost,
    description,
    tags,
    isLiked
  };
}

export function generatePostVideo({
  videoSrc,
  tags,
  description,
  idPost = `${crypto.randomUUID()}-${generateRandomNumber(1000, 9999)}`,
  isLiked = false
}: {
  videoSrc: string;
  tags?: string[];
  description?: string;
  idPost: string;
  isLiked?: boolean;
}) {
  return {
    videoSrc,
    ...generaPostData(),
    idPost,
    description,
    tags,
    isLiked
  };
}

type ContentImage = {
  type: 'image';
  arrayImages?: string[];
  idPost: string;
  isLiked?: boolean;
};

type ContentVideo = {
  type: 'video';
  videoSrc?: string;
  idPost: string;
  isLiked?: boolean;
};

type ImageAndVideoCommon = {
  tags?: string[];
  description?: string;
};

type Content = (ContentImage | ContentVideo) & ImageAndVideoCommon;
export type ArrayContent = Content[];

/******************MANUAL ***************** */
export function generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
}: {
  PREFIX: string;
  ARRAY_CONTENT: ArrayContent;
}): postProps[] {
  return ARRAY_CONTENT.map(content => {
    if (content.type === 'image') {
      const {
        arrayImages = [],
        description,
        tags,
        idPost,
        isLiked = false
      } = content;
      return generatePostImage({
        arrayImages: arrayImages.map(image => `${PREFIX}${image}`),
        description: description,
        tags: tags,
        idPost,
        isLiked
      });
    }
    //Video By Default
    const { videoSrc, description, tags, idPost, isLiked = false } = content;
    return generatePostVideo({
      videoSrc: `${PREFIX}${videoSrc}`,
      description: description,
      tags: tags,
      idPost,
      isLiked
    });
  });
}

/******************AUTOMATIC ***************** */
export function generateArrayPostsOfImages({
  prefixUrl,
  quantityOfImages,
  userId,
  prefixLetterImages,
  arrayDescriptionOfImages
}: {
  prefixUrl: string;
  quantityOfImages: number;
  userId: string;
  prefixLetterImages: string;
  arrayDescriptionOfImages?: string[];
}): postProps[] {
  if (quantityOfImages === 0) return [];

  if (arrayDescriptionOfImages) {
    return arrayDescriptionOfImages
      .slice(0, quantityOfImages)
      .map((description = '', i) => {
        return generatePostImage({
          arrayImages: [`${prefixUrl}${prefixLetterImages}${i + 1}.avif`],
          idPost: `${userId}-img-${UUID[i]}`,
          description
        });
      });
  }
  return Array.from({ length: quantityOfImages }, (_, i) => {
    return generatePostImage({
      arrayImages: [`${prefixUrl}${prefixLetterImages}${i + 1}.avif`],
      idPost: `${userId}-img-${UUID[i]}`
    });
  });
}

export function generateArrayPostsOfVideos({
  prefixUrl,
  quantityOfVideos,
  userId,
  prefixLetterVideos,
  arrayDescriptionsOfVideos
}: {
  prefixUrl: string;
  quantityOfVideos: number;
  userId: string;
  prefixLetterVideos: string;
  arrayDescriptionsOfVideos?: string[];
}): postProps[] {
  if (quantityOfVideos === 0) return [];
  if (arrayDescriptionsOfVideos) {
    return arrayDescriptionsOfVideos
      .slice(0, quantityOfVideos)
      .map((description = '', i) =>
        generatePostVideo({
          videoSrc: `${prefixUrl}${prefixLetterVideos}${i + 1}.mp4`,
          idPost: `${userId}-vid-${UUID[i]}`,
          description
        })
      );
  }
  return Array.from({ length: quantityOfVideos }, (_, i) =>
    generatePostVideo({
      videoSrc: `${prefixUrl}${prefixLetterVideos}${i + 1}.mp4`,
      idPost: `${userId}-vid-${UUID[i]}`
    })
  );
}
