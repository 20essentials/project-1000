import { render, fireEvent } from '@testing-library/react';
import type { arrayOfPosts } from '@/components/pages/SliderPosts/types';
import { Search } from '@/components/pages/Search/Search';
import { useGlobalArrayPosts } from '@/store/useGlobalArrayPosts';
import { useCurrentPage } from '@/store/useCurrentPage';
import { useUserCreator } from '@/store/useUserCreator';

const mockPosts = [
  [
    { userId: '1', username: 'AliceUnique', profileImageSrc: '', following: false, followers: 10, totalLikes: 5, followed: 2 },
    [
      { dateOfPublication: '2025-09-05', totalViewsOfThePost: 100, hearts: 5, comments: 2, saved: 0, shared: 1, isSaved: false, isLiked: false, idPost: 'p1' }
    ]
  ],
  [
    { userId: '2', username: 'BobUnique', profileImageSrc: '', following: true, followers: 20, totalLikes: 10, followed: 5 },
    [
      { dateOfPublication: '2025-09-05', totalViewsOfThePost: 200, hearts: 15, comments: 5, saved: 2, shared: 3, isSaved: true, isLiked: true, idPost: 'p2' }
    ]
  ]
];

describe('Search Component', () => {
  beforeEach(() => {
    useGlobalArrayPosts.setState({ FOR_YOU: mockPosts as arrayOfPosts, FOLLOWED: [] });
    useCurrentPage.setState({ setCurrentPage: () => {} });
    useUserCreator.setState({ setArrayOfPosts: () => {}, setCommonProps: () => {} });
  });

  it('renders search input and list of users', () => {
    render(<Search />);
    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
    expect(input).toBeTruthy();

    const users = document.querySelectorAll('.user-search');
    expect(users.length).toBe(2);
  });

  it('filters users when typing in input', () => {
    render(<Search />);
    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'AliceUnique' } });

    const users = Array.from(document.querySelectorAll('.user-search'))
      .filter(user => user.textContent?.includes('AliceUnique'));

    expect(users.length).toBe(1);
  });

  it('clicking on a user triggers store functions', () => {
    const setCurrentPageMock = vi.fn();
    const setArrayOfPostsMock = vi.fn();
    const setCommonPropsMock = vi.fn();

    useCurrentPage.setState({ setCurrentPage: setCurrentPageMock });
    useUserCreator.setState({ setArrayOfPosts: setArrayOfPostsMock, setCommonProps: setCommonPropsMock });

    render(<Search />);
    const firstUser = document.querySelector('.user-search') as HTMLElement;
    firstUser.click();

    expect(setCurrentPageMock).toHaveBeenCalled();
    expect(setArrayOfPostsMock).toHaveBeenCalled();
    expect(setCommonPropsMock).toHaveBeenCalled();
  });
});
