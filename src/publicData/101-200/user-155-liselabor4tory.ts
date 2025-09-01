import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

const username = 'liselaboratory';
const userId = '14a83ae0-b79c-4267-a563-d195dfdd2274';
const followers = 57_720;
const followed = 50;
const PREFIX =
  'https://dominicnikolai.github.io/project-301/assets/liselaboratory/';
const profileDescription = 'Juntos';
const profileImageSrc = `${PREFIX}/p3rfil.avif`;

export const liselaboratory_commonProps = generateExactlyCommonProps({
  userId,
  username,
  profileImageSrc,
  followers,
  followed,
  profileDescription
});

const ARRAY_CONTENT: ArrayContent = [
  {
    type: "image",
    arrayImages: ["f1.avif", "f2.avif", "f3.avif", "f4.avif", "f5.avif"],
    description: `Recap 1`,
    idPost: `${userId}-2a04dc1e-8c3e-324950-92d2-470487e3f8e132`
  },
  {
    type: "image",
    arrayImages: ["f6.avif", "f7.avif", "f8.avif", "f9.avif"],
    description: `Recap 2`,
    idPost: `${userId}-6f330ac0-f40c-46e5-a0e1-920b0eb4830e`
  },
  {
    type: "image",
    arrayImages: ["f10.avif", "f11.avif", "f12.avif", "f13.avif", "f14.avif", ],
    description: `Recap 3`,
    idPost: `${userId}-aa57c18b-18b7-4c02-a86f-248fa93c0b65`
  },
  {
    type: "image",
    arrayImages: ["f15.avif", "f16.avif", "f17.avif", ],
    description: `Recap 4`,
    idPost: `${userId}-d0e05c62-f2ff-45db-b24b-7d8c5d43f912`
  },
  {
    type: "image",
    arrayImages: ["f18.avif", "f19.avif", "f20.avif", ],
    description: `Recap 5`,
    idPost: `${userId}-f823c512-3f82-49cb-9a8b-64f48209c491`
  },
  {
    type: "image",
    arrayImages: ["f21.avif", "f22.avif", "f23.avif"],
    description: `Recap 6`,
    idPost: `${userId}-f823c512-3f82-49cb-9a8b-sdfsd64f48209c4913`
  }
];


export const liselaboratory_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
