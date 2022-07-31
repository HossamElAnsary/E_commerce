import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Components/Navbar/Navbar';
import SearchBar from './Components/SearchBar/SearchBar';
import BookData from './Data.json';
import MainContent from './Components/ProductCard/mainContent';
import { FooterContainer } from './Container/footer';
import './App.css';
import Subscribe from './Components/Subscribe/Subscribe';
import Info from './Components/Info/Info';

function App() {
  return (
    <div className="App">
      <SearchBar placeholder={`I'm Looking For ... `} data={BookData}/>
      <Navbar />
      <MainContent />
      <Subscribe />
      <Info />
      <FooterContainer />
    </div>
  );
}

export default App;
