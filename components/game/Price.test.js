import { render, screen } from '@testing-library/react';
import Price from './Price';

describe('Price component tests', () => {
  test('if the price is been shown', () => {
    render(<Price value='34,99' />);
    screen.getByText('R$ 34,99');
  });

  test('if the price is been validated', () => {
    render(<Price value='34.99' />);
    screen.getByText('R$ 34,99');
  });

  test('if the className is passed to the component', () => {
    const customClass = 'custom-price';
    const expected = expect.stringContaining(customClass);
    render(<Price value='34.99' className={customClass} />);
    const price = screen.getByText('R$ 34,99');
    expect(price).toHaveAttribute('class', expected);
  });
});
