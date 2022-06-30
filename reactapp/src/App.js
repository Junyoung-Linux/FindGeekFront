import React from 'react';
import './App.css';
import CreateAccount from './CreateAccount';
import Mainpage from './MainPage';

class App extends React.Component {
  render(){
    return (
      <div className="App">
         <Mainpage />
      </div>
  );
  }
}

export default App;
