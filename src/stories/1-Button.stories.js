import React from "react";
import Button from "../Components/Buttons";
import "../Components/style.css";

export default {
  title: "Buttons",
  component: Button,
};

export const Sunset = () => (
  <span>
    <p>
      Buttons have 4 different sizes that can be passed into the size prop as
      the following classes:
      <br></br> <code>monster, lg, md, sm</code>
    </p>
    <Button value="Click here" theme="sunset" size="monster" />

    <Button value="Click here" theme="sunset" size="lg" />

    <Button value="Click here" theme="sunset" size="md" />

    <Button value="Click here" theme="sunset" size="sm" />
  </span>
);

export const Lagoon = () => (
  <span>
    <p>
      Buttons have 4 different sizes that can be passed into the size prop as
      the following classes:
      <br></br> <code>monster, lg, md, sm</code>
    </p>
    <Button value="Click here" theme="lagoon" size="monster" />

    <Button value="Click here" theme="lagoon" size="lg" />

    <Button value="Click here" theme="lagoon" size="md" />

    <Button value="Click here" theme="lagoon" size="sm" />
  </span>
);

export const Moon = () => (
  <span>
    <p>
      Buttons have 4 different sizes that can be passed into the size prop as
      the following classes:
      <br></br> <code>monster, lg, md, sm</code>
    </p>
    <Button value="Click here" theme="moon" size="monster" />

    <Button value="Click here" theme="moon" size="lg" />

    <Button value="Click here" theme="moon" size="md" />

    <Button value="Click here" theme="moon" size="sm" />
  </span>
);

export const Midnight = () => (
  <span>
    <p>
      Buttons have 4 different sizes that can be passed into the size prop as
      the following classes:
      <br></br> <code>monster, lg, md, sm</code>
    </p>
    <Button value="Click here" theme="midnight" size="monster" />

    <Button value="Click here" theme="midnight" size="lg" />

    <Button value="Click here" theme="midnight" size="md" />

    <Button value="Click here" theme="midnight" size="sm" />
  </span>
);
