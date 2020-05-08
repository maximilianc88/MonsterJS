import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="comp-cat footers">
        <h1> Footers:</h1>
        <div className="footer-one">
          <div>
            <div className={`footer midnight`} id="myNav">
              <div className="foot-contents">
                <img src="./codeMonster(light).png" alt="logo" height="60px" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-two">
          <div>
            <div className={`footer lagoon`} id="myNav">
              <div className="foot-contents">
                <img src="./codeMonster.png" alt="logo" height="60px" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-three">
          <div>
            <div className={`footer sunset`} id="myNav">
              <div className="foot-contents">
                <img src="./codeMonster.png" alt="logo" height="60px" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-four">
          <div>
            <div className={`footer moon`} id="myNav">
              <div className="foot-contents">
                <img src="./codeMonster.png" alt="logo" height="60px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
