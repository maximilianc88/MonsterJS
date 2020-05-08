import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";

export default {
  title: 'Search Bar',
  component: SearchBar,
};

export const Sunset = () => 
<SearchBar />

export const Lagoon = () => 
<SearchBar />

export const Midnight = () => 
<SearchBar />

export const Moon = () => 
<SearchBar />