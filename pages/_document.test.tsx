import { render } from '@testing-library/react'
import Document from './_document'

describe('Document', () => {
  it('renders the expected HTML structure', () => {
    const { container } = render(<Document />)
    expect(container.innerHTML).toMatch(/<html>.*<head>.*<\/head>.*<body class="body">.*<main><\/main>.*<nextscript><\/nextscript>.*<\/body>.*<\/html>/s)
  })
})