import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import ContactForm from "../Components/ContactForm";
import Card from "../Components/Card";

export default {
  title: 'Contact Form',
  component: ContactForm,
};

export const Sunset = () => 
<ContactForm />

export const Lagoon = () => 
<ContactForm />

export const Midnight = () => 
<ContactForm />

export const Moon = () => 
<ContactForm />