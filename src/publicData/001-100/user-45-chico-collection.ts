import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

export const chico_collection_commonProps = generateExactlyCommonProps({
  userId: '34d39439-6a96-4198-90b4-46202826c602',
  username: 'chico_collection',
  profileImageSrc: 'https://dominicnikolai.github.io/project-233/assets/ch1cocollection/p3rfil.avif',
  following: false,
  followers: 14_700,
  followed: 525,
  profileDescription: 'Custom Collector'
});

const PREFIX = 'https://dominicnikolai.github.io/project-233/assets/ch1cocollection/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `Mi coleccion actual 2025 🕷️🕸️🔥`,
    idPost: `${chico_collection_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `ANAKIN 🔥 “Episodio III” Paint and Rooted hair`,
    idPost: `${chico_collection_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `#sideshow #hottoyscollection #onesixthscale #inart #hottoyscollector #hottoysphotography #custom #painting #vallejopaints #marvel #starwars #starwarssequels #starwarsmeme #starwarstheforceawakens #starwarsfanart #starwarsdaily #starwarsgeek #starwarscelebration #starwarsedit #starwarscollection #obiwan #anakin #darthvader #darthmaul #quigonjinn`,
    idPost: `${chico_collection_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `THE DARK KNIGTH 1:1 🦇🖤`,
    idPost: `${chico_collection_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `🔊SOUND ON🔊 The Amazing Spiderman 1 🕷️🕸️♥️ Andrew Garfield mask #spiderman #spidy #Marvel #marvelcosplay #marveluniverse #marvellous #spidermanfarfromhome #spidermanps4 #SpiderManNoWayHome #tobeymaguire #andrewgarfield #tomholland #spiderman4 #greengoblin #williamdafoe #onesixthscale #hottoyscollection #sideshow #hottoyscollector #inart #theamazingspiderman`,
    idPost: `${chico_collection_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `SPIDERMAN 3 🕷️🖤 SYMBIONTE (2007)`,
    idPost: `${chico_collection_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `stos personajes son CUSTOMS, no pertenecen a ninguna marca ni son comerciales, Mike Wazowski fue impreso en resina y lleva trabajo de pintura a mano posteriormente, Sully es un custom usando un body de Hulk escala 1/6 y una manta celeste de Amazon 👍🏼 cabeza, pies y manos impresos 3D y pintados a mano.`,
    idPost: `${chico_collection_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `C3PO 🤖 Custom 1/6 (aún sin terminar)`,
    idPost: `${chico_collection_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  }
];

export const chico_collection_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
