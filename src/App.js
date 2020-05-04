import React from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Button from "./Components/Button";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Button
        value='Click!'
        styleClass='btn-sunset' />
    </div>
  );
}

export default App;
