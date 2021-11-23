import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ cats }) => {
  const cardArray = cats.map((cat) => <Card key={cat} name={cat} />);
  return <div className='CardList'>{cardArray}</div>;
};

export default CardList;
