import { render, screen } from '@testing-library/react';
import GameItem from './GameItem';

describe('GameItem component tests', () => {
  test('if the passed title is shown', () => {
    const dummyGame = {
      title: 'Tomb Raider',
    };

    render(<GameItem gameData={dummyGame} />);
    const { title: expectedTitle } = dummyGame;
    screen.getByText(expectedTitle);
  });

  test('if the passed title is shown', () => {
    const dummyGame = {
      score: '86',
    };

    render(<GameItem gameData={dummyGame} />);
    const { score: expectedScore } = dummyGame;
    screen.getByText(expectedScore);
  });

  test('if the passed title is shown', () => {
    const dummyGame = {
      bestPrice: '34.90',
    };

    render(<GameItem gameData={dummyGame} />);
    const expectedPrice = 'R$ 34,90';
    screen.getByText(expectedPrice);
  });
});
