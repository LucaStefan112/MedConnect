import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AnalysisRectangle from './analyses copy';
import AnalysesPage from './analyses copy';

// Test AnalysisRectangle component
describe('AnalysisRectangle', () => {
  test('renders correctly with given file name', () => {
    const fileName = 'analysis.pdf';
    render(<AnalysisRectangle fileName={fileName} />);
    
    const fileNameElement = screen.getByText(fileName);
    expect(fileNameElement).toBeInTheDocument();
  });

  test('clicking visibility icon navigates to correct file path', () => {
    const fileName = 'analysis.pdf';
    const filePath = './pdfViewer?fileName=analysis.pdf';
    render(<AnalysisRectangle fileName={fileName} />);
    
    const visibilityIcon = screen.getByLabelText('Visibility');
    userEvent.click(visibilityIcon);
    
    expect(window.location.href).toBe(filePath);
  });

  test('clicking download icon triggers file download', () => {
    const fileName = 'analysis.pdf';
    render(<AnalysisRectangle fileName={fileName} />);
    
    const downloadIcon = screen.getByLabelText('Download');
    userEvent.click(downloadIcon);
    
    // Add assertions here to test the download behavior
    // For example, you can check if the download was triggered correctly.
  });
});

// Test AnalysesPage component
describe('AnalysesPage', () => {
  test('renders AnalysesPage correctly', () => {
    render(<AnalysesPage />);
    
    // Add assertions here to test the rendering of AnalysesPage component
    // For example, you can check if the Searchbar component is present.
  });
});

