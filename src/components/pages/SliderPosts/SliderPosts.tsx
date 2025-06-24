import '@/components/pages/SliderPosts/SliderPosts.css';
import { user1Public, user1PublicCommonProps } from '@/publicData/user1.ts';
import { user1Private, user1PrivateCommonProps } from '@/privateData/user1.ts';

type currentPostProps = {
  videoSrc?: string;
  arrayImages?: string[];
  description: string;
  tags: string[];
  dateOfPublication: string;
  totalViewsOfThePost: number;
  hearts: number;
  comments: number;
  saved: number;
  shared: number;
  isSaved: boolean;
};

export function PostImage(props: currentPostProps) {
  const {
    arrayImages,
    description,
    tags,
    dateOfPublication,
    totalViewsOfThePost,
    hearts,
    comments,
    saved,
    shared
  } = props;
  return (
    <article className='post-image'>
      {arrayImages?.map((src, i) => (
        <section key={i} className='container-img-post'>
          <img src={src} alt='image' />
        </section>
      ))}
    </article>
  );
}

export function PostVideo(props: currentPostProps) {
  const {
    videoSrc,
    description,
    tags,
    dateOfPublication,
    totalViewsOfThePost,
    hearts,
    comments,
    saved,
    shared
  } = props;

  return <video src={videoSrc} className='post-video'></video>;
}

export function SliderPosts() {
  return (
    <article className='slider-posts'>
      <aside className='slider'>
        {user1Public.map(props => {
          const {
            userId,
            username,
            profileImageSrc,
            following,
            followers,
            totalLikes,
            followed,
            profileDescription
          } = user1PublicCommonProps;
          const { videoSrc = null, arrayImages = null } =
            props as currentPostProps;

          if (videoSrc) {
            return <PostVideo {...props} />;
          }

          return <PostImage {...props} />;
        })}
        {user1Private.map(props => {
          const {
            userId,
            username,
            profileImageSrc,
            following,
            followers,
            totalLikes,
            followed,
            profileDescription
          } = user1PrivateCommonProps;
          const { videoSrc = null, arrayImages = null } =
            props as currentPostProps;

          if (videoSrc) {
            return <PostVideo {...props} />;
          }

          return <PostImage {...props} />;
        })}
      </aside>
    </article>
  );
}
