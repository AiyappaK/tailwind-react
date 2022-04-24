import React from 'react';
import './App.css';
import Navbar from './components/UI/navbar/nav';
import Footer from './components/UI/footer/footer';
import Main from './components/UI/main/main';
import SlidingBanner from './components/UI/slidingBanner/Slidingbanner';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Main/>
        <SlidingBanner/>
        <Footer/>
    </div>
  );
}

export default App;
