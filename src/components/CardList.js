import React from 'react';

const CardList = ({ cats }) => {
  const cardArray = cats.map((cat) => {
    return <p>{cat}</p>;
  });
  return <div className='cardList'>{cardArray}</div>;
};

export default CardList;
