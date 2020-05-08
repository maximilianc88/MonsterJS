import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Button from "./Components/Buttons";
import ContactForm from "./Components/ContactForm";

import CardList from "./Components/CardList";

import Social from "./Components/Social";
import SearchBar from "./Components/SearchBar";
import Figure from "./Components/Figure";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Footer />

      <Button />
      <ContactForm />
      <CardList />
      <Social />
      <Button value="Click!" styleClass="btn-default" />
      <ContactForm />
      <SearchBar value="Search!" />
      <Figure value="Your Text Here!" />
    </div>
  );
}

export default App;
