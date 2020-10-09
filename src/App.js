import React from 'react'
import Menu from './components/menu'
import Home from './components/home'
import './App.css'

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <Home/>
      </header>
    </div>
  );
}

export default App;
