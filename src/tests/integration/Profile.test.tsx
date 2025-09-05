import { render } from '@testing-library/react';
import { Profile } from '@/components/pages/Profile/Profile';

describe('Profile component', () => {
  it('renders ProfileTop and all post grids', () => {
    const { container } = render(<Profile />);

    const article = container.querySelector('article.profile-user-original');
    expect(article).toBeDefined();

    const section = container.querySelector('section.slider-of-grid-of-posts-bottom');
    expect(section).toBeDefined();

    expect(section?.querySelector('div')).toBeDefined();
  });
});
