import { render, screen } from '@testing-library/react';
import { Inbox } from '@/components/pages/Inbox/Inbox';
import { useCurrentUser } from '@/store/useCurrentUser';
import { useUserCreator } from '@/store/useUserCreator';
import { useFollowedAccount } from '@/store/useFollowedAccount';
import { baseURL } from '@/utils/functions/baseURL';
import type { UserType } from '@/utils/types/global';

// Mocking Zustand stores directly
useCurrentUser.setState({ user: { id: 'user-1', username: 'testuser' } as UserType });
useUserCreator.setState({
  commonProps: {
    userId: 'user-2',
    username: 'anotheruser',
    profileImageSrc: '',
    following: false,
    followers: 0,
    totalLikes: 0,
    followed: 0
  }
});
useFollowedAccount.setState({ getArrayOfFollowedAccounts: () => ['user-3'] });

// Mock baseURL to avoid loading real assets
const originalBaseURL = baseURL;
(globalThis as any).baseURL = (path: string) => path;

describe('Inbox component', () => {
  it('renders header with title and logo', () => {
    render(<Inbox />);

    const title = screen.getByText('Inbox');
    expect(title).toBeTruthy();

    const logo = screen.getByAltText('tik-tok-logo');
    expect(logo).toBeTruthy();
  });

  it('renders recommended accounts section', () => {
    render(<Inbox />);

    const recommended = screen.getByText(/Recommended accounts/i);
    expect(recommended).toBeTruthy();

    const infoImg = screen.getByAltText('Info Img');
    expect(infoImg).toBeTruthy();
  });

  it('renders list of recommended users', () => {
    render(<Inbox />);

    // Search by the section text that is always visible
    const recommendedSection = screen.getByText(/Recommended accounts/i);
    expect(recommendedSection).toBeTruthy();

    // Additionally, check the container of the ListOfUsers
    const usersContainer =
      recommendedSection.nextElementSibling ??
      recommendedSection.parentElement?.querySelector('.contenedor-of-rows');
    expect(usersContainer).toBeTruthy();
  });
});

// Restore original baseURL
(globalThis as any).baseURL = originalBaseURL;
