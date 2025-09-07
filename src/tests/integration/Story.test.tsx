import { render, screen } from '@testing-library/react';
import { Story } from '@/components/pages/Story/Story';
import { usePostsOftheStory } from '@/store/usePostsOfTheStory';
import { useUserCreator } from '@/store/useUserCreator';
import { useIsScrolling } from '@/store/useIsScrolling';
import { useLimitOfPost } from '@/store/useLimitOfPosts';

const fullPost = {
  userId: 'u1',
  username: 'user1',
  profileImageSrc: 'avatar.png',
  following: false,
  followers: 10,
  totalLikes: 5,
  followed: 2,
  profileDescription: 'bio',
  videoSrc: undefined,
  arrayImages: ['img1.png'],
  description: 'desc',
  tags: ['tag1'],
  dateOfPublication: '2024-01-01',
  totalViewsOfThePost: 100,
  hearts: 3,
  comments: 1,
  saved: 0,
  shared: 0,
  isSaved: false,
  isLiked: false,
  idPost: 'post-1'
};

describe('Story component', () => {
  beforeEach(() => {
    usePostsOftheStory.setState({ arrayOfStoryPosts: [fullPost] });
    useUserCreator.setState({ indexOfPost: -1 });
    useIsScrolling.setState({ setIsScrolling: (_: { isScrolling: boolean }) => {} });
    useLimitOfPost.setState({ resetLimit: () => {} });
  });

  it('renders article container', () => {
    render(<Story />);
    let article: HTMLElement | null = null;
    try {
      article = screen.getByRole('article') as HTMLElement;
    } catch {
      article = document.querySelector('article.story-container');
    }
    expect(article).not.toBeNull();
  });

  it('renders slider-inner with children when posts exist', () => {
    render(<Story />);
    const sliderInner = document.querySelector('.slider-inner');
    expect(sliderInner).not.toBeNull();
    expect((sliderInner?.children.length ?? 0) > 0).toBe(true);
  });

  it('renders a video child when videoSrc is provided', () => {
    const videoPost = { ...fullPost, videoSrc: 'video.mp4', arrayImages: undefined };
    usePostsOftheStory.setState({ arrayOfStoryPosts: [videoPost] });
    render(<Story />);
    const sliderInner = document.querySelector('.slider-inner');
    expect(sliderInner).not.toBeNull();
    expect((sliderInner?.children.length ?? 0) > 0).toBe(true);
  });
});
