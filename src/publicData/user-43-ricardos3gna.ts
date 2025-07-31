import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

//falta userId, profilesrc, prefix, profileDescription

export const riccardosegna_commonProps = generateExactlyCommonProps({
  userId: '',
  username: 'riccardosegna',
  profileImageSrc: '',
  following: false,
  followers: 314_720,
  followed: 50,
  profileDescription: 'REPORTER - CREATOR'
});

const PREFIX = '';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `É famoso? #lavoro #jobs #famiglia #genitori #carriera #domande #risposte`,
    idPost: `${riccardosegna_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `L’Ultimo è uscito con Tom Cruise 😱 #personaggiopubblico #vip #incontro #domande #risposte`,
    idPost: `${riccardosegna_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `Sempre storie molto interessanti 👀 #lavoro #jobs #carriera #famiglia #genitori #domande #risposte`,
    idPost: `${riccardosegna_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `La seconda è famosa👀, chi la riconosce? #risparmio #investire #comprare #soldi #domande #risposte`,
    idPost: `${riccardosegna_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `L’Ultimo e’ famoso? #abbigliamento #outfit #brand #moda #soldi #domande #risposte`,
    idPost: `${riccardosegna_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `L’ultimo per diventare Pilota 60/100K di scuola 😱 #lavoro #jobs #famiglia #genitori #carriera #domande #risposte`,
    idPost: `${riccardosegna_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `L’ultimo 1 volta l’anno 😱 #parrucchiere #capelli #hairstyle #domande #risposte`,
    idPost: `${riccardosegna_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `Nessuno sotto i 100€? 😱 #scarpe #sneakers #acquisto #comprare #domande #risposte`,
    idPost: `${riccardosegna_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `Sempre storie molto Interessanti #lavoro #jobs #famiglia #genitori #carriera #domande #risposte`,
    idPost: `${riccardosegna_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `La Prima non ha Incontrato nessuno #personaggiopubblico #vip #incontro #domande #risposte`,
    idPost: `${riccardosegna_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    description: `Due volte Desigual 😱 #brand #abbigliamento #moda #domande #risposte`,
    idPost: `${riccardosegna_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    description: `Sempre storie Molto Interessanti #lavoro #jobs #carriera #genitori #famiglia #domande #risposte`,
    idPost: `${riccardosegna_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  },
  {
    type: 'video',
    videoSrc: 'v13.mp4',
    description: `Che dite, sono prezzi ragionevoli? #milano #lombardia #affitto #immobiliare #immobile #casa #appartamento #domande #risposte`,
    idPost: `${riccardosegna_commonProps.userId}-a6a20e67-0771-4112-a915-d4db596daef6`
  },
  {
    type: 'video',
    videoSrc: 'v14.mp4',
    description: `L’Ultima con la casa a Capri 😱#vacanza #travel #viaggio #mare #soldi #domande #risposte`,
    idPost: `${riccardosegna_commonProps.userId}-43973d48-d59b-4dc7-aaa1-c5e69ea055f7`
  },
  {
    type: 'video',
    videoSrc: 'v15.mp4',
    description: `L’Ultima è la mamma di un Calciatore della Roma 😱 #abbigliamento #outfit #brand #moda #soldi #domande #risposte`,
    idPost: `${riccardosegna_commonProps.userId}-9f278864-6362-4e81-a406-fc99443828a1`
  },
  {
    type: 'video',
    videoSrc: 'v16.mp4',
    description: `Solo l’ultima ho indovinato #lavoro #jobs #carriera #domande #risposte`,
    idPost: `${riccardosegna_commonProps.userId}-e8023a99-ae84-46f0-9f6f-133d9cf5b741`
  }
];

export const riccardosegna_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
