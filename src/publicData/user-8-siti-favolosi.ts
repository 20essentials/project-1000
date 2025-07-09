import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

export const siti_favolosi_commonProps = generateExactlyCommonProps({
  userId: '6d33c7d3-dcad-413c-bb93-a5b76361d475',
  username: 'siti_favolosi',
  profileImageSrc: 'https://20essentials.github.io/project-000-830/assets/fondin.avif',
  following: false,
  followers: 18_320,
  totalLikes: 639_720,
  followed: 21,
  profileDescription: 'il pc si chiama: HP pavlion'
});

const PREFIX = 'https://dominicnikolai.github.io/project-194/assets/siti-favolosi/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: ['musica', 'canzoni'],
    description: `✨THE NOSTALGIA MACHINE✨`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    tags: ['viaggi', 'lowcost'],
    description: `✨SKYSCANNER✨`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    tags: ['random', 'mistery'],
    description: `✨NEAL.FUN✨`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    tags: ['studiare', 'corsi'],
    description: `✨STUDYSTREAM ✨`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    tags: ['presentation', 'infografia'],
    description: `✨VENNAGE✨ `
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    tags: ['icons', 'svg'],
    description: `✨flaticon✨`
  },
  {
    type: 'video',
    tags: ['jpg', 'avif', 'webp', 'png'],
    videoSrc: 'v7.mp4',
    description: `✨REMOVE.PG✨ `
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    tags: ['paletter', 'rgb'],
    description: `✨COLORABLE✨ `
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    tags: ['designs'],
    description: `✨CANVA✨ `
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    tags: ['notes'],
    description: `✨SPEECHNOTES✨`
  },
  {
    type: 'video',
    tags: ['art'],
    videoSrc: 'v11.mp4',
    description: `✨PIXILART✨ `
  },
  {
    type: 'video',
    tags: ['icons'],
    videoSrc: 'v12.mp4',
    description: `✨ICONFINDER✨`
  }
];

export const siti_favolosi_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
