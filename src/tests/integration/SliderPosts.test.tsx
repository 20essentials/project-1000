import { render } from '@testing-library/react';
import { SliderPosts } from '@/components/pages/SliderPosts/SliderPosts';
import { useGlobalArrayPosts } from '@/store/useGlobalArrayPosts';
import { useFollowedOrForYou } from '@/store/useFollowedOrForYou';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import { useUserHasSeenPostOrProfileFromUrl } from '@/store/useUserHasSeenPostOrProfileFromUrl';

type postComonProps = {
  userId: string;
  username: string;
  profileImageSrc: string;
  following: boolean;
  followers: number;
  totalLikes: number;
  followed: number;
  profileDescription?: string;
};

type postProps = {
  videoSrc?: string;
  arrayImages?: string[];
  description?: string;
  tags?: string[];
  dateOfPublication: string;
  totalViewsOfThePost: number;
  hearts: number;
  comments: number;
  saved: number;
  shared: number;
  isSaved: boolean;
  isLiked: boolean;
  idPost: string;
};

const commonProps: postComonProps = {
  userId: 'u-1',
  username: 'john',
  profileImageSrc: '/img/john.png',
  following: false,
  followers: 3,
  totalLikes: 7,
  followed: 1,
  profileDescription: 'desc'
};

const postImage: postProps = {
  idPost: 'p-1',
  dateOfPublication: '2025-09-01',
  totalViewsOfThePost: 10,
  hearts: 1,
  comments: 0,
  saved: 0,
  shared: 0,
  isSaved: false,
  isLiked: false,
  arrayImages: ['/img/x.png']
};

beforeEach(() => {
  useGlobalArrayPosts.setState({
    FOLLOWED: [],
    FOR_YOU: [[commonProps, [postImage]]]
  });

  useFollowedOrForYou.setState({
    isForYou: true,
    reRenderForYou: false,
    reRenderFollowed: false
  });

  useLimitOfPost.setState({
    limit: 5,
    resetLimit: () => {}
  });

  useUserHasSeenPostOrProfileFromUrl.setState({
    userHasSeenPostOrProfileFromUrl: true,
    setUserHasSeenPostOrProfileFromUrl: () => {}
  });
});

test('renders slider with at least one post', () => {
  render(<SliderPosts />);
  const slider = document.querySelector('.slider') as HTMLElement | null;
  expect(slider?.children.length ?? 0).toBeGreaterThanOrEqual(1);
});
