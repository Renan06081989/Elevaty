import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [dobStart, setDobStart] = useState('');
  const [dobEnd, setDobEnd] = useState('');

  const handleSearch = () => {
    onSearch(dobStart, dobEnd);
  };

  return (
    <div className="container">
      <label htmlFor="dobStart"><strong>Data de Nascimento Inicial:</strong></label>
      <input
        type="date"
        className="form-control"
        id="dobStart"
        value={dobStart}
        onChange={(e) => setDobStart(e.target.value)}
      />
      <label htmlFor="dobEnd"><strong>Data de Nascimento Final:</strong></label>
      <input
        type="date"
        className="form-control"
        id="dobEnd"
        value={dobEnd}
        onChange={(e) => setDobEnd(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Pesquisar
      </button>
    </div>
  );
};

export default SearchBar;
