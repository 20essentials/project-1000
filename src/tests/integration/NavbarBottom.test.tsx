import { render, screen } from '@testing-library/react';
import { NavbarBottom } from '@/components/NavBarBottom/NavbarBottom';
import { useCurrentPage, IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';

describe('NavbarBottom', () => {
  beforeEach(() => {
    useCurrentPage.setState({ currenPage: IS_ACTIVE_BUTTON.HOME });
  });

  it('renders all navigation icons and labels', () => {
    render(<NavbarBottom />);
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Search')).toBeTruthy();
    expect(screen.getByText('Inbox')).toBeTruthy();

    const icons = document.querySelectorAll(
      '.logo-home, .logo-search, .logo-upload, .logo-inbox, .logo-profile'
    );
    expect(icons.length).toBeGreaterThan(3);
  });

  it("applies 'btn-active' to the correct icon for HOME", () => {
    useCurrentPage.setState({ currenPage: IS_ACTIVE_BUTTON.HOME });
    render(<NavbarBottom />);
    expect(
      document.querySelector('.logo-home')?.classList.contains('btn-active')
    ).toBe(true);
    expect(
      document.querySelector('.logo-search')?.classList.contains('btn-active')
    ).toBe(false);
  });

  it("applies 'btn-active' to the correct icon for SEARCH", () => {
    useCurrentPage.setState({ currenPage: IS_ACTIVE_BUTTON.SEARCH });
    render(<NavbarBottom />);
    expect(
      document.querySelector('.logo-search')?.classList.contains('btn-active')
    ).toBe(true);
    expect(
      document.querySelector('.logo-home')?.classList.contains('btn-active')
    ).toBe(false);
  });
});
