import React from 'react';
import { render } from '@testing-library/react';
import SideMenuButton from '../SideMenu/SideMenuButton';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/some/path',
  }),
}));

describe('SideMenuButton', () => {
  it('renders the button name', () => {
    const { getByText } = render(
      <SideMenuButton path="/some/path" name="Some Path" icon={<div />} />
    );
    expect(getByText('Some Path')).toBeInTheDocument();
  });

  it('renders the button icon', () => {
    const { getByTestId } = render(
      <SideMenuButton path="/some/path" name="Some Path" icon={<div data-testid="icon" />} />
    );
    expect(getByTestId('icon')).toBeInTheDocument();
  });

  it('applies the active style if the path matches the current pathname', () => {
    const { container } = render(
      <SideMenuButton path="/some/path" name="Some Path" icon={<div />} />
    );
    expect(container.firstChild).toHaveClass('text-white text-center text-side_menu_font_size flex flex-col justify-between w-full h-40 rounded-xl bg-blue-500');
  });

  it('applies the active style if the path is the home route', () => {
    const { container } = render(
      <SideMenuButton path="/" name="Home" icon={<div />} />
    );
    expect(container.firstChild).toHaveClass('text-white text-center text-side_menu_font_size flex flex-col justify-between w-full h-40 rounded-xl bg-blue-400');
  });

  it('does not apply the active style if the path does not match the current pathname', () => {
    const { container } = render(
      <SideMenuButton path="/another/path" name="Another Path" icon={<div />} />
    );
    expect(container.firstChild).toHaveClass('bg-blue-400');
  });
});
