import { render, screen } from '@testing-library/react';
import { ProfileButton } from '@/components/NavBarBottom/ProfileButton';
import { useCurrentUser } from '@/store/useCurrentUser';
import { useCurrentPage } from '@/store/useCurrentPage';
import { useUserCreator } from '@/store/useUserCreator';
import { useUserSavedPosts } from '@/store/useUserSavedPosts';
import type { User } from '@clerk/astro/server';

beforeEach(() => {
  useCurrentUser.setState({
    user: { id: '1', username: 'Batman', imageUrl: 'img.png' } as User
  });
  useCurrentPage.setState({ currenPage: 0, setCurrentPage: () => {} });
  useUserCreator.setState({
    setArrayOfPosts: () => {},
    setCommonProps: () => {}
  });
  useUserSavedPosts.setState({
    setSavePostsOfTheUser: () => {},
    arrayOfSavedPostOfTheUser: []
  });
});

describe('ProfileButton without clicks', () => {
  it('renders the profile button with SVG and span', () => {
    render(<ProfileButton />);

    const aside = document.querySelector('.wrapper-profile-user');
    expect(aside).toBeTruthy();

    const svg = aside?.querySelector('svg');
    expect(svg).toBeTruthy();

    const span = screen.getByText('Profile');
    expect(span).toBeTruthy();
  });

  it('renders null when user is null', () => {
    useCurrentUser.setState({ user: null });
    render(<ProfileButton />);

    const aside = document.querySelector('.wrapper-profile-user');
    expect(aside).toBeNull();
  });
});
