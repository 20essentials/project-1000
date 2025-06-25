import '@/components/pages/SliderPosts/SliderPosts.css';
import { user1Public, user1PublicCommonProps } from '@/publicData/user1.ts';
import { user1Private, user1PrivateCommonProps } from '@/privateData/user1.ts';
import { PostImage } from '@/components/pages/SliderPosts/PostImage.tsx';
import { PostVideo } from '@/components/pages/SliderPosts/PostVideo.tsx';
import type {
  postComonProps,
  postProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { useFollowedOrForYou } from '@/store/useFollowedOrForYou';

const FOLLOWED: [postComonProps, postProps[]][] = [
  [user1PrivateCommonProps, user1Private],
  [user1PublicCommonProps, user1Public],
];
const FOR_YOU: [postComonProps, postProps[]][] = [
  [user1PublicCommonProps, user1Public],
  [user1PrivateCommonProps, user1Private]
];

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
