import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

//falta userId, profilesrc, prefix, profileDescription

export const arte_settima_commonProps = generateExactlyCommonProps({
  userId: '',
  username: 'arte_settima',
  profileImageSrc: '',
  following: false,
  followers: 122_720,
  totalLikes: 7_328_220,
  followed: 82,
  profileDescription: 'MASTERS OF CINEMA'
});

const PREFIX = '';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `Metropolis di Fritz Lang. Realizzato nel 1927, ambientato nel 2026. 
  `,
    tags: [
      'artesettima',
      'metropolis',
      'metropolisfrizlang',
      'fritzlang',
      'cinema',
      'CinemaTok'
    ],
    idPost: `${arte_settima_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `Lady Vendetta di Park Chan-wook incontra Meet the Grahams di Kendrick Lamar. Il resto è rancore, risentimento, efferatezza.
Dai amore a questo video perché vorrei farne altri simili.`,
    tags: [
      'artesettima',
      'ladyvendetta',
      'parkchanwook',
      'kendricklamar',
      'cinematok'
    ],
    idPost: `${arte_settima_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `Questo suono = Pierrot le fou di Jean-luc Godard (1966). Senza molti dubbi. `,
    tags: [
      'artesettima',
      'pierrotlefou',
      'cinema',
      'cinemafrancais',
      'davedere',
      'jeanlucgodard',
      'CinemaTok'
    ],
    idPost: `${arte_settima_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `Che il mondo di Tim Burton continui a colorare il nostro immaginario. A 36 anni di distanza, Michael Keaton torna nei panni di Beetlejuice nel sequel di uno dei classici immortali della filmografia di Burton`,
    tags: [
      'artesettima',
      'beetlejuice',
      'timburton',
      'michaelkeaton',
      'winonaryder'
    ],
    idPost: `${arte_settima_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `Trainspotting di Danny Boyle, 1996. Scegliete la vita, o diventate un manifesto di controcultura, forsennato, ritmato, affannato, alienato da una dolce e mortale dipendenza.
Abbiamo intervistato il regista, Danny Boyle, autore di alcuni veri e propri cult della nostra generazione, e al cinema dal 18 giugno con 28 anni dopo. È stato incredibile.`,
    tags: ['artesettima', 'trainspotting', 'dannyboyle', 'ewanmcgregor'],
    idPost: `${arte_settima_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `1900 di Bernardo Bertolucci, 1976. Il più grande affresco sulla storia d'Italia nella prima metà del ventesimo secolo, dal sorgere del '900 alla liberazione dal f4scismo`,
    tags: ['artesettima', '1900', 'novecento', 'bernardobertolucci'],
    idPost: `${arte_settima_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `Ridley Scott con Blade Runner non ha solo immaginato il futuro - lo ha messo a nudo.
Un mondo iper-tecnologico e profondamente stanco, dove la linea tra umano e artificiale si dissolve in una pioggia acida e in un neon sempre acceso.
È una favola noir sul declino dell’empatia, sul capitalismo che costruisce esseri senz’anima per poi condannarli, sull’identità come prodotto di consumo.`,
    tags: ['artesettima', 'ridleyscott', 'bladerunner', 'cinema'],
    idPost: `${arte_settima_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `Borghesi che non riescono a uscire dal loro salotto borghese.
L'angelo sterminatore (1962) di Luis Buñuel, l'opera più surrealista tra le sue opere più surrealiste.`,
    tags: ['artesettima', 'luisbuñuel', 'langelosterminatore', 'cinema'],
    idPost: `${arte_settima_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    tags: ['artesettima', '2001aspaceodyssey', 'stanleykubrick'],
    description: `2001: A Space Odyssey by Moroder. Buona visione #artesettima #2001aspaceodyssey #2001odisseanellospazio
`,
    idPost: `${arte_settima_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    tags: ['artesettima', 'wimwenders', 'cinematedesco', 'nuovocinematedesco'],
    description: `Lo stato delle cose di Wim Wenders, 1982. Col rischio di essere fuorvianti, il suo personale Otto e mezzo. 
`,
    idPost: `${arte_settima_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  }
];

export const arte_settima_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
