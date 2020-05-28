import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import Card from "../Components/CardList";

export default {
  title: "Card",
  component: Card,
};

export const Sunset = () => (
  <Card
    theme="sunset"
    cardImage="./gagaSunset.png"
    imageHeight="200px"
    title="Sunset Card Title"
    value="Add a caption here"
  />
);

export const Lagoon = () => (
  <Card
    theme="lagoon"
    cardImage="./gagaLagoon.png"
    imageHeight="200px"
    title="Lagoon theme card"
    value="Add a caption here"
  />
);

export const Midnight = () => (
  <Card
    theme="midnight"
    cardImage="./gagaMidnight.png"
    imageHeight="200px"
    title="Midnight theme card"
    value="Add a caption here"
  />
);

export const Moon = () => (
  <Card
    theme="moon"
    cardImage="./gagaMoon.png"
    imageHeight="200px"
    title="Moon theme card"
    value="Add a caption here"
  />
);
