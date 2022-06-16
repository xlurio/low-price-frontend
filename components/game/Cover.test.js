import { render, screen } from '@testing-library/react';
import Cover from './Cover.js';

describe('Cover component tests', () => {
  test('if the game image cover is been shown', () => {
    const imagePath = '/../testRes/game-image.jpg';
    render(<Cover src={imagePath} alt='game cover test' />);
    const expected = expect.stringContaining('data:image');
    const gameImage = screen.getByRole('img');

    expect(gameImage).toHaveAttribute('src', expected);
  });

  test('if the game image cover does not show when a image source is not provided', () => {
    render(<Cover />);
    const gameImage = screen.queryByRole('img');
    expect(gameImage).not.toBeInTheDocument();
  });

  test('if the className is passed to the component', () => {
    const customClass = 'custom-cover';
    const expected = expect.stringContaining(customClass);
    const imagePath = '/image/test/game-image.jpg';
    render(
      <Cover src={imagePath} alt='game cover test' className={customClass} />
    );
    const cover = screen.getByRole('img');
    expect(cover).toHaveAttribute('class', expected);
  });
});
