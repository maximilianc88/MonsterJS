import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ButtonList from './Components/Buttons';
import Button from './Components/Button';
import "./App.css";
import TestForm from './Components/Form/index'

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <ButtonList />
      <Button
        value='Click!'
        styleClass='btn-default' />
        <TestForm />
    </div>
  );
}

export default App;
