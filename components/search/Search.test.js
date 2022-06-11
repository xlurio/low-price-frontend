import { getAllByRole, render, screen } from '@testing-library/react';
import Search from './Search.js';
import userEvent from '@testing-library/user-event';

describe('search component tests', () => {
  test('if the search input is being caught', async () => {
    render(<Search />);
    const searchBar = screen.getByTestId('search-bar');
    const expectedOutput = 'is it working';
    await userEvent.type(searchBar, expectedOutput);
    expect(searchBar).toHaveValue(expectedOutput);
  });

  test('if a GET request is send to the REST API when the search bar is focused', async () => {
    const dummyGames = {
      json: async () => [
        {
          id: '1',
          name: 'Call of Duty',
          score: '91',
          price: '34.99',
        },
        {
          id: '2',
          name: 'Devil May Cry 5',
          score: '89',
          price: '29.69',
        },
      ],
    };

    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce(dummyGames);

    render(<Search />);

    const gameItems = await findAllByRole('listitem');
    expect(gameItems.length).toBe(2);
  });
});
