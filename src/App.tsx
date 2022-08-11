import React from 'react';
import './App.scss';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Experience />
    </div>
  );
}

export default App;
