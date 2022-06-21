import axios from 'axios';
import { Fragment, useState, useEffect } from 'react';
import useFetchData from '../../services/hooks/useFetchData';
import Games from './Games';
import SearchBar from './SearchBar';

const sshProtocol = 'http://';
const domain = 'localhost:8000';
const path = '/api/game/prices/best_prices';
const url = sshProtocol + domain + path;

const Search = (props) => {
  const useFetchDataOptions = {
    initialData: props.games,
    url,
    parameterName: 'game_name',
  };

  const [isSearchModeOn, setSearchModeOn] = useState(false);
  const [searchResults, setSearchResults] = useFetchData(useFetchDataOptions);

  let searchResultsElement = (
    <Games data-testid='search-results' items={searchResults} />
  );
  searchResultsElement = isSearchModeOn ? searchResultsElement : '';

  return (
    <Fragment>
      <SearchBar onFocus={setSearchModeOn} onChange={setSearchResults} />
      {searchResultsElement}
    </Fragment>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get(url);
  } catch (error) {
    throw new Error(error.response.data.error);
  }
  const { data: games } = response;

  return {
    props: { games },
  };
}

export default Search;
