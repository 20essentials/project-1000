import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

const username = 'stvinmotion';
const userId = 'ec7049d4-40c6-4006-81e6-1225d09e8e6c';
const PREFIX = 'https://dominicnikolai.github.io/project-324/assets/stvinmotion/';
const profileDescription = `We make Themed VJ loops & VJing Tutorials.`;
const followers = 179_720;
const followed = 50;
const profileImageSrc = `${PREFIX}p3rfil.avif`;

export const stvinmotion_commonProps = generateExactlyCommonProps({
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
    description: `Made some VJ loops for that Techno performance you needed visuals for. Dark, eerie, b&w with darker parts for the build ups and flashy parts for those drops. Available till the end of April for superfans on Patreon, yo! Go amaze them! #technomusic #vjing #djing #lightdesigner #vjloops #livevisuals #resolume #stvinmotion`,
    idPost: `${stvinmotion_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `#vjloops #vjing #djing #resolume #livevisuals #deusx #vjmix`,
    idPost: `${stvinmotion_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `#vjing #djing #lightdesigner #vjloops #resolume #resolumearena #livevisuals`,
    idPost: `${stvinmotion_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  }
];

export const stvinmotion_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
