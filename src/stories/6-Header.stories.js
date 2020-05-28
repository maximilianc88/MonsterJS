import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

import Header from "../Components/Header";

export default {
  title: "Header",
  component: Header,
};

export const Sunset = () => <Header theme="sunset" logo="./codeMonster.png" />;

export const Lagoon = () => <Header theme="lagoon" logo="./codeMonster.png" />;

export const Midnight = () => (
  <Header theme="midnight" logo="./codeMonster.png" />
);

export const Moon = () => <Header theme="moon" logo="./codeMonster.png" />;
