import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

export const salary_transparent_street_commonProps = generateExactlyCommonProps({
  userId: '81198d94-4e76-4116-99a5-ef82e9d2ba7b',
  username: 'salary_transparent_street',
  profileImageSrc:
    'https://dominicnikolai.github.io/project-226/assets/sal4ry-tr4nsparent-street/p3rfil.avif',
  following: false,
  followers: 1_500_720,
  followed: 50,
  profileDescription: 'How much do you make?'
});

const PREFIX =
  'https://dominicnikolai.github.io/project-226/assets/sal4ry-tr4nsparent-street/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `Old Town, Alexandria, VA📍Tell us which cities we should hit on our nationwide tour!👇 #salarytransparency #salarytransparentstreet #paytransparency #equalpay #closethepaygap #diversityandinclusion`,
    idPost: `${salary_transparent_street_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `#CloudEngineers in Atlanta, GA📍#salarytransparentstreet #salarytransparency #paytransparency #howmuchdoyoumake #cloudengineer #cloudengineersalary #techjob #techsalary #engineerjob`,
    idPost: `${salary_transparent_street_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `Philadelphia, PA📍(with a wholesome sprinkle from DC 🌸) #salarytransparency #salarytransparentstreet #paytransparency #equalpay #closethewagegap #diversityandinclusion`,
    idPost: `${salary_transparent_street_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `#travelnurse based in California📍#salarytransparentstreet #salarytransparent #paytransparency #equalpay #diversityandinclusion #dei #talkaboutmoney #travelnursepay #travelnursesalary #healthcarejob #nurse #healthcare`,
    idPost: `${salary_transparent_street_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `How much do Software Engineers make? #salarytransparentstreet compilation!`,
    idPost: `${salary_transparent_street_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `#Chiropractor and #CardiovascularPerfusionist in Portland, OR📍#salarytransparentstreet #salarytransparency #paytransparency #howmuchdoyoumake #talkaboutyourpay #chiropractorjob #chiropractorsalary`,
    idPost: `${salary_transparent_street_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `#CyberSecurityAnalyst making $150k in Washington, DC📍!`,
    idPost: `${salary_transparent_street_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `#DataScientist in Denver, CO📍#salarytransparentstreet #salarytransparency #paytransparency #howmuchdoyoumake #talkaboutyourpay #techjob #datascientistjob #datascientistsalary`,
    idPost: `${salary_transparent_street_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `#SoftwareEngineer in Seattle, WA📍#salarytransparentstreet #salarytransparency #paytransparency #howmuchdoyoumake #softwareengineersalary #techjob #techsalary`,
    idPost: `${salary_transparent_street_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `The Wharf, Washington, D.C.📍#salarytransparentstreet #salarytransparency #paytransparency #equalpay #closethepaygap #talkaboutyourpay #diversityandinclusion #thewharf #washingtondc`,
    idPost: `${salary_transparent_street_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    description: `Thanks to teamblind for helping us showcase different tech salaries in San Francisco, CA! If you'd like to make sure you're being paid fairly, be sure to use Blind's Total Compensation Tool at the link in our Stan store. #TeamBlindPartner #salarytransparentstreet #salarytransparency #paytransparency #techindustry #techsalaries #salariesintech #techpay #techsalary #howmuchdoyoumake`,
    idPost: `${salary_transparent_street_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    description: `How much does a Senior Federal Technical #AccountManager make in Washington, DC📍? Watch the full interview on YouTube to learn which cybersecurity certifications she recommends, how to increase your salary internally by job-hopping, and how to get a federal job without a security clearance. If you have any questions, reach out to Symoné B. | GovTech! #salarytransparentstreet #salarytransparency #technicalaccountmanager #techjob #federaltechjob #cybersecurityjob #comptia`,
    idPost: `${salary_transparent_street_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  }
];

export const salary_transparent_street_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
