import { render, screen, act } from '@testing-library/react';
import { GridOfPosts } from 'src/components/pages/Profile/GridOfPosts';
import type { arrayOfPosts } from 'src/components/pages/SliderPosts/types.d';

class MockIntersectionObserver {
  private callback: IntersectionObserverCallback;

  constructor(cb: IntersectionObserverCallback) {
    this.callback = cb;
  }

  observe(target: Element): void {
    const node = target as Element & {
      __ioCallback?: IntersectionObserverCallback;
    };
    node.__ioCallback = this.callback;
  }

  unobserve(_target: Element): void {}
  disconnect(): void {}
}

(
  globalThis as unknown as {
    IntersectionObserver?: typeof MockIntersectionObserver;
  }
).IntersectionObserver = MockIntersectionObserver;

function makePosts(quantity: number): arrayOfPosts {
  return [
    [
      {
        userId: 'u1',
        username: 'user1',
        profileImageSrc: '/avatar.png',
        following: false,
        followers: 10,
        totalLikes: 5,
        followed: 2,
        profileDescription: undefined
      },
      Array.from({ length: quantity }, (_, i) => ({
        idPost: `p${i}`,
        dateOfPublication: '2024-01-01',
        totalViewsOfThePost: 0,
        hearts: 0,
        comments: 0,
        saved: 0,
        shared: 0,
        isSaved: false,
        isLiked: false,
        description: `desc ${i}`,
        videoSrc: undefined,
        arrayImages: undefined,
        tags: undefined
      }))
    ]
  ];
}

test('renders ghost lottie when arrayOfPosts is empty', () => {
  render(<GridOfPosts arrayOfPosts={[]} modeGrid={'userCreatedPosts'} />);
  const aside = screen.getByRole('complementary');
  expect(aside).not.toBeNull();
});

test('renders ghost lottie when user exists but has zero posts', () => {
  const posts: arrayOfPosts = [
    [
      {
        userId: 'u1',
        username: 'user1',
        profileImageSrc: '/avatar.png',
        following: false,
        followers: 0,
        totalLikes: 0,
        followed: 0,
        profileDescription: undefined
      },
      []
    ]
  ];

  render(<GridOfPosts arrayOfPosts={posts} modeGrid={'userCreatedPosts'} />);
  const aside = screen.getByRole('complementary');
  expect(aside).not.toBeNull();
});

test('renders INITIAL_VISIBLE items initially (default 18)', () => {
  const posts = makePosts(30);
  render(<GridOfPosts arrayOfPosts={posts} modeGrid={'userCreatedPosts'} />);
  const aside = screen.getByRole('complementary');
  expect(aside.children.length).toBe(18);
});

test('increases visible items when observed element intersects', () => {
  const posts = makePosts(25);
  render(<GridOfPosts arrayOfPosts={posts} modeGrid={'userCreatedPosts'} />);
  const aside = screen.getByRole('complementary');
  expect(aside.children.length).toBe(18);

  const lastChild = aside.lastElementChild as Element & {
    __ioCallback?: IntersectionObserverCallback;
  };

  expect(lastChild.__ioCallback !== undefined).toBe(true);

  act(() => {
    if (typeof lastChild.__ioCallback === 'function') {
      const entry = {
        isIntersecting: true,
        target: lastChild,
        intersectionRatio: 1
      } as IntersectionObserverEntry;
      lastChild.__ioCallback([entry], {} as IntersectionObserver);
    }
  });

  expect(aside.children.length).toBe(25);
});
