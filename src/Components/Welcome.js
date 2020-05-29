import React from "react";
import "./style.css";

const Welcome = () => {
  return (
    <div className="welcome-div">
      <img src="codeMonster.png" alt="code monster logo" width="500"></img>

      <div className="main-area">
        {" "}
        <p>
          Welcome to The Code Monster, a fun and unique React component library.
          This is a Bootcamp project, turned open-source passion project.
          There's always a new feature to build or component to be updated, send
          us a message{" "}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=lenacm02@gmail.com">
            here
          </a>{" "}
          if you want to be a part of the fun!
          <br></br>
          <p>
            All of the current components can be viewed here, by category, size,
            and theme. Code Monster components are customizable using built in
            styling, however they are flible so you can add your own flare. We
            are confident that The Code Monster components are easily
            implemented into any applcation. Refer to the "props" tab for
            additional information on using our built in styling and preset
            properties.{" "}
            <a href="https://www.npmjs.com/package/the-code-monster">NPM</a> or{" "}
            <a href="https://github.com/malicemarie/the-code-monster">GitHub</a>
            .
          </p>
        </p>
        <h2>
          Check us out on{" "}
          <a href="https://www.npmjs.com/package/the-code-monster">npm</a>!
        </h2>
      </div>
    </div>
  );
};

export default Welcome;
