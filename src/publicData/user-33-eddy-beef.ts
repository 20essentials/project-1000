import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

//falta userId, profilesrc, prefix, profileDescription

export const eddy_beef_commonProps = generateExactlyCommonProps({
  userId: '',
  username: 'eddy_beef',
  profileImageSrc: '',
  following: false,
  followers: 811_720,
  followed: 212,
  profileDescription: 'Cosa fai nella vita?'
});

const PREFIX = '';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `Mi ha invitato su un jet privato vai a vedere se non ci credi #luxury #money #supercar`,
    idPost: `${eddy_beef_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `Quella dietro mi sembra la ragazza di Ale Della Giusta #luxury #money##supercar`,
    idPost: `${eddy_beef_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `Qualcuno riesce a riconoscerlo 😅#luxury #money #supercar`,
    idPost: `${eddy_beef_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `Giuro sto ancora cercando di capire chi può essere 😅 #luxury #money #supercar`,
    idPost: `${eddy_beef_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `La sua lambo #luxury #money #supercar`,
    idPost: `${eddy_beef_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `Proprietari di supercar di mondi diversi #luxury #money #super`,
    idPost: `${eddy_beef_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `Influencer che compra le supercar usate 🤣 #luxury #money #supercar`,
    idPost: `${eddy_beef_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `Milionario in aston martin mi dice dove investe #luxury #money #car`,
    idPost: `${eddy_beef_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `Due proprietari di lamborghini danno consigli su dove investire #luxury #money #supercar`,
    idPost: `${eddy_beef_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `Cosa fai nella vita er avere questa macchina in veneto #luxury #money #supercar`,
    idPost: `${eddy_beef_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    description: `Cosa fai nella vita per avere quella ferrari con racconto di come ce l’ha fatta #luxury #money #supercar`,
    idPost: `${eddy_beef_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    description: `In realta la canzone la conoscevo 😅 #luxury #money #supercar`,
    idPost: `${eddy_beef_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  }
];

export const eddy_beef_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
