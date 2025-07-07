import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { render } from '../../../test/setup';
import Footer from './Footer';

describe('Footer', () => {
  it('renders Footer', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('has link elements', () => {
    render(<Footer />);

    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(5);
  });

  it('has correct hrefs', () => {
    render(<Footer />);

    const links = screen.getAllByRole('link');

    // expect(links[0]).toHaveAttribute('href', '/');
    expect(links[0]).toHaveAttribute('href', '/about');
    expect(links[1]).toHaveAttribute('href', '/lookbook');
    expect(links[2]).toHaveAttribute('href', '/shop');
    expect(links[3]).toHaveAttribute('href', '/contact');

    expect(links[4]).toHaveAttribute(
      'href',
      'https://www.instagram.com/steadyonthego'
    );
    expect(links[5]).toHaveAttribute(
      'href',
      'https://www.youtube.com/@Losliving'
    );
    expect(links[6]).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/carmart/'
    );
  });
});
