import { render } from '@testing-library/react';
import React from 'react';
import { ProfileTop } from '@/components/pages/Profile/ProfileTop';
import { useUserCreator } from '@/store/useUserCreator';
import { useFollowedAccount } from '@/store/useFollowedAccount';
import { useUserCreatedPosts } from '@/store/useUserCreatedPosts';

describe('ProfileTop', () => {
  beforeEach(() => {
    useUserCreator.setState({
      commonProps: {
        userId: '1',
        username: 'testuser',
        profileImageSrc: 'profile.png',
        following: false,
        followers: 100,
        totalLikes: 0,
        followed: 10,
        profileDescription: 'Test description',
      },
    });

    useFollowedAccount.setState({
      arrayOfFollowedAccounts: ['2', '3', '4'],
    });

    useUserCreatedPosts.setState({
      arrayOfCreatedPostOfTheUser: [
        {
          dateOfPublication: '2025-09-05',
          totalViewsOfThePost: 50,
          hearts: 25,
          comments: 5,
          saved: 2,
          shared: 1,
          isSaved: false,
          isLiked: true,
          idPost: 'p1',
        },
        {
          dateOfPublication: '2025-09-04',
          totalViewsOfThePost: 30,
          hearts: 10,
          comments: 1,
          saved: 0,
          shared: 0,
          isSaved: false,
          isLiked: false,
          idPost: 'p2',
        },
      ],
    });
  });

  it('renders ProfileTop structure correctly', () => {
    const slideHorizontalRef = React.createRef<HTMLElement>();
    const { container } = render(<ProfileTop slideHorizontalRef={slideHorizontalRef} />);

    const profileTop = container.querySelector('.profile-creator-top');
    if (!profileTop) throw new Error('ProfileTop container missing');

    const profileImage = profileTop.querySelector('.profile-of-the-user') as HTMLImageElement;
    if (!profileImage) throw new Error('Profile image missing');
    if (!profileImage.src.includes('profile.png')) throw new Error('Profile image src incorrect');
    if (profileImage.alt !== 'testuser') throw new Error('Profile image alt incorrect');

    const usernameEl = profileTop.querySelector('.name-of-the-user');
    if (!usernameEl) throw new Error('Username element missing');
    if (!usernameEl.textContent?.includes('testuser')) throw new Error('Username text incorrect');

    const containerDataUser = profileTop.querySelector('.container-data-user');
    if (!containerDataUser) throw new Error('Container data user missing');
    if (containerDataUser.children.length < 3) throw new Error('Container data user children incomplete');

    const likesArticle = containerDataUser.querySelector('.tab-data');
    if (!likesArticle) throw new Error('Likes article missing');
    if (!likesArticle.children.length) throw new Error('Likes article has no children');
    if (!likesArticle.textContent || !likesArticle.textContent.trim()) throw new Error('Likes article text is empty');

    const arrowLeft = profileTop.querySelector('.arrow-left');
    if (!arrowLeft) throw new Error('ArrowLeft component missing');

    const navVideosOrSaved = profileTop.querySelector('aside');
    if (!navVideosOrSaved || navVideosOrSaved.children.length < 1) throw new Error('NavVideosOrSaved component missing');

    const numOfFollowedEl = containerDataUser.querySelector('.num');
    if (!numOfFollowedEl) throw new Error('NumFollowed element missing');
    if (!numOfFollowedEl.textContent || !numOfFollowedEl.textContent.trim()) throw new Error('NumFollowed text is empty');

    const numOfFollowersEl = containerDataUser.querySelector('.desc');
    if (!numOfFollowersEl) throw new Error('NumFollowers element missing');
    if (!numOfFollowersEl.textContent || !numOfFollowersEl.textContent.trim()) throw new Error('NumFollowers text is empty');
  });
});
