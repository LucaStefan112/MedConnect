import React from 'react';
import { render, screen } from '@testing-library/react';
import VerticalList, { IVerticalListProps } from './VerticalList';

describe('VerticalList', () => {
  const mockList: IVerticalListProps['list'] = [
    { title: 'Item 1', onClick: jest.fn() },
    { title: 'Item 2', onClick: jest.fn() },
  ];

  it('renders the list items correctly', () => {
    render(<VerticalList list={mockList} />);
  
    const item1 = screen.getByText('Item 1');
    const item2 = screen.getByText('Item 2');
  
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });

  it('calls the onClick function when an item is clicked', () => {
    render(<VerticalList list={mockList} />);
  
    const item1 = screen.getByText('Item 1');
    const item2 = screen.getByText('Item 2');
  
    item1.click();
    item2.click();
  
    expect(mockList[0].onClick).toHaveBeenCalledTimes(1);
    expect(mockList[1].onClick).toHaveBeenCalledTimes(1);
  });
});