// Core react imports
import React from 'react';
import './App.css';
// Css import
import Layout from './components/Layout/Layout'
// The main functional component that is imported into the index.js file
function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}
// Exporting our component to facilitate import
export default App;
