import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

//falta userId, profilesrc, prefix, profileDescription

export const soy_delishus_commonProps = generateExactlyCommonProps({
  userId: '3d5a59e2-bb83-4bdd-bec6-119817a3146d',
  username: 'soy_delishus',
  profileImageSrc:
    'https://dominicnikolai.github.io/project-223/assets/soyd3lishus/p3rfil.avif',
  following: false,
  followers: 7_320_740,
  followed: 27,
  profileDescription: 'Todo lo que ves aquí no solo se ve rico, sabe delishus'
});

const PREFIX = 'https://dominicnikolai.github.io/project-223/assets/soyd3lishus/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `¡Es hoy! Comienza a preparar este delicioso pollo tipo #Kentucky al #EstiloDelishus #cocinacondelishus #SaboresTikTok #TalentoTikTok`,
    idPost: `${soy_delishus_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `Qué tal unas bombitas de #chocolate #rico #delishus #fyp #foodlover #foodlover #foodporn #parati #food #choco`,
    idPost: `${soy_delishus_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `Dale un toque especial a las #mortadelas con esta receta deliciosa, el resultado final te va a encantar… 🧀😋 #cocinacondelishus #delishus`,
    idPost: `${soy_delishus_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `¡BEBIDA REFRESCANTE! 👌☀️ Esto es lo que se debe tomar por en días de calor.`,
    idPost: `${soy_delishus_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `Cualquier excusa es buena para echarte una de estas bebidas... 🤤 🍇 #fyp #fypシ #delishus #drinks #drinktok #drinksoftiktok #cocinacondelishus #aprendeentiktok #recetas #receta #aprendentikok #cocinando #cocinandoando #atreveteaprobar`,
    idPost: `${soy_delishus_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `Mezcla ¡HUEVO+CAFÉ! y obtendras el mejor postre que podrás probar.`,
    idPost: `${soy_delishus_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `¿Atole de gansito? 👌😎 Así es, esta deliciosa combinación te va a encantar… #cocinacondelishus #delishus #gansito #atole #aprendeentiktok #fyp #cocinafacil #recetafacil`,
    idPost: `${soy_delishus_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `Refréscate con este #Heladodemango Sabe #Delishus #cocinacondelishus #postre #helado`,
    idPost: `${soy_delishus_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `¡DEDOS DE QUESO! 💎 Esta receta es la gema perdida del mundo de Steven Universe`,
    idPost: `${soy_delishus_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `¡BEBIDA PARA CELEBRAR! 🤤🍓 Ve sacando el bacacho porque seguro se te va a antojar...`,
    idPost: `${soy_delishus_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    description: `Este delicioso #FlanNapolitano es el #postre favorito y súper fácil de preparar #cocinacondelishus #SaboresTikTok #TalentoTikTok`,
    idPost: `${soy_delishus_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    description: `La combinación más #delishus la tienes con estas #palomitas y #galletasdechocolate Disfruta 🍿🍪 #cocinacondelishus #Delishers`,
    idPost: `${soy_delishus_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  }
];

export const soy_delishus_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
