import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--dark-gray bg-moon-gray'
        type='search'
        placeholder='search cats'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
