import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Service from './components/service'
import Skills from './components/skills'
import Team from './components/team'
import Contact from './components/contact'
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Skills/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
