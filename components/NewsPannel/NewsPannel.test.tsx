import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsPannel from './NewsPannel';
import '@testing-library/jest-dom';

test('renders news pannel with news', () => {
    render(<NewsPannel />);
    
    const newsElement = screen.getByText(/News/i);
    expect(newsElement).toBeInTheDocument();
    
    }
);