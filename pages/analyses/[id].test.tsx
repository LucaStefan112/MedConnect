import React from 'react';
import { render } from '@testing-library/react';
import Analysis from './[id]';

describe('Analysis component', () => {
  it('renders the iframe with the correct source', () => {
    const { getByTitle } = render(<Analysis />);
    const iframe = getByTitle('PDF viewer');
    expect(iframe).toHaveAttribute('src', '/641946eda55feb76cc7b08c5_23-03-2023_biochemistry+haematology+microbiology.pdf');
  });
});