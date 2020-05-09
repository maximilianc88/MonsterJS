import React from "react";

const Welcome = () => {
  return (
    <div className="welcome-div">
      <h1>Welcome to Code Monster</h1>

      <h2>
        Check us out on{" "}
        <a href="https://www.npmjs.com/package/the-code-monster">npm</a>!
      </h2>
      <p>
        Check out our component library and themes in the modules to the left.
        To get started check out our documentation{" "}
        <a href="https://www.npmjs.com/package/the-code-monster">here</a> or{" "}
        <a href="https://github.com/malicemarie/the-code-monsterr">here</a>.
      </p>
    </div>
  );
};

export default Welcome;
