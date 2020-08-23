import React from 'react'
import './main.scss'
import Navbar from "./component/navbar";
import CarouselComponent from './component/Carousel';

function App() {
  return (
    <div className="talia-portfolio-app">
      <Navbar />
      <CarouselComponent />
    </div>
  );
}

export default App;
