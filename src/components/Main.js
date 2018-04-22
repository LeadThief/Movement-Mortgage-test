import React from 'react';
import Banner from './Banner';
import About from './Aboutme';
import Signup from './Signup';
import Footer from './Footer';

const Main = (props) => {
    return (
      <div id="MMPage__main">
        <Banner/>
        <About/>
        <Signup/>
        <Footer/>
      </div>
    )
}

export default Main;
