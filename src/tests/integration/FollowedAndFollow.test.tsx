import { render } from '@testing-library/react';
import { FollowedAndFollow } from '@/components/pages/FollowedAndFollow/FollowedAndFollow';
import { useCurrentUser } from '@/store/useCurrentUser';
import { useUserCreator } from '@/store/useUserCreator';
import { useFollowedAccount } from '@/store/useFollowedAccount';
import type {
  postComonProps,
  postProps,
  arrayOfPosts
} from '@/components/pages/SliderPosts/types.d.ts';
import * as getDataModule from '@/publicData/functions/getData';
import type { User } from '@clerk/astro/server';

const mockCommon: postComonProps = {
  userId: '456',
  username: 'jane_doe',
  profileImageSrc: '/profile.jpg',
  following: false,
  followers: 20,
  totalLikes: 200,
  followed: 5,
  profileDescription: 'demo user'
};

const mockPost: postProps = {
  videoSrc: '/video.mp4',
  arrayImages: ['/img1.png'],
  description: 'desc',
  tags: ['a'],
  dateOfPublication: '2023-01-01',
  totalViewsOfThePost: 100,
  hearts: 10,
  comments: 1,
  saved: 0,
  shared: 0,
  isSaved: false,
  isLiked: false,
  idPost: 'post-1'
};

const mockArrayOfPosts: arrayOfPosts = [[mockCommon, [mockPost]]];

beforeEach(() => {
  Object.defineProperty(getDataModule, 'FOR_YOU', {
    value: mockArrayOfPosts,
    configurable: true
  });

  useCurrentUser.setState({
    user: { id: '123', username: 'john_doe', imageUrl: '/avatar.png' } as User
  });

  useUserCreator.setState({
    commonProps: {
      username: 'john_doe',
      userId: '123',
      followers: 2,
      followed: 1
    } as postComonProps
  });

  useFollowedAccount.setState({
    getArrayOfFollowedAccounts: () => ['456'],
    existThisUserInFollowed: () => true
  });
});

afterEach(() => {
  try {
    delete (getDataModule as unknown as { FOR_YOU?: arrayOfPosts }).FOR_YOU;
  } catch {}

  useCurrentUser.setState({ user: undefined });
  useUserCreator.setState({
    commonProps: {
      username: '',
      userId: '',
      followers: 0,
      followed: 0
    } as postComonProps
  });
  useFollowedAccount.setState({
    getArrayOfFollowedAccounts: () => [],
    existThisUserInFollowed: () => false
  });
});

describe('FollowedAndFollow component basic render', () => {
  it('renders main container and header', () => {
    const { container } = render(<FollowedAndFollow />);
    const article = container.querySelector('.followed-and-follow-container');
    expect(article).toBeTruthy();
    const header = container.querySelector('.section-top');
    expect(header).toBeTruthy();
    if (header) expect(header.children.length).toBeGreaterThan(0);
  });

  it('renders ArrowLeft, title, and firework', () => {
    const { container } = render(<FollowedAndFollow />);
    const arrow = container.querySelector('.arrow-left');
    expect(arrow).toBeTruthy();
    const title = container.querySelector('.titulin');
    expect(title).toBeTruthy();
    if (title) expect(title.textContent).toBe('john_doe');
    const fireworkImg = container.querySelector('img.firework');
    expect(fireworkImg).toBeTruthy();
  });
});
