import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Figure from "../Components/Figure";

export default {
  title: 'Figure',
  component: Figure,
};

export const Sunset = () => 
<Figure theme='sunset' caption='Who are ya gonna call?' imageSrc='https://www.fillmurray.com/500/500'/>

export const Lagoon = () => 
<Figure theme='lagoon' caption='Peter Venkman' imageSrc='https://www.fillmurray.com/320/450'/>

export const Midnight = () => 
<Figure theme='midnight' caption='Phil' imageSrc='https://www.fillmurray.com/250/250'/>

export const Moon = () => 
<Figure theme='moon' caption='Steve Zissou' imageSrc='https://www.fillmurray.com/200/300'/>