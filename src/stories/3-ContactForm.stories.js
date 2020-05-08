import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import ContactForm from "../Components/ContactForm";
import Card from "../Components/Card";

export default {
  title: 'Contact Form',
  component: ContactForm,
};

export const Sunset = () => 
<form>
<div class='form-elements sunset'>
<label class='sunset-label'>Sunset Contact Form</label>
<input class="text-action" placeholder="Your name" type="text"></input>
<input class="text-action" placeholder="Your Email Address" type="email"></input>
<input class="text-action" placeholder="Your Phone Number (optional)" type="text"></input>
<input class="text-action" placeholder="Type your message here" type="text"></input>
<input class="submit-action" type="submit"></input>
</div>
</form> 

export const Lagoon = () => 
<form>
<div class="form-elements lagoon">
<label class='lagoon-label'>Lagoon Contact Form</label>
<input class="text-action" placeholder="Your name" type="text"></input>
<input class="text-action" placeholder="Your Email Address" type="email"></input>
<input class="text-action" placeholder="Your Phone Number (optional)" type="text"></input>
<input class="text-action" placeholder="Type your message here" type="text"></input>
<input class="submit-action" type="submit"></input>
</div>
</form> 

export const Midnight = () => 
<form>
<div class='form-elements midnight'>
<label class='midnight-label'>Midnight Contact Form</label>
<input class="text-action" placeholder="Your name" type="text"></input>
<input class="text-action" placeholder="Your Email Address" type="email"></input>
<input class="text-action" placeholder="Your Phone Number (optional)" type="text"></input>
<input class="text-action" placeholder="Type your message here" type="text"></input>
<input class="submit-action" type="submit"></input>
</div>
</form> 


export const Moon = () => 
<form>
        <div class='form-elements moon'>
        <label class='moon-label'>Moon Contact Form</label>
        <input class="text-action" placeholder="Your name" type="text"></input>
        <input class="text-action" placeholder="Your Email Address" type="email"></input>
        <input class="text-action" placeholder="Your Phone Number (optional)" type="text"></input>
        <input class="text-action" placeholder="Type your message here" type="text"></input>
        <input class="submit-action" type="submit"></input>
        </div>
    </form>