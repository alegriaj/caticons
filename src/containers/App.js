import React, { useState } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';

const catNames = require('cat-names');

const App = () => {
  const [cats] = useState(catNames.all);
  const [searchfield, setSearchfield] = useState('');

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredCats = cats.filter((cat) =>
    cat.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <div className='tc'>
      <h1 className='f-6 pussyfoot'>CatIcons!</h1>
      Find your cats cartoon alter ego!
      <SearchBox searchChange={onSearchChange} />
      <CardList cats={filteredCats} />
    </div>
  );
};

export default App;
