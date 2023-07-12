import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  function setNewQuery(e) {
    setQuery(e.target.value);
  }

  return <input className="search" type="text" placeholder="Search movies..." value={query} onChange={setNewQuery} />;
}
