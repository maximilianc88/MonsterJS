import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import ContactForm from "../Components/ContactForm";


export default {
  title: 'Contact Form',
  component: ContactForm,
};

export const Sunset = () => 
<ContactForm theme="sunset" placeholder1="foo" placeholder2="bar" placeholder3="baz" btnValue1="click" btnValue2="submit"/>

export const Lagoon = () => 
<ContactForm theme="lagoon" placeholder1="foo" placeholder2="bar" placeholder3="baz" btnValue1="click" btnValue2="submit"/>

export const Midnight = () => 
<ContactForm theme="midnight" placeholder1="foo" placeholder2="bar" placeholder3="baz" btnValue1="click" btnValue2="submit"/>


export const Moon = () => 
<ContactForm theme="moon" placeholder1="foo" placeholder2="bar" placeholder3="baz" btnValue1="click" btnValue2="submit"/>
