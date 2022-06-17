import { render, screen } from '@testing-library/react';

import Games from './Games';

describe('Games component tests', () => {
  test('if the passed game items are shown', () => {
    const dummyGames = [
      {
        id: '0',
        title: 'Tomb Raider',
        score: '86',
        bestPrice: '34.99',
      },
      {
        id: '1',
        title: 'Risk of Rain 2',
        score: '85',
        bestPrice: '59.99',
      },
    ];
    render(<Games items={dummyGames} />);
    const gameItems = screen.getAllByTestId('game-item');
    expect(gameItems.length).toBe(2);
  });

  test('if the passed game items are dynamic', () => {
    const dummyGames = [
      {
        id: '0',
        title: 'Tomb Raider',
        score: '86',
        bestPrice: '34.99',
      },
      {
        id: '1',
        title: 'Risk of Rain 2',
        score: '85',
        bestPrice: '59.99',
      },
      {
        id: '2',
        title: 'Remnant: From the Ashes',
        score: '78',
        price: '75,49',
      },
    ];
    render(<Games items={dummyGames} />);
    const gameItems = screen.getAllByTestId('game-item');
    expect(gameItems.length).toBe(3);
  });
});
