//@ts-nocheck
import { render, screen, fireEvent } from '@testing-library/react';
import { ArrayOfNavbarStories } from '@/components/pages/Inbox/ArrayOfNavbarStories';
import { useCurrentPage, IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';
import { usePostsOftheStory } from '@/store/usePostsOfTheStory';
import { useUserCreator } from '@/store/useUserCreator';
import { normalizeUsername } from '@/utils/functions/normalizeUsername';

const mockStories = [
  {
    profileImageSrc: 'image1.jpg',
    userId: 'u1',
    username: 'Alice',
    story: { postId: 'p1' }
  },
  {
    profileImageSrc: 'image2.jpg',
    userId: 'u2',
    username: 'Bob',
    story: { postId: 'p2' }
  }
];

describe('ArrayOfNavbarStories', () => {
  beforeEach(() => {
    // Reset Zustand stores
    useCurrentPage.setState({
      currentPage: 0,
      setCurrentPage: (page: number) => {
        useCurrentPage.setState({ currentPage: page });
      }
    });

    usePostsOftheStory.setState({
      arrayOfStoryPosts: [],
      setArrayOfStoryPosts: payload => {
        usePostsOftheStory.setState({
          arrayOfStoryPosts: payload.arrayOfStoryPosts
        });
      }
    });

    useUserCreator.setState({
      indexOfPost: 0,
      setIndexOfPost: index => {
        useUserCreator.setState({ indexOfPost: index });
      }
    });
  });

  it('renders all stories with normalized usernames', () => {
    render(
      <div className='navbar-of-histories-inner'>
        <ArrayOfNavbarStories arrayOfNavBarHistories={mockStories} />
      </div>
    );

    mockStories.forEach(story => {
      const normalized = normalizeUsername(story.username, 8);
      expect(screen.getByText(normalized)).toBeDefined();
    });
  });

  it('updates the story posts array on mount', () => {
    render(
      <div className='navbar-of-histories-inner'>
        <ArrayOfNavbarStories arrayOfNavBarHistories={mockStories} />
      </div>
    );

    const expectedArray = mockStories.map(el => ({ ...el, ...el.story }));
    expect(usePostsOftheStory.getState().arrayOfStoryPosts).toEqual(
      expectedArray
    );
  });

  it('sets index and changes page when a story is clicked', () => {
    render(
      <div className='navbar-of-histories-inner'>
        <ArrayOfNavbarStories arrayOfNavBarHistories={mockStories} />
      </div>
    );

    // The click must be on the <article> element
    const firstStoryArticle = screen.getAllByRole('img')[0].closest('article');
    if (!firstStoryArticle) throw new Error('Story article not found');

    fireEvent.click(firstStoryArticle);

    expect(useUserCreator.getState().indexOfPost).toBe(0);
    expect(useCurrentPage.getState().currentPage).toBe(IS_ACTIVE_BUTTON.STORY);
  });
});
