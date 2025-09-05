import { render } from '@testing-library/react';
import { ShareLinkAndCircle } from '@/components/pages/ProfileCreator/ShareLinkAndCircle';

describe('ShareLinkAndCircle', () => {
  it('renders ShareLinkOfProfile initially and does not render CircleCopy', () => {
    const { container } = render(<ShareLinkAndCircle />);
    const shareLink = container.querySelector('.share-link');
    if (!shareLink) throw new Error('ShareLinkOfProfile not rendered initially');

    const circleCopy = Array.from(container.children).find(
      child =>
        child.children.length > 0 && !child.classList.contains('share-link')
    );
    if (circleCopy)
      throw new Error('CircleCopy should not be rendered initially');
  });
});
