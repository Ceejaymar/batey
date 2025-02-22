import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { render } from '../../../test/setup';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders navigation', () => {
    render(<Navigation />);
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });

  it('has link elements', () => {
    render(<Navigation />);

    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(5);
  });

  it('has correct hrefs', () => {
    render(<Navigation />);

    const links = screen.getAllByRole('link');

    expect(links[0]).toHaveAttribute('href', '/');
    expect(links[1]).toHaveAttribute('href', '/about');
    expect(links[2]).toHaveAttribute('href', '/shop');
    expect(links[3]).toHaveAttribute('href', '/contact');
    expect(links[4]).toHaveAttribute('href', '/cart');
  });
});
