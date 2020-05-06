
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Button from "./Components/Buttons";


import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <ButtonList />
      <Button
        value='Click!'
        styleClass='btn-default' />
    </div>
  );
}

export default App;
