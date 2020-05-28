import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import ContactForm from "../Components/ContactForm";

export default {
  title: "Contact Form",
  component: ContactForm,
};

export const Sunset = () => (
  <ContactForm
    theme="sunset"
    placeholder1="Name"
    placeholder2="Email"
    placeholder3="Phone number"
    btnValue1="Clear"
    btnValue2="Submit"
  />
);

export const Lagoon = () => (
  <ContactForm
    theme="lagoon"
    placeholder1="Name"
    placeholder2="Email"
    placeholder3="Phone number"
    btnValue1="Clear"
    btnValue2="Submit"
  />
);

export const Midnight = () => (
  <ContactForm
    theme="midnight"
    placeholder1="Name"
    placeholder2="Email"
    placeholder3="Phone number"
    btnValue1="Clear"
    btnValue2="Submit"
  />
);

export const Moon = () => (
  <ContactForm
    theme="moon"
    placeholder1="Name"
    placeholder2="Email"
    placeholder3="Phone number"
    btnValue1="Clear"
    btnValue2="Submit"
  />
);
