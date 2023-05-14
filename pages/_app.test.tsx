import React from 'react';
import { getByRole, getByTestId, render } from '@testing-library/react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import App from './_app';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({ pathname: '/test' })
}));

describe('App', () => {
  it('renders the component with page props and the header if pathname does not include "auth-redirect"', () => {
    const pageProps = { prop1: 'value1', prop2: 'value2' };
    const { getByText } = render(<App Component={() => <div>My Component</div>} pageProps={pageProps} />);
    const componentText = getByText('My Component');
    expect(componentText).toBeInTheDocument();
    
  });

  it('does not render the header if pathname includes "auth-redirect"', () => {
    (useRouter as jest.Mock).mockReturnValue({ pathname: '/auth-redirect' });
    const pageProps = { prop1: 'value1', prop2: 'value2' };
    const { getByText, queryByText } = render(<App Component={() => <div>My Component</div>} pageProps={pageProps} />);
    const componentText = getByText('My Component');
    const header = queryByText('Header');
    expect(componentText).toBeInTheDocument();
    expect(header).toBeNull();
  });
});