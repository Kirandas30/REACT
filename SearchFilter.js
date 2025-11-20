import React, { useState } from 'react';

function SearchFilter() {
  const [query, setQuery] = useState('');
  const [students] = useState(['Kiran', 'Saalu', 'Kalyani', 'Jyoti', 'Sneha']);

  const filtered = students.filter(name =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search Students</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.length > 0 ? (
          filtered.map((name, index) => <li key={index}>{name}</li>)
        ) : (
          <p>No students found</p>
        )}
      </ul>
    </div>
  );
}

export default SearchFilter;
