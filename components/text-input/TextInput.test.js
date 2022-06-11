import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';
import userEvent from '@testing-library/user-event';

describe('Search component tests', () => {
  test('if the search bar is a text input field', () => {
    render(<TextInput />);
    const textInput = screen.getByTestId('text-input');
    expect(textInput).toHaveAttribute('type', 'text');
  });

  test('if the search bar be interactive', async () => {
    const changeInput = jest.fn();
    render(<TextInput onChange={changeInput} />);
    const textInput = screen.getByTestId('text-input');
    const expectedOutput = 'is it working';
    await userEvent.type(textInput, expectedOutput);
    expect(changeInput).toBeCalledTimes(expectedOutput.length);
  });
});
