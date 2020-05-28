import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

import SearchBar from "../Components/SearchBar";

export default {
  title: "Search Bar",
  component: SearchBar,
};

export const Sunset = () => (
  <SearchBar
    theme={"sunset"}
    placeholderText={"Sunset Search..."}
    value={"Search"}
  />
);

export const Lagoon = () => (
  <SearchBar
    theme={"lagoon"}
    placeholderText={"Lagoon Search..."}
    value={"Search"}
  />
);

export const Midnight = () => (
  <SearchBar
    theme={"midnight"}
    placeholderText={"Midnight Search..."}
    value={"Search"}
  />
);

export const Moon = () => (
  <SearchBar
    theme={"moon"}
    placeholderText={"Moon Search..."}
    value={"Search"}
  />
);
