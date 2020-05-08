import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import Social from "../Components/Social";

export default {
  title: "Social",
  component: Social,
};

export const All = () => (
  <Social
    size="60px"
    facebookLink="facebook.com"
    twitterLink="twitter.com"
    instagramLink="instagram.com"
    googlePlusLink="google.com"
    githubLink="github.com"
    emailAddress="this@email.com"
  />
);
