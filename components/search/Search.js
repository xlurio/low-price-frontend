import styles from '../../styles/components/search/Search.module.scss';

import { useCallback, useEffect, useState } from 'react';
import useValueInput from '../../hooks/useValueInput';
import TextInput from '../text-input/TextInput';

const Search = (props) => {
  const [searchInput, changeSearchInput] = useValueInput();

  const enterInSearchingMode = () => {};

  return (
    <form id='search'>
      <TextInput
        data-testid='search-bar'
        className={styles['search-bar__initial-state']}
        onChange={changeSearchInput}
        onClick={enterInSearchingMode}
        placeholder='Start'
      />
    </form>
  );
};

export default Search;
