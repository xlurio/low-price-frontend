import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('Search component tests', () => {
  test('if the search results are not showned when page loads', () => {
    render(<Search />);
    const searchResults = screen.queryByTestId('search-results');
    expect(searchResults).not.toBeInTheDocument();
  });

  test('if the search results are shown when the search bar is focused', async () => {
    render(<Search />);
    const searchBar = screen.getAllByPlaceholderText('start');
    await userEvent.click(searchBar);
    const searchResults = screen.getByTestId('search-results');
  });
});
