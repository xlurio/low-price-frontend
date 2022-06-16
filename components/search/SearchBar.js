import styles from '../../styles/components/search/SearchBar.module.scss';

import useToggleFieldStyles from '../../services/hooks/useToggleFieldStyles';
import useValueInput from '../../services/hooks/useValueInput';

import TextInput from '../text-input/TextInput';

const initialTextInputStyle = styles['search-bar__initial-state'];
const searchModeStyle = `${styles['search-bar__search-mode']} 
  ${styles['search-bar__search-mode-entering']}`;

const classesOptions = {
  initial: initialTextInputStyle,
  alternative: searchModeStyle,
};

const placeholderOptions = {
  initial: 'Start',
  alternative: '',
};

const fieldStylesOptions = {
  classesOptions,
  placeholderOptions,
};

const SearchBar = (props) => {
  const [searchInput, changeSearchInput] = useValueInput();
  const [classes, placeholder, enterSearchMode] =
    useToggleFieldStyles(fieldStylesOptions);

  return (
    <form id='search'>
      <TextInput
        data-testid='search-bar'
        className={classes}
        onChange={changeSearchInput}
        onFocus={enterSearchMode}
        placeholder={placeholder}
        value={searchInput}
      />
    </form>
  );
};

export default SearchBar;
