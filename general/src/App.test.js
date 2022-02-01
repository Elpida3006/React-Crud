import { render, screen } from '@testing-library/react';
import AllMovies from './AllMovies';

test('renders learn react link', () => {
  render(<AllMovies />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
