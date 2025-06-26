import '@/components/pages/SliderPosts/SliderPosts.css';
import { PostImage } from '@/components/pages/SliderPosts/PostImage.tsx';
import { PostVideo } from '@/components/pages/SliderPosts/PostVideo.tsx';
import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';
import { useFollowedOrForYou } from '@/store/useFollowedOrForYou';
import { PRIVATE_DATA } from '@/privateData/amPrivateData';
import { PUBLIC_DATA } from '@/publicData/amPublicData';

const FOLLOWED: arrayOfPosts = [...PUBLIC_DATA];
const FOR_YOU: arrayOfPosts = [...PRIVATE_DATA];

export function SliderPosts() {
  const isForYou = useFollowedOrForYou(state => state.isForYou);
  const ALL_POSTS = isForYou ? FOR_YOU : FOLLOWED;

  return (
    <article className='slider-posts'>
      <aside className='slider'>
        {ALL_POSTS.map(([userCommonProps, userPosts], userIdx) =>
          userPosts.map((post, postIdx) => {
            const key = `${userIdx}-${postIdx}`;
            const postWithUser = {
              ...post,
              ...userCommonProps
            };

            return post.videoSrc ? (
              <PostVideo key={key} {...postWithUser} />
            ) : (
              <PostImage key={key} {...postWithUser} />
            );
          })
        )}
      </aside>
    </article>
  );
}
