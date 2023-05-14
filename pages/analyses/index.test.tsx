import { render, screen } from '@testing-library/react';
import Analyses from './index';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Analyses', () => {
  test('renders the page title', () => {
    render(<Analyses />);
    const pageTitle = screen.getByText(/My Analyses/i);
    expect(pageTitle).toBeInTheDocument();
  });

  test('renders the search bar', () => {
    render(<Analyses />);
    const searchBar = screen.getByPlaceholderText('Search analysis...');
    expect(searchBar).toBeInTheDocument();
  });

  test('renders the list of analyses', () => {
    render(<Analyses />);
    const analysisListItems = screen.getAllByRole('option');

    expect(analysisListItems).toHaveLength(4);
  });

  test('see if My Analyses is in the document', () => {
    render(<Analyses />);
    expect(screen.getByText('My Analyses')).toBeInTheDocument();

  });

  test('className=max-h-[30.5em] hide_scroll', () => {
    render(<Analyses />);
    expect(screen.getByText('My Analyses')).toHaveClass('text-4xl mt-7 mb-7 text-blue-600 w-full');
  });

});

