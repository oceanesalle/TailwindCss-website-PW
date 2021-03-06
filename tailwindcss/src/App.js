import React from 'react'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutCard from './components/AboutCard';
import Developers from './components/Developers';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <AboutCard />
      <Developers />
      <Subscribe />
      <Footer/>
      
    </div>
  );
}

export default App;
