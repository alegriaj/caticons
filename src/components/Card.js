import React from 'react';

const Card = ({ name }) => {
  return (
    <div className='bg-light-green br3 pa3 ma2 grow bw2 shadow-5'>
      {/* <img
        alt={name}
        height='150'
        width='150'
        src=''
        //src={`https://robohash.org/${name}?200x200`}
      /> */}
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
