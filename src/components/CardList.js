import React from 'react';
import Card from './Card';

const CardList = ({cats}) => {
  // if (true) {
  //   throw new Error('Noooo!');
  // }
  return (
    <div>
      {
        cats.map((user, i) => {
        return (
          <Card 
            key={i} 
            id={cats[i].id} 
            name={cats[i].name} 
            email={cats[i].email} 
          />
        );
      })
    } 
    </div>
  );
}

export default CardList;