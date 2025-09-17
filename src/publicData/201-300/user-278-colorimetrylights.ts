import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

const username = 'colorimetrylights';
const userId = '3e8e7050-14ca-40aa-a59a-a4ca5357b31d';
const PREFIX =
  'https://dominicnikolai.github.io/project-333/assets/colorimetrylights/';
const followers = 61_720;
const followed = 341;
const profileDescription = `A World of Light Reactive Art & Apparel ✨`;
const profileImageSrc = `${PREFIX}p3rfil.avif`;

export const colorimetrylights_commonProps = generateExactlyCommonProps({
  userId,
  username,
  profileImageSrc,
  followers,
  followed,
  profileDescription
});

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `#trippy #edm #psychedelic #colorimetry #festival #art #festivalseason`,
    idPost: `${colorimetrylights_commonProps.userId}-e98ff8b1-25e5-4a8a-8d5a-4e7bb0cfca30`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `#festivalfashion #edm #fyp #trippy #psychedelic #lightreactive #festivalseason`,
    idPost: `${colorimetrylights_commonProps.userId}-a6b44c77-786c-496c-b2e6-07df7829d7fb`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `#psychedelic #trippy #fyp #festivalfashion #edm #festival #festivalvibes #pashmina`,
    idPost: `${colorimetrylights_commonProps.userId}-d33b430f-c4a8-41ec-a635-812c5801fbe5`
  }
];

export const colorimetrylights_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
