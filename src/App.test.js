import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // will be conflict
  const linkElement = screen.getByText(/learn react in a/i);
  expect(linkElement).toBeInTheDocument();
});
