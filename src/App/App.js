import React from 'react';
// import goatdata from '../helpers/data/goatData';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Goats</h2>
        <button className="btn btn-info">
        <i className="fas fa-torii-gate"></i>Goat Button<i className="fas fa-torii-gate"></i></button>
      </div>
    );
  }
}

export default App;
