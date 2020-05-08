import React from 'react';
import Card from './Card';


const CardList = (props) => {
  return (
    <div>
        <h1> Cards:  </h1>
        <Card
        theme='sunset'
        cardImage='./gagaSunset.png'
        imageHeight='200px'
        title='Sunset!'
        value='Write a caption!'/>
           <Card
        theme='lagoon'
        cardImage='./gagaLagoon.png'
        imageHeight='200px'
        title='Lagoon!'
        value='Write a caption!'/>
           <Card
        theme='midnight'
        cardImage='./gagaMidnight.png'
        imageHeight='200px'
        title='Midnight!'
        value='write a caption!'/>
           <Card
        theme='moon'
        cardImage='./gagaMoon.png'
        imageHeight='200px'
        title='Moon!'
        value='Write a caption!'/>
      
    </div>
  );
};

export default CardList;