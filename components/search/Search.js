import { Fragment } from 'react';
import Games from './Games';
import SearchBar from './SearchBar';

const Search = () => {
  return (
    <Fragment>
      <SearchBar />
      <Games data-testid='search-results' />
    </Fragment>
  );
};

export default Search;
