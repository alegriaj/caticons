import React from 'react';
import Card from './Card';

const CardList = ({ cats }) => {
  const cardArray = cats.map((cat) => <Card key={cat} name={cat} />);
  return <div className='cardList'>{cardArray}</div>;
};

export default CardList;
