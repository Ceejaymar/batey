import React from 'react';
import { afterEach } from 'vitest';
import { cleanup, render as rtlRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

function render(ui: React.ReactElement, { ...renderOptions } = {}) {
  return rtlRender(ui, {
    wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    ...renderOptions,
  });
}

export * from '@testing-library/react';
export { render };
