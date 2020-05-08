import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Card from "../Components/Card";
 
export default {
  title: 'Card',
  component: Card,
};

export const Sunset = () => 
<Card
theme='sunset'
cardImage="../../public/gagaSunset"
imageHeight='200px'
title='Sunset!'
value='Write a caption!'/>;

export const Lagoon = () => 
<Card
        theme='lagoon'
        cardImage='./gagaLagoon.png'
        imageHeight='200px'
        title='Lagoon!'
        value='Write a caption!'/>

export const Midnight = () => 
<Card
        theme='midnight'
        cardImage='./gagaMidnight.png'
        imageHeight='200px'
        title='Midnight!'
        value='Write a caption!'/>

export const Moon = () => 
<Card
        theme='moon'
        cardImage='./gagaMoon.png'
        imageHeight='200px'
        title='Moon!'
        value='Write a caption!'/>

