import React from 'react';
import './App.css';
import Navbar from './components/UI/navbar/nav';
import Footer from './components/UI/footer/footer';
import Main from './components/UI/main/main';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
