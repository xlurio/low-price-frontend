import { render, screen } from '@testing-library/react';

import GradientBorder from './GradientBorder';

describe('GradientBorder tests', () => {
  test('if the className is passed to the component', () => {
    const customClass = 'custom-wrapper';
    const expected = expect.stringContaining(customClass);
    render(<GradientBorder className={customClass} />);
    const wrapper = screen.getByTestId('gradient-border');
    expect(wrapper).toHaveAttribute('class', expected);
  });
});
