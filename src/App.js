import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Button from "./Components/Buttons";
import ContactForm from "./Components/ContactForm";
import Social from "./Components/Social";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Social />
      <Button value="Click!" styleClass="btn-default" />
      <ContactForm />
    </div>
  );
}

export default App;
