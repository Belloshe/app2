import React from 'react';
import './App.css'; // If you're using CSS
import ApiComponent from './components/ApiComponent';

function App() {
  return (
    <div className="app">
      <h1>Pokemon</h1>
      <ApiComponent />
    </div>
  );
}

export default App;
