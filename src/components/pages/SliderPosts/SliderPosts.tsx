import '@/components/pages/SliderPosts/SliderPosts.css';
import { PostImage } from '@/components/pages/SliderPosts/PostImage/PostImage';
import { PostVideo } from '@/components/pages/SliderPosts/PostVideo/PostVideo';
import { useFollowedOrForYou } from '@/store/useFollowedOrForYou';
import { useEffect, useRef } from 'react';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import { useMemo } from 'react';
import { useGlobalArrayPosts } from '@/store/useGlobalArrayPosts';
import { useSwipeVerticalScroll } from '@/hooks/useSwipeVerticalScroll';
import { usetGetDataParamPostVideoOrImages } from '@/hooks/useUpdateUrlParamsPostVideoOrImage';
import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';
import { useUserCreator } from '@/store/useUserCreator';
import { useUserHasSeenPostOrProfileFromUrl } from '@/store/useUserHasSeenPostOrProfileFromUrl';

export function SliderPosts() {
  const setCurrentPage = useCurrentPage(s => s.setCurrentPage);
  const setArrayOfPosts = useUserCreator(state => state.setArrayOfPosts);
  const setCommonProps = useUserCreator(state => state.setCommonProps);

  const setUserHasSeenPostOrProfileFromUrl = useUserHasSeenPostOrProfileFromUrl(
    state => state.setUserHasSeenPostOrProfileFromUrl
  );
  const userHasSeenPostOrProfileFromUrl = useUserHasSeenPostOrProfileFromUrl(
    state => state.userHasSeenPostOrProfileFromUrl
  );

  const { dataFromUrl, weMustRenderAUserProfile, userId } =
    usetGetDataParamPostVideoOrImages();

  const isForYou = useFollowedOrForYou(state => state.isForYou);
  const FOLLOWED = useGlobalArrayPosts(state => state.FOLLOWED);
  const FOR_YOU = useGlobalArrayPosts(state => state.FOR_YOU);
  const ALL_POSTS = isForYou ? FOR_YOU : FOLLOWED;

  useEffect(() => {
    if (weMustRenderAUserProfile && userId && !userHasSeenPostOrProfileFromUrl) {
      setUserHasSeenPostOrProfileFromUrl({
        userHasSeenPostOrProfileFromUrl: true
      });
      const currentUser = ALL_POSTS.find(user => user[0].userId === userId);
      if (currentUser) {
        const [commonPropsUser, arrayPosts] = currentUser || ALL_POSTS[0];
        setCommonProps(commonPropsUser);
        setArrayOfPosts(arrayPosts);
        setCurrentPage(IS_ACTIVE_BUTTON.PROFILE_CREATOR);
      }
    }
  }, [userHasSeenPostOrProfileFromUrl]);

  const sliderRef = useRef<HTMLDivElement>(null);
  const limit = useLimitOfPost(state => state.limit);
  const resetLimit = useLimitOfPost(state => state.resetLimit);
  const reRenderFollowed = useFollowedOrForYou(state => state.reRenderFollowed);
  const reRenderForYou = useFollowedOrForYou(state => state.reRenderForYou);
  const flattenedPosts = useMemo(() => {
    const allPostsShuffled = ALL_POSTS.flatMap(([userCommonProps, userPosts]) =>
      userPosts.map(post => ({ ...post, ...userCommonProps }))
    ).toSorted(() => Math.random() - 0.5);

    const uniquePosts = Array.from(
      new Map(allPostsShuffled.map(post => [post.idPost, post])).values()
    );

    const shuffled = uniquePosts.toSorted(() => Math.random() - 0.5);
    if (!userHasSeenPostOrProfileFromUrl) {
      setUserHasSeenPostOrProfileFromUrl({
        userHasSeenPostOrProfileFromUrl: true
      });
      return dataFromUrl ? [dataFromUrl, ...shuffled] : shuffled;
    }

    return shuffled;
  }, [ALL_POSTS, reRenderFollowed, reRenderForYou]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTop = 0;
    }

    return () => {
      resetLimit();
    };
  }, [isForYou]);

  const postsToShow = useMemo(
    () => flattenedPosts.slice(0, limit),
    [limit, flattenedPosts]
  );

  useEffect(() => {
    return () => {
      resetLimit();
    };
  }, []);

  useSwipeVerticalScroll(sliderRef);

  return (
    <article className='slider-posts'>
      <aside className='slider' ref={sliderRef}>
        {postsToShow.map((post, idx) => {
          const key = `post-${idx}`;

          return post.videoSrc ? (
            <PostVideo idx={idx + 1} key={key} {...post} />
          ) : (
            <PostImage idx={idx + 1} key={key} {...post} />
          );
        })}
      </aside>
    </article>
  );
}
