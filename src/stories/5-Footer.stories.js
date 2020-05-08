import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Card from "../Components/Card";
import Footer from "../Components/Footer";
export default {
  title: 'Footer',
  component: Footer,
};

export const Sunset = () => 
<div className="footer-three">
          <div>
            <div className={`footer sunset`} id="myNav">
              <div className="foot-contents">
                <img src="./codeMonster.png" alt="logo" height="60px" />
              </div>
            </div>
          </div>
        </div>

export const Lagoon = () => 
<div className="footer-two">
          <div>
            <div className={`footer lagoon`} id="myNav">
              <div className="foot-contents">
                <img src="./codeMonster.png" alt="logo" height="60px" />
              </div>
            </div>
          </div>
        </div>

export const Midnight = () => 
<div className="footer-one">
<div>
  <div className={`footer midnight`} id="myNav">
    <div className="foot-contents">
      <img src="./codeMonster(light).png" alt="logo" height="60px" />
    </div>
  </div>
</div>
</div>

export const Moon = () => 
<div className="footer-four">
          <div>
            <div className={`footer moon`} id="myNav">
              <div className="foot-contents">
                <img src="./codeMonster.png" alt="logo" height="60px" />
              </div>
            </div>
          </div>
        </div>