import { render, screen } from '@testing-library/react';

import Title from './Title.js';

describe('Title component tests', () => {
  test('if the title is been shown', () => {
    render(<Title value='Tomb Raider' />);
    screen.getByText('Tomb Raider');
  });

  test('if the className is passed to the component', () => {
    const customClass = 'custom-title';
    const expected = expect.stringContaining(customClass);
    render(<Title className={customClass} />);
    const title = screen.getByTestId('title');
    expect(title).toHaveAttribute('class', expected);
  });
});
