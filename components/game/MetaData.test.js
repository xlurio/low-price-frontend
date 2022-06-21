import { render, screen } from '@testing-library/react';
import MetaData from './MetaData';

describe('MetaData component tests', () => {
  test('if the title passed is shown', () => {
    const textToExpect = 'Testing Title';
    render(<MetaData title={textToExpect} />);
    screen.getByText(textToExpect);
  });

  test('if the score passed is shown', () => {
    const textToExpect = '86';
    render(<MetaData score={textToExpect} />);
    screen.getByText(textToExpect);
  });
});
