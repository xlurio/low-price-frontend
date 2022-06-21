import { render, screen } from '@testing-library/react';
import GeneralData from './GeneralData';

describe('GeneralData component tests', () => {
  test('if the title passed is shown', () => {
    const expectedText = 'Testing Title';
    render(<GeneralData title={expectedText} />);
    screen.getByText(expectedText);
  });

  test('if the score passed is shown', () => {
    const expectedText = '86';
    render(<GeneralData score={expectedText} />);
    screen.getByText(expectedText);
  });

  test('if the price passed is shown', () => {
    const expectedText = 'R$ 38,90';
    render(<GeneralData bestPrice='38.90' />);
    screen.getByText(expectedText);
  });
});
