import { getByText, render, screen } from '@testing-library/react';
import Score from './Score';

describe('Score component tests', () => {
  test('if the game score is shown', () => {
    render(<Score value='86' />);
    screen.getByText('86');
  });

  test('if the game score is empty when no value is passed', () => {
    render(<Score />);
    const score = screen.getByTestId('score');
    expect(score).toHaveTextContent('');
  });

  test('if the className is passed to the component', () => {
    const customClass = 'custom-score';
    const expected = expect.stringContaining(customClass);
    render(<Score className={customClass} />);
    const score = screen.getByTestId('score');
    expect(score).toHaveAttribute('class', expected);
  });
});
