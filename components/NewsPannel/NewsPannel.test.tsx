import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsPannel from './NewsPannel';
import '@testing-library/jest-dom';

test('renders news pannel with news', () => {
    render(<NewsPannel />);
    
    //check  the img name to be Application Logo
    const newsElement = screen.getByText(/News/i);
    expect(newsElement).toBeInTheDocument();
    
    }
);