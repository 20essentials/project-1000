import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'pysource';
const userId = '';
const prefixUrl = '';
const followers = 125_325;
const followed = 79;
const profileDescription = `I help you master AI and build any AI Vision solution`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `AI detects wrong product labels! Experience the evolution of UI design! This video showcases the enhancement of user interfaces for improved clarity and the seamless display of detected labels. Watch as we tackle UI challenges and achieve optimal bottle label detection! #UI_Design #User_Interface #UX_Improvement #Label_Detection #Software_Development #Coding #UI_Enhancements #Tech_Tutorial #Problem_Solving #Software_Engineering

`, /*1*/
  `AI Vision counts objects fast! See how to build object counting from scratch, with code and logic. Learn detection-based counting & more! #AIVision #objectcounting #coding #technology #programming #tech #AI #innovation`, /*2*/
  `AI Vision Breakthrough: 200+ FPS Object Detection! Join us as we demonstrate multithreaded object detection using PyTorch and TensorRT! See how increasing batch size and optimizing models dramatically boosts performance to over 200 FPS. Explore GPU and CPU usage statistics during live testing! #ObjectDetection #ObjectDetection #PyTorch #TensorRT #MachineLearning #AI #ComputerVision #GPU #Performance #BatchProcessing #DeepLearning

`, /*3*/
  `Object Tracking with Python & OpenCV
Learn object detection and tracking with Python and OpenCV! Sergio shows you the difference between detection and tracking, and how to implement it easily. Step-by-step tutorial for accurate object tracking. #objectdetection #objecttracking #pythonprogramming #opencv #computer vision #programmingtutorial #AI #machinelearning #deeplearning #coding`, /*4*/
  ``, /*5*/
  ``, /*6*/
  ``, /*7*/
  ``, /*8*/
  ``, /*9*/ 
  ``, /*10*/
  ``, /*11*/
  ``, /*12*/
  ``, /*13*/
  ``, /*14*/
  ``, /*15*/
  ``, /*16*/
  ``, /*17*/
  ``, /*18*/
  ``, /*19*/
  ``, /*20*/
];

/* prettier-ignore */
const arrayDescriptionOfImages = [
  ``, /*1*/
  ``, /*2*/
  ``, /*3*/
  ``, /*4*/
  ``, /*5*/
  ``, /*6*/
  ``, /*7*/
  ``, /*8*/
  ``, /*9*/
  ``, /*10*/
  ``, /*11*/
  ``, /*12*/
  ``, /*13*/
  ``, /*14*/
  ``, /*15*/
  ``, /*16*/
  ``, /*17*/
  ``, /*18*/
  ``, /*19*/
  ``, /*20*/
]

export const pysource_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const pysource_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const pysource_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const pysource_array_of_posts = [
  ...pysource_images,
  ...pysource_videos
];
