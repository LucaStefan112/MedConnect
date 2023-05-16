import React from 'react';
import { render } from '@testing-library/react';
import SideMenuButton from './SideMenuButton';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/some/path',
  }),
}));

describe('SideMenuButton', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <SideMenuButton path="/some/path" name="Some Path" icon={<div />} />
    );
    expect(getByText('Some Path')).toBeInTheDocument();
  });
});