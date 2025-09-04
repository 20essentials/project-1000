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
  // cleanup FOR_YOU
  try {
    // delete only if configurable
    delete (getDataModule as any).FOR_YOU;
  } catch {
    // ignore
  }

  // reset zustand stores to safe defaults
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


describe('FollowedAndFollow - className targets', () => {
  it("renders article with class 'followed-and-follow-container' and header with 'section-top'", () => {
    const { container } = render(<FollowedAndFollow />);

    const article = container.querySelector('.followed-and-follow-container');
    expect(article).toBeTruthy();

    const header = container.querySelector('.section-top');
    expect(header).toBeTruthy();
  });

  it("renders ArrowLeft element with class 'arrow-left', title with class 'titulin' and firework image with class 'firework'", () => {
    const { container } = render(<FollowedAndFollow />);

    const arrow = container.querySelector('.arrow-left');
    expect(arrow).toBeTruthy();

    const title = container.querySelector('.titulin');
    expect(title).toBeTruthy();
    if (title) expect(title.textContent).toBe('john_doe');

    const fireworkImg = container.querySelector(
      'img.firework'
    ) as HTMLImageElement | null;
    expect(fireworkImg).toBeTruthy();
    if (fireworkImg) expect(fireworkImg.src).toContain('firework.gif');
  });

  it('renders the bottom sections with explicit classes', () => {
    const { container } = render(<FollowedAndFollow />);

    const bottom = container.querySelector('.section-bottom');
    expect(bottom).toBeTruthy();

    const followedSection = container.querySelector(
      '.contenedor-of-rows.followed-section-bottom'
    );
    const followersSection = container.querySelector(
      '.contenedor-of-rows.followers-section-bottom'
    );

    expect(followedSection).toBeTruthy();
    expect(followersSection).toBeTruthy();

    const allContenedores =
      container.getElementsByClassName('contenedor-of-rows');
    expect(allContenedores.length).toBe(2);
  });
});
