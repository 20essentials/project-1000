import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

const username = 'paracaidismo';
const userId = '64884541-2dd8-4762-9390-6351f9dbccd7';
const PREFIX = 'https://dominicnikolai.github.io/project-317/assets/paracaidismo/';
const profileDescription = `Just Do It`;
const followers = 38_720_232;
const followed = 50;
const profileImageSrc = `${PREFIX}/p3rfil.avif`;

export const paracaidismo_commonProps = generateExactlyCommonProps({
  userId,
  username,
  profileImageSrc,
  followers,
  followed,
  profileDescription
});

/* Generamos el contenido de los videos con UUIDs */
const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `the path:`,
    idPost: `${paracaidismo_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `insane pov `,
    idPost: `${paracaidismo_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `you and bro dab up at 12‘000 feet`,
    idPost: `${paracaidismo_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `Vibes all summer! #skydiving`,
    idPost: `${paracaidismo_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `My kind of point of view! #pov #skydive #helicoper #skydiving`,
    idPost: `${paracaidismo_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `Any guesses on how high I am? #skydiving #fall #extremesports #skydive #heights`,
    idPost: `${paracaidismo_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `Nothing feels better than jumping out of a plane • #skydive #travel #lifestyle #extreme #summer`,
    idPost: `${paracaidismo_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `Sometimes life stands still… until you move. Don’t wait for things to happen, go make them happen🔥🚁 • • #iceland #skydiving #summer`,
    idPost: `${paracaidismo_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `Who do you want to go skydiving with…? • • #skydive #lifestyle #travel #friends`,
    idPost: `${paracaidismo_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `The start of a new chapter… There’s not exactly a way to describe the feeling of jumping off a cliff, especially the moments leading up to it. This was one of those experiences that truly pushed me to embrace that fear… my first base jumps running off the cliffs of Norway ⚡️ . . . #extreme #adventure #adrenaline #lifeofadventure #basejump #liveyourlife`,
    idPost: `${paracaidismo_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    description: `life`,
    idPost: `${paracaidismo_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v13.mp4',
    description: `Knees in the breeze. Happy Friday 🌊`,
    idPost: `${paracaidismo_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  },
  {
    type: 'video',
    videoSrc: 'v14.mp4',
    description: `Nothing like hearing the sounds of jumpers leaving the aircraft while you’re holding it steady 🪂🪂🪂`,
    idPost: `${paracaidismo_commonProps.userId}-a6a20e67-0771-4112-a915-d4db596daef6`
  },
  {
    type: 'video',
    videoSrc: 'v15.mp4',
    description: `No place I’d rather live don’t @me 🇺🇸🎇`,
    idPost: `${paracaidismo_commonProps.userId}-43973d48-d59b-4dc7-aaa1-c5e69ea055f7`
  }
];

export const paracaidismo_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
