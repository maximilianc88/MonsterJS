import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import Figure from "../Components/Figure";

export default {
  title: "Figure",
  component: Figure,
};

export const Sunset = () => (
  <Figure
    theme="sunset"
    caption="Add a caption here"
    imageSrc="gagaSunset.png"
  />
);

export const Lagoon = () => (
  <Figure
    theme="lagoon"
    caption="Add a caption here"
    imageSrc="gagaLagoon.png"
  />
);

export const Midnight = () => (
  <Figure
    theme="midnight"
    caption="Add a caption here"
    imageSrc="gagaMidnight.png"
  />
);

export const Moon = () => (
  <Figure theme="moon" caption="Add a caption here" imageSrc="gagaMoon.png" />
);
