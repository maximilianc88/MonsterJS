import React from "react";
import Button from "../Components/Buttons";

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
    <Button value="Click here" theme="btn btn-sunset monster" />

    <Button value="Click!" theme="btn btn-sunset lg" />

    <Button value="Click!" theme="btn btn-sunset md" />

    <Button value="Click!" theme="btn btn-sunset sm" />
  </span>
);

export const Lagoon = () => (
  <span>
    <p>
      Buttons have 4 different sizes that can be passed into the size prop as
      the following classes:
      <br></br> <code>monster, lg, md, sm</code>
    </p>
    <Button value="Click!" theme="btn btn-lagoon monster" />
    <Button value="Click!" theme="btn btn-lagoon lg" />
    <Button value="Click!" theme="btn btn-lagoon md" />
    <Button value="Click!" theme="btn btn-lagoon sm" />
  </span>
);

export const Moon = () => (
  <span>
    <p>
      Buttons have 4 different sizes that can be passed into the size prop as
      the following classes:
      <br></br> <code>monster, lg, md, sm</code>
    </p>
    <Button value="Click!" theme="btn btn-moon monster" />
    <Button value="Click!" theme="btn btn-moon lg" />
    <Button value="Click!" theme="btn btn-moon md" />
    <Button value="Click!" theme="btn btn-moon sm" />
  </span>
);

export const Midnight = () => (
  <span>
    <p>
      Buttons have 4 different sizes that can be passed into the size prop as
      the following classes:
      <br></br> <code>monster, lg, md, sm</code>
    </p>
    <Button value="Click!" theme="btn btn-midnight monster" />
    <Button value="Click!" theme="btn btn-midnight lg" />
    <Button value="Click!" theme="btn btn-midnight md" />
    <Button value="Click!" theme="btn btn-midnight sm" />
  </span>
);
