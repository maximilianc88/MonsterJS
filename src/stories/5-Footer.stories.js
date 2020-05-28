import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

import Footer from "../Components/Footer";
export default {
  title: "Footer",
  component: Footer,
};

export const Sunset = () => (
  <Footer theme="sunset" footerLogo="./codeMonster.png" logoHeight="60px" />
);

export const Lagoon = () => (
  <Footer theme="lagoon" footerLogo="./codeMonster.png" logoHeight="60px" />
);

export const Midnight = () => (
  <Footer
    theme="midnight"
    footerLogo="./codeMonster(light).png"
    logoHeight="60px"
  />
);

export const Moon = () => (
  <Footer theme="moon" footerLogo="./codeMonster.png" logoHeight="60px" />
);
