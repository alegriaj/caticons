import React from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';

const catNames = require('cat-names');

class App extends React.Component {
  constructor() {
    super();
    this.state = { cats: catNames.all, searchfield: '' };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { cats, searchfield } = this.state;
    const filteredCats = cats.filter((cat) =>
      cat.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div className='tc'>
        <h1 className='f1'>CatIcons!</h1>
        <h3>Find your cats cartoon alter ego!</h3>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList cats={filteredCats} />
      </div>
    );
  }
}

export default App;
