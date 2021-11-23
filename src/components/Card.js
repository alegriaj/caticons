import React from 'react';
import './Card.css';

const Card = ({ name }) => {
  return (
    <div className='Card br3 pa3 ma2 grow bw2 shadow-5'>
      <img
        alt={name}
        height='200'
        width='200'
        src={`https://robohash.org/${name}.png?set=set4&size=200x200`}
      />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
