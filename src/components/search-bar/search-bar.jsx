import PropTypes from 'prop-types';
import { useRef, useState, useId } from 'react';

const SearchBar = ({label, btnText, onSearch}) => {
  const id = useId();
  const inputRef = useRef();
  const [query, setQuery] = useState('');

  const handleQuerySubmit = (e) => {
    e.preventDefault();

    onSearch(query);
    setQuery('');
    inputRef.current.focus();
  }

  return (
    <form onSubmit={handleQuerySubmit}>
      {label && (
        <label htmlFor={id+'search'}>{label} : </label>
      )}
      <input id={id+'search'} type="text"
        ref={inputRef}
        value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type='submit'>{btnText}</button>
    </form>
  )
};

SearchBar.defaultProps = {
  btnText: 'Rechercher',
  onSearch: () => {}
};

SearchBar.propTypes = {
  label: PropTypes.string,
  btnText: PropTypes.string,
  onSearch: PropTypes.func
};

export default SearchBar;