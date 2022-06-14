import { render, screen } from '@testing-library/react';

import GameItem from './GameItem.js';

describe('GameItem tests', () => {
  test('if the game title is been shown', () => {
    render(<GameItem title='Tomb Raider' />);
    screen.getByText('Tomb Raider');
  });

  test('if the game score is been shown', () => {
    render(<GameItem score='86' />);
    screen.getByText('86');
  });

  test('if the game score is cleaned', () => {
    render(<GameItem score='asd8_.6<div/>' />);
    screen.getByText('86');
  });

  test('if the game best price is been shown', () => {
    render(<GameItem bestPrice='34.99' />);
    screen.getByText('R$ 34,99');
  });

  test('if the game best price is cleaned', () => {
    render(<GameItem bestPrice='asadsa34,<div/> 99' />);
    screen.getByText('R$ 34,99');
  });

  test('if the game image cover is been shown', () => {
    render(<GameItem image='./game-image.jpg' />);
    const gameImage = screen.getByRole('img');
    expect(gameImage).toHaveAttribute('src', './game-image.jpg');
  });

  test('if the game image cover extension is verified', () => {
    render(<GameItem image='.game-image.exe' />);
    const gameImage = screen.getByRole('img');
    expect(gameImage).toHaveAttribute('src', '/default-game-image.jpg');
  });
});
