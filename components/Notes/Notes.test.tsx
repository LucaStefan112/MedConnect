import React from 'react';
import { render, screen } from '@testing-library/react';
import Notes from './Notes';

describe('Notes', () => {
  test('renders notes component with correct content', () => {
    render(<Notes />);

    const heading = screen.getByText('testing');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');

    const component = screen.getByTestId('notesComponent');
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass('');
  });
});
