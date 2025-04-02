import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 pl-10 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
      />
      <span className="absolute left-3 top-3 text-gray-400">🔍</span>
    </div>
  );
};

export default SearchBar;
