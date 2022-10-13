import './App.css';
import React from 'react';
import CountriesContainer from './containers/CountriesContainer';

function App() {
  return (
    <>
    <div className="App">
      <h1 className="title">Countries</h1>
      <CountriesContainer />
    </div>
    <footer className="footer">
      &copy; Duncan & Cammy
    </footer>
    </>
  );
}

export default App;
