import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

describe('Search component tests', () => {
  test('if the search results are not showned when page loads', () => {
    render(<Search />);
    const searchResults = screen.queryByTestId('search-results');
    expect(searchResults).not.toBeInTheDocument();
  });

  test('if the search results are shown when the search bar is focused', async () => {
    render(<Search />);
    const searchBar = screen.getByPlaceholderText('Start');
    await userEvent.click(searchBar);
    const searchResults = screen.getByTestId('search-results');
  });

  test('if the initial state is shown', async () => {
    const dummyGames = [
      {
        id: '0',
        game: {
          name: 'Tomb Raider',
          score: '86',
        },
        price: '34.99',
      },
      {
        id: '1',
        game: {
          name: 'Risk of Rain 2',
          score: '85',
        },
        price: '59.99',
      },
    ];

    render(<Search games={dummyGames} />);
    const searchBar = screen.getByPlaceholderText('Start');
    await userEvent.click(searchBar);
    screen.getByText('Risk of Rain 2');
  });
});
