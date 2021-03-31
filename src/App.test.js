import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import App from './App';

test('renders marvel heading', () => {
  render(<App />);

  const heading = screen.getByRole('heading');

  expect(heading).not.toBeNull();
  expect(heading).toHaveTextContent('Marvel');
});
