import React from 'react';

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="p-4">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2"
      >
        <option value="">All Locations</option>
        <option value="New York">New York</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Los Angeles">Los Angeles</option>
        {/* Add more filter options here */}
      </select>
    </div>
  );
};

export default Filters;
