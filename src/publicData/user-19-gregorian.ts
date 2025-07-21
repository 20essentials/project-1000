import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

//falta userId, profilesrc, prefix, profileDescription

export const gregorian_commonProps = generateExactlyCommonProps({
  userId: 'dca8f935-8dab-4c0c-815c-615e2169770a',
  username: 'gregorian',
  profileImageSrc:
    'https://dominicnikolai.github.io/project-206/assets/gregorian/f1.avif',
  following: false,
  followers: 222_720,
  totalLikes: 9_700_320,
  followed: 1135,
  profileDescription: '😎'
});

const PREFIX = 'https://dominicnikolai.github.io/project-206/assets/gregorian/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: ['for you', 'fyp', 'spain'],
    description: `Ibiza Beach Club`,
    idPost: `${gregorian_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    tags: ['rhein', 'fyp', 'kirmes'],
    description: `19 schwer verletzte ❤️‍🩹 viel Kraft an alle`,
    idPost: `${gregorian_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    tags: ['Dormund', 'fyp', 'lime'],
    description: `Dormund`,
    idPost: `${gregorian_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    tags: ['for you', 'fyp', 'Alemania'],
    description: `Night`,
    idPost: `${gregorian_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    tags: ['foryoupage', 'germany', 'summer'],
    description: `Duisburg 🇩🇪☀️`,
    idPost: `${gregorian_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    tags: ['foryou', 'fyp', 'mallorca'],
    description: `Not Maledive its Mallorca 🏝️🇪🇸`,
    idPost: `${gregorian_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    tags: ['dortmund', 'bayerleverkusen', 'fürdich', 'fürdichpage', 'bundesliga'],
    description: `Klarer Elfmeter ⚽️🚫`,
    idPost: `${gregorian_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    tags: [
      'bvb',
      'dortmund',
      'youwillneverwalkalone',
      'fürdich',
      'fürdichseite',
      'viral'
    ],
    description: `Westfalenstadion 🖤💛 Dortmund BVB. `,
    idPost: `${gregorian_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    tags: ['borussiadortmund', 'signalidunapark', 'fürdich', 'fürdichseite'],
    description: `Morgen abend ist es wieder soweit 🏟️ BVB 🖤💛`,
    idPost: `${gregorian_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    tags: ['balayage', 'blondehair', 'curlyhair', 'fürdich'],
    description: `Hairsalon Goodlife ✂️ `,
    idPost: `${gregorian_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    tags: ['castroprauxel', 'curlyhair', 'fürdich', 'fürdichseite'],
    description: `📍Castrop-Rauxel ✂️ für Termine ☎️`,
    idPost: `${gregorian_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    tags: ['dubai', 'fypシ', 'fürdich', 'fürdichseiteシ'],
    description: `Peace 🌅`,
    idPost: `${gregorian_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  },
  {
    type: 'video',
    videoSrc: 'v13.mp4',
    tags: ['snoopdogg', 'snoopdoggydogg', 'köln', 'fürdich', 'fürdichseiteシ'],
    description: `Gänsehaut Konzert Snoop Dogg in Köln`,
    idPost: `${gregorian_commonProps.userId}-a6a20e67-0771-4112-a915-d4db596daef6`
  },
  {
    type: 'video',
    videoSrc: 'v14.mp4',
    tags: ['ibiza', 'obeach', 'obeachibiza'],
    description: `Ibiza Beach Club 🇪🇸`,
    idPost: `${gregorian_commonProps.userId}-43973d48-d59b-4dc7-aaa1-c5e69ea055f7`
  },
  {
    type: 'video',
    videoSrc: 'v15.mp4',
    tags: ['ibiza', 'obeach'],
    description: `Ibiza Club`,
    idPost: `${gregorian_commonProps.userId}-9f278864-6362-4e81-a406-fc99443828a1`
  }
];

export const gregorian_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
