import React, { Component } from 'react';
import './App.css';
import Header from './component/header/header';
import FormBox from './component/formBox/form';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FormBox />
      </div>
    );
  }
}

export default App;
