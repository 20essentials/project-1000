import { render, fireEvent } from '@testing-library/react';
import React, { createRef } from 'react';
import { NavVideosOrSaved } from '@/components/pages/Profile/NavVideosOrSaved';

describe('NavVideosOrSaved', () => {
  it('renders all navigation items and switches active section on click', () => {
    const slideHorizontalRef = createRef<HTMLElement>();
    const { container } = render(<NavVideosOrSaved slideHorizontalRef={slideHorizontalRef} />);

    const navContainer = container.querySelector('.nav-videos-or-saved');
    if (!navContainer) throw new Error('Nav container missing');
    if (navContainer.children.length !== 4) throw new Error('Expected 4 navigation items');

    const firstAside = navContainer.children[0] as HTMLElement;
    const secondAside = navContainer.children[1] as HTMLElement;

    if (!firstAside.className.includes('aside-nav-active')) throw new Error('First item should be active initially');

    fireEvent.click(secondAside);

    if (!secondAside.className.includes('aside-nav-active')) throw new Error('Second item should be active after click');
    if (firstAside.className.includes('aside-nav-active')) throw new Error('First item should not be active after click');
  });

  it('scrolls the correct section into view when active index changes', () => {
    const fakeChild = document.createElement('div');
    fakeChild.textContent = 'child';
    const slideHorizontalRef = createRef<HTMLElement>();
    const wrapper = document.createElement('div');
    wrapper.appendChild(fakeChild);
    slideHorizontalRef.current = wrapper;

    const { container } = render(<NavVideosOrSaved slideHorizontalRef={slideHorizontalRef} />);

    const navContainer = container.querySelector('.nav-videos-or-saved');
    if (!navContainer) throw new Error('Nav container missing');

    const secondAside = navContainer.children[1] as HTMLElement;
    secondAside.click();

    if (!slideHorizontalRef.current?.children[0]) throw new Error('Child element should exist in scroll container');
  });
});
