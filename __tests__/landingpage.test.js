import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../app/page'; // Adjust the path if necessary



describe('Page Component', () => {
  it('renders the heading', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { name: /my portfolio/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('mb-8 text-2xl font-semibold tracking-tighter');
  });

  it('renders the description paragraph', () => {
    render(<Page />);
    const paragraph = screen.getByText(/vim enthusiast and tab advocate/i);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass('mb-4');
  });

  it('renders the BlogPosts component', () => {
    render(<Page />);
    const blogPosts = screen.getByTestId('blog-posts');
    expect(blogPosts).toBeInTheDocument();
    expect(blogPosts).toHaveTextContent('Mocked BlogPosts');
  });
});
