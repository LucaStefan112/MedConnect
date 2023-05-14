import React from 'react';
import { screen , render} from '@testing-library/react';
import About from './about';

describe('About', () => {
  test('renders the expected HTML structure', () => {
    render(<About />);

    expect(screen.getByText('about')).toBeInTheDocument();
  });
}
);