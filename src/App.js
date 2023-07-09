import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Home from './components/pages/Home';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <React.Fragment>
        <Navbar/>
        <Sidebar />
    </React.Fragment>
  );
}

export default App;
