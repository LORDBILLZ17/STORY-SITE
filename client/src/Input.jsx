import React from 'react';

const Input = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search by title or author..."
      className="mb-6 max-w-md w-full border border-gray-300 rounded-lg p-2"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default Input;
