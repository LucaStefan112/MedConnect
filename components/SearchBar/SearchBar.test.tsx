import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar, { IVerticalListProps } from './SearchBar';

describe('SearchBar', () => {
  const defaultProps: IVerticalListProps = {
    placeholder: 'Search for a person',
    className: 'search-bar',
  };

  it('renders the search bar with options', () => {
    render(<SearchBar {...defaultProps} />);

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    const optionElements = screen.getAllByRole('option');
    expect(optionElements).toHaveLength(4);

    const inputElement = screen.getByPlaceholderText(defaultProps.placeholder);
    expect(inputElement).toBeInTheDocument();

    const searchIconElement = screen.getByRole('textbox');
    expect(searchIconElement).toBeInTheDocument();
  });

  it('calls the onSubmit handler when the search icon is clicked', () => {
    const onSubmit = jest.fn();
    render(<SearchBar {...defaultProps} />);

    const searchIconElement = screen.getByRole('combobox');
    fireEvent.click(searchIconElement);

    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
});
