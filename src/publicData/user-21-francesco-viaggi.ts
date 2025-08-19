import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

export const francesco_viaggi_commonProps = generateExactlyCommonProps({
  userId: '81460ace-7d45-4eed-a3dc-df29ec1d0643',
  username: 'francesco_viaggi',
  profileImageSrc:
    'https://dominicnikolai.github.io/project-209/assets/fr4nc3sco-vi4ggi/p3rfil.avif',
  following: false,
  followers: 122_720,
  totalLikes: 5_320_712,
  followed: 610,
  profileDescription: 'Viaggiare'
});

const PREFIX =
  'https://dominicnikolai.github.io/project-209/assets/fr4nc3sco-vi4ggi/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: ['madrid', 'spagna', 'vivereallestero', 'viaggiare'],
    description: `Vivere a Madrid`,
    idPost: `${francesco_viaggi_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    tags: ['newyork', 'theedge', 'viaggiare'],
    description: `✨ TRUCCO PAZZESCO PER IL THE EDGE A NEW YORK ✨`,
    idPost: `${francesco_viaggi_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    tags: ['newyork', 'grandcentral', 'viaggiare'],
    description: `New York è una città speciale? 🗽❤️`,
    idPost: `${francesco_viaggi_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    tags: ['newyork', 'baseball', 'viaggiare'],
    description: `Esperienza da provare assolutamente a New York ⚾️`,
    idPost: `${francesco_viaggi_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    tags: ['milano', 'minutobauli', 'dolci', 'food'],
    description: `Corri a provarlo a Piazza Beltrade a Milano!`,
    idPost: `${francesco_viaggi_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    tags: ['grecia', 'isolegreche', 'viaggiare'],
    description: `La Grecia è uno dei posti più belli al mondo, ma ogni isola ha la sua anima. Dalle più mondane alle più autentiche, ne ho visitate tante e ognuna ha qualcosa di unico.`,
    idPost: `${francesco_viaggi_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    tags: ['grecia', 'isolegreche', 'viaggiare'],
    description: `Crociera: o la ami o la odi! E tu? Di che team sei`,
    idPost: `${francesco_viaggi_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    tags: ['tenerife', 'canarie', 'spagna', 'vacanze', 'mare'],
    description: `Perché sempre più italiani scelgono di vivere a Tenerife? ☀️🌴`,
    idPost: `${francesco_viaggi_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    tags: ['tenerife', 'canarie', 'spagna', 'vacanze', 'mare'],
    description: `5 cose che devi assolutamente sapere su Fuerteventura`,
    idPost: `${francesco_viaggi_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    tags: ['dubai', 'emirati', 'viaggiare', 'vacanza', 'abudhabi'],
    description: `Dubai pro o contro?`,
    idPost: `${francesco_viaggi_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    tags: ['sushi', 'ayce', 'allyoucaneat', 'milano', 'cucinaasiatica'],
    description: `📍 Nuovo sushi all you can eat a Milano!`,
    idPost: `${francesco_viaggi_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    tags: ['padova', 'veneto', 'viaggiare'],
    description: `24 ore a Padova, cosa vedere?`,
    idPost: `${francesco_viaggi_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  },
  {
    type: 'video',
    videoSrc: 'v13.mp4',
    tags: ['maldive', 'viaggiare', 'mare'],
    description: `È online il mio primo viaggio di gruppo e sarà alle Maldive 🏖️
`,
    idPost: `${francesco_viaggi_commonProps.userId}-a6a20e67-0771-4112-a915-d4db596daef6`
  },
  {
    type: 'video',
    videoSrc: 'v14.mp4',
    description: `Come sono i beach bar a Dubai? CLA MO RO SIII 🏖️`,
    tags: ['dubai', 'emirati', 'viaggiare', 'vacanza'],
    idPost: `${francesco_viaggi_commonProps.userId}-43973d48-d59b-4dc7-aaa1-c5e69ea055f7`
  },
  {
    type: 'video',
    videoSrc: 'v15.mp4',
    tags: ['dubai', 'emirati', 'golf', 'vacanza'],
    description: `Experience da provare assolutamente a Dubai ⛳️`,
    idPost: `${francesco_viaggi_commonProps.userId}-9f278864-6362-4e81-a406-fc99443828a1`
  },
  {
    type: 'video',
    videoSrc: 'v16.mp4',
    description: `Quanto costa una vacanza a Dubai? 🇦🇪`,
    idPost: `${francesco_viaggi_commonProps.userId}-e8023a99-ae84-46f0-9f6f-133d9cf5b741`
  }
];

export const francesco_viaggi_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
