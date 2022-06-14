import { getAllByRole, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar.js';
import userEvent from '@testing-library/user-event';
import styles from '../../styles/components/search/SearchBar.module.scss';

describe('search component tests', () => {
  test('if the search input is being caught', async () => {
    render(<SearchBar />);
    const searchBar = screen.getByTestId('search-bar');
    const expectedOutput = 'is it working';

    await userEvent.type(searchBar, expectedOutput);

    expect(searchBar).toHaveValue(expectedOutput);
  });

  test('if the TextInput starts with the initial state class', () => {
    render(<SearchBar />);
    const searchBar = screen.getByPlaceholderText('Start');
    const expectedClass = styles['search-bar__initial-state'];
    const expectedOutput = expect.stringContaining(expectedClass);

    expect(searchBar).toHaveAttribute('class', expectedOutput);
  });

  test('if the TextInput do not starts with its search mode style', () => {
    render(<SearchBar />);
    const searchBar = screen.getByPlaceholderText('Start');
    const expectedClass1 = styles['search-bar__search-mode'];
    const expectedClass2 = styles['search-bar__search-mode-entering'];
    const expectedOutput =
      expect.stringContaining(expectedClass1) &&
      expect.stringContaining(expectedClass2);

    expect(searchBar).not.toHaveAttribute('class', expectedOutput);
  });

  test('if the TextInput changes its class on focus', async () => {
    render(<SearchBar />);
    const searchBar = screen.getByPlaceholderText('Start');
    const expectedClass1 = styles['search-bar__search-mode'];
    const expectedClass2 = styles['search-bar__search-mode-entering'];
    const expectedOutput =
      expect.stringContaining(expectedClass1) &&
      expect.stringContaining(expectedClass2);

    await userEvent.click(searchBar);

    expect(searchBar).toHaveAttribute('class', expectedOutput);
  });

  test('if the TextInput removes its old class on focus', async () => {
    render(<SearchBar />);
    const searchBar = screen.getByPlaceholderText('Start');
    const expectedClass = styles['search-bar__initial-state'];
    const expectedOutput = expect.stringContaining(expectedClass);

    await userEvent.click(searchBar);

    expect(searchBar).not.toHaveAttribute('class', expectedOutput);
  });

  test('if the TextInput changes its old class on blur', async () => {
    render(<SearchBar />);
    const searchBar = screen.getByPlaceholderText('Start');
    const expectedClass = styles['search-bar__initial-state'];
    const expectedOutput = expect.stringContaining(expectedClass);

    await userEvent.click(searchBar);
    await userEvent.tab();

    expect(searchBar).toHaveAttribute('class', expectedOutput);
  });

  test('if the TextInput removes its class on blur', async () => {
    render(<SearchBar />);
    const searchBar = screen.getByPlaceholderText('Start');
    const expectedClass1 = styles['search-bar__search-mode'];
    const expectedClass2 = styles['search-bar__search-mode-entering'];
    const expectedOutput =
      expect.stringContaining(expectedClass1) &&
      expect.stringContaining(expectedClass2);

    await userEvent.click(searchBar);
    await userEvent.tab();

    expect(searchBar).not.toHaveAttribute('class', expectedOutput);
  });
});
