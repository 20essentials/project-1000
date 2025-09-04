import { render, screen } from '@testing-library/react';
import { ListOfUsers } from '@/components/pages/FollowedAndFollow/ListOfUser';

vi.mock('@/components/pages/FollowedAndFollow/RowUser', () => ({
  RowUser: (props: any) => {
    return (
      <div>
        {props.username} - {props.index} - {props.thisRowRenderMorePosts ? 'more' : 'no-more'}
      </div>
    );
  }
}));

describe('ListOfUsers', () => {
  const mockArrayOFAccounts = [
    { profileImageSrc: 'img1.png', userId: 'u1', username: 'User1' },
    { profileImageSrc: 'img2.png', userId: 'u2', username: 'User2' },
    { profileImageSrc: 'img3.png', userId: 'u3', username: 'User3' },
    { profileImageSrc: 'img4.png', userId: 'u4', username: 'User4' }
  ];

  it('renders only up to the limit', () => {
    render(
      <ListOfUsers
        arrayOFAccounts={mockArrayOFAccounts}
        limit={2}
        updateLimit={() => {}}
        theUserIsInItsSameProfile={false}
        NUM_OF_ROW_THAT_RENDER_MORE_ROWS={2}
      />
    );

    expect(screen.queryByText('User1 - u1-0 - no-more')).toBeTruthy();
    expect(screen.queryByText('User2 - u2-1 - more')).toBeTruthy();
    expect(screen.queryByText('User3 - u3-2 - no-more')).toBeNull();
    expect(screen.queryByText('User4 - u4-3 - more')).toBeNull();
  });

  it('marks rows that should render more posts correctly', () => {
    render(
      <ListOfUsers
        arrayOFAccounts={mockArrayOFAccounts}
        limit={4}
        updateLimit={() => {}}
        theUserIsInItsSameProfile={false}
        NUM_OF_ROW_THAT_RENDER_MORE_ROWS={3}
      />
    );

    expect(screen.queryByText('User1 - u1-0 - no-more')).toBeTruthy();
    expect(screen.queryByText('User2 - u2-1 - no-more')).toBeTruthy();
    expect(screen.queryByText('User3 - u3-2 - more')).toBeTruthy(); 
    expect(screen.queryByText('User4 - u4-3 - no-more')).toBeTruthy();
  });
});
