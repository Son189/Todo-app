import React, { useState } from 'react';

function Search({ onSearchResults }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = event => {
    setQuery(event.target.value);
  };

  const handleSearch = event => {
    event.preventDefault();
    fetch(`/api/tasks?query=${query}`)
      .then(response => response.json())
      .then(tasks => onSearchResults(tasks))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={query} onChange={handleQueryChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;

