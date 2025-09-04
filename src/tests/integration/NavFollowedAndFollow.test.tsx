import { render, fireEvent } from '@testing-library/react';
import { NavFollowedAndFollow } from '@/components/pages/FollowedAndFollow/NavFollowedAndFollow';
import { createRef } from 'react';
import { act } from 'react';
import { useNavFollowedOrFollowers as navStore } from '@/store/useNavFollowedOrFollowers';

describe('NavFollowedAndFollow', () => {
  let followedSection: React.RefObject<HTMLElement | null>;
  let followersSection: React.RefObject<HTMLElement | null>;

  beforeEach(() => {
    // Create refs for sections
    followedSection = createRef<HTMLElement>();
    followersSection = createRef<HTMLElement>();

    // Create elements in document so scrollIntoView and closest works
    const sectionBottom = document.createElement('div');
    sectionBottom.classList.add('section-bottom');
    document.body.appendChild(sectionBottom);

    const followedDiv = document.createElement('div');
    sectionBottom.appendChild(followedDiv);
    followedSection.current = followedDiv;

    const followersDiv = document.createElement('div');
    document.body.appendChild(followersDiv);
    followersSection.current = followersDiv;

    // Mock scrollIntoView to avoid errors in Happy DOM
    followedDiv.scrollIntoView = () => {};
    followersDiv.scrollIntoView = () => {};
  });

  afterEach(() => {
    document.body.innerHTML = '';
    // Reset Zustand store
    navStore.setState({ isNavFollowed: true });
  });

  it('scrolls to followed section when followed button clicked', () => {
    const { container } = render(
      <NavFollowedAndFollow followedSection={followedSection} followersSection={followersSection} />
    );

    const followedButton = container.querySelector('button.followed')!;
    let scrolled = false;
    followedSection.current!.scrollIntoView = () => {
      scrolled = true;
    };

    fireEvent.click(followedButton);
    expect(scrolled).toBe(true);
  });

  it('scrolls to followers section when followers button clicked', () => {
    const { container } = render(
      <NavFollowedAndFollow followedSection={followedSection} followersSection={followersSection} />
    );

    const followersButton = container.querySelector('button.follower')!;
    let scrolled = false;
    followersSection.current!.scrollIntoView = () => {
      scrolled = true;
    };

    fireEvent.click(followersButton);
    expect(scrolled).toBe(true);
  });

  it('scrolls automatically based on Zustand store isNavFollowed', () => {
    let scrolledFollowed = false;
    let scrolledFollowers = false;

    followedSection.current!.scrollIntoView = () => {
      scrolledFollowed = true;
    };
    followersSection.current!.scrollIntoView = () => {
      scrolledFollowers = true;
    };

    // Set store to true -> should scroll followed
    navStore.setState({ isNavFollowed: true });
    render(<NavFollowedAndFollow followedSection={followedSection} followersSection={followersSection} />);
    expect(scrolledFollowed).toBe(true);
    expect(scrolledFollowers).toBe(false);

    // Set store to false -> should scroll followers
    scrolledFollowed = false;
    scrolledFollowers = false;
    navStore.setState({ isNavFollowed: false });
    render(<NavFollowedAndFollow followedSection={followedSection} followersSection={followersSection} />);
    expect(scrolledFollowed).toBe(false);
    expect(scrolledFollowers).toBe(true);
  });

  it('updates tabFollower position and toggles class on scroll', () => {
    // Add scrollable section
    const sectionBottom = followedSection.current!.closest('.section-bottom')!;
    sectionBottom.scrollLeft = 0;
    Object.defineProperty(sectionBottom, 'scrollWidth', { value: 200, writable: true });

    const { container } = render(
      <NavFollowedAndFollow followedSection={followedSection} followersSection={followersSection} />
    );

    const tabFollower = container.querySelector('aside.tab-follower') as HTMLElement;
    expect(tabFollower).toBeTruthy();

    act(() => {
      sectionBottom.scrollLeft = 50;
      fireEvent.scroll(sectionBottom);
    });

    expect(tabFollower.style.left).toBe(`${Math.floor(50 / 2)}px`);
    expect(tabFollower.classList.contains('colorinTab')).toBe(true);

    act(() => {
      sectionBottom.scrollLeft = 30;
      fireEvent.scroll(sectionBottom);
    });
    expect(tabFollower.classList.contains('colorinTab')).toBe(false);
  });
});
